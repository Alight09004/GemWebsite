// Xử lý click link Sản phẩm - vừa dropdown vừa navigate
let sanphamDropdownClicked = false;

document.addEventListener('DOMContentLoaded', function() {
    const sanphamLink = document.querySelector('a[href="./TrungBaySP.html"][data-bs-toggle="dropdown"]');
    
    if (sanphamLink) {
        sanphamLink.addEventListener('click', function(e) {
            const dropdown = this.nextElementSibling;
            
            // Nếu dropdown đã mở, cho navigate
            if (dropdown && dropdown.classList.contains('show')) {
                window.location.href = './TrungBaySP.html';
            } else {
                // Dropdown chưa mở, ngăn navigate để cho dropdown mở
                e.preventDefault();
            }
        });
    }
});

// Khởi tạo dữ liệu mẫu
if (!localStorage.getItem('gems')) {
    const defaultData = [
        { id: 1712345678901, title: "Nhẫn Kim Cương Kim Bảo", desc: "Vàng 18K, kim cương tự nhiên 5.4ly", deadline: "2026-05-20", priority: "High", status: "Pending" },
        { id: 1712345678902, title: "Dây chuyền Ruby", desc: "Đá Ruby đỏ huyết bồ câu, thiết kế tinh xảo", deadline: "2026-06-15", priority: "Medium", status: "Done" }
    ];
    localStorage.setItem('gems', JSON.stringify(defaultData));
}

function getGems() {
    return JSON.parse(localStorage.getItem('gems')) || [];
}

function saveGems(data) {
    localStorage.setItem('gems', JSON.stringify(data));
}

// Hàm Export JSON (Bonus điểm)
function exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getGems()));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "gem_data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

async function loadProducts(type) {
    const container = document.getElementById('product-container');
    container.innerHTML = '<p class="text-center">Đang tải sản phẩm...</p>';

    try {
        const response = await fetch('./products.json'); // Đường dẫn tới file json của bạn
        const data = await response.json();
        const products = data[type];

        container.innerHTML = ''; // Xóa thông báo đang tải

        products.forEach(item => {
            const html = `
                <div class="col-md-3">
                    <div class="product-item-card">
                        <img src="${item.img}" alt="${item.name}">
                        <p class="small mt-2 mb-1">${item.name}</p>
                        <p class="price mb-1">${item.price.toLocaleString()} đ</p>
                        <span class="sold-count">${item.sold} đã bán</span>
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', html);
        });
    } catch (error) {
        console.error("Lỗi load JSON:", error);
        container.innerHTML = '<p class="text-center text-danger">Không thể tải dữ liệu.</p>';
    }
}

// Tự động load tab "Sản phẩm mới" khi trang chạy lần đầu
document.addEventListener('DOMContentLoaded', () => loadProducts('new'));

async function initProductSlider(type) {
    const $container = $('#product-container');

    // Hủy slider cũ nếu đang tồn tại để tránh lỗi chồng chéo
    if ($container.hasClass('slick-initialized')) {
        $container.slick('unslick');
    }

    try {
        const response = await fetch('./products.json');
        const data = await response.json();
        const products = data[type];

        let html = '';
        products.forEach(item => {
            html += `
                <div class="product-slide">
                    <div class="product-item-card shadow-sm">
                        <div class="text-end text-muted small"><i class="far fa-heart"></i></div>
                        <img src="${item.img}" class="img-fluid" alt="${item.name}">
                        <p class="small mt-3 mb-1 text-truncate">${item.name}</p>
                        <p class="price mb-1">${item.price.toLocaleString()} đ</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="badge bg-light text-dark" style="font-size: 10px;">0% Trả góp</span>
                            <span class="sold-count">${item.sold} đã bán</span>
                        </div>
                    </div>
                </div>`;
        });

        $container.html(html);

        // Khởi tạo Slick Slider
        $container.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: false,
            arrows: true,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3 } },
                { breakpoint: 768, settings: { slidesToShow: 1 } }
            ]
        });

    } catch (error) {
        console.error("Lỗi:", error);
    }
}

// Xử lý sự kiện đổi Tab
$(document).ready(function() {
    initProductSlider('new');

    $('.product-tabs-section .nav-link').click(function() {
        $('.product-tabs-section .nav-link').removeClass('active');
        $(this).addClass('active');
        const type = $(this).data('type');
        initProductSlider(type);
    });
});