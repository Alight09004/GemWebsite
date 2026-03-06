const gemProducts = [
    {
        id: 1,
        name: "Nhẫn Kim Cương Moissanite Aidan",
        price: 2181000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb2.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb2-2.jpg.webp",
        category: "KimCuong"
    },
    {
        id: 2,
        name: "Mặt Dây Chuyền Sapphire Xanh",
        price: 5500000,
        imgMain: "./assets/img/Sapphire1.jpg",
        imgHover: "./assets/img/Sapphire1-hover.jpg",
        category: "Sapphire"
    },
    // Bạn chỉ cần thêm các sản phẩm khác vào đây...
];

function renderProducts(data) {
    const container = document.getElementById('product-display-grid');
    container.innerHTML = data.map(product => `
        <div class="product-card-v2">
            <div class="product-img-box">
                <img src="${product.imgMain}" class="img-main" />
                <img src="${product.imgHover}" class="img-hover"/>
            </div>
            <div class="product-info text-center">
                <h3 class="p-name">${product.name}</h3>
                <p class="p-price">${product.price.toLocaleString()}đ</p>
                <div class="p-buttons">
                    <button class="btn-add-cart" onclick="addToCart('${product.name}', ${product.price}, '${product.imgMain}')">
                        <i class="fas fa-cart-plus"></i>
                    </button>
                    <a href="detail.html?id=${product.id}" class="btn-buy-now">CHI TIẾT</a>
                </div>
            </div>
        </div>
    `).join('');
}


// --- HÀM 2: CẬP NHẬT BREADCRUMB ---
function updateBreadcrumb(label) {
    const breadcrumbList = document.getElementById('dynamic-breadcrumb');
    if (!breadcrumbList) return;

    // Giữ lại mục "Trang chủ", xóa các mục sau nó
    while (breadcrumbList.children.length > 1) {
        breadcrumbList.removeChild(breadcrumbList.lastChild);
    }

    const newLi = document.createElement('li');
    newLi.className = 'breadcrumb-item active text-gold fw-bold';
    newLi.innerText = label;
    breadcrumbList.appendChild(newLi);
}

// --- HÀM 3: LỌC THEO DANH MỤC ---
function filterCat(catKey) {
    const filtered = catKey === 'All' ? gemProducts : gemProducts.filter(p => p.category === catKey);
    renderProducts(filtered);
    updateBreadcrumb(categoryNames[catKey] || 'Sản phẩm');
}

// --- HÀM 4: TÌM KIẾM NHANH ---
function searchProducts(query) {
    const filtered = gemProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
    );
    renderProducts(filtered);
    updateBreadcrumb(`Kết quả cho: "${query}"`);
}

// --- KHỞI CHẠY KHI TRANG TẢI XONG ---
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');

    if (category && categoryNames[category]) {
        filterCat(category);
    } else {
        renderProducts(gemProducts);
        updateBreadcrumb('Tất cả sản phẩm');
    }

    // Gắn sự kiện cho ô tìm kiếm trong Navbar
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.btn-search');

    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            searchProducts(searchInput.value);
        });
    }
});