document.addEventListener("DOMContentLoaded", function () {
    // 1. Lấy ID sản phẩm từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    // 2. Tìm sản phẩm trong mảng gemProducts (từ file products.js)
    const product = gemProducts.find(p => p.id == productId);

    // 3. Lấy vùng chứa nội dung chi tiết
    const container = document.getElementById('product-detail-container');
    if (!container) return;

    // 4. Xử lý nếu không tìm thấy sản phẩm
    if (!product) {
        container.innerHTML = `
            <div class="text-center py-5">
                <h2 class="fw-bold">404</h2>
                <p class="lead">Không tìm thấy sản phẩm.</p>
                <a href="index.html" class="btn btn-dark">Quay về trang chủ</a>
            </div>
        `;
        return;
    }

    // 5. Tạo HTML và hiển thị chi tiết sản phẩm

    // Helper function để tạo HTML cho thông số kỹ thuật (dưới dạng bảng)
    let specsHtml = '';
    
    // Xử lý bộ lọc thông số riêng cho sản phẩm Kim Cương Tự Nhiên (ID: 68)
    if (product.id == 68) {
        specsHtml = `
        <div class="diamond-filter-box mt-5 p-4 border rounded-4 bg-white shadow-sm">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="fw-bold mb-0" style="color: #001f3f; letter-spacing: 1px;">BỘ LỌC KIM CƯƠNG CHUYÊN SÂU</h4>
                <button class="btn btn-sm text-muted" onclick="location.reload()"><i class="fas fa-redo me-1"></i> Làm mới</button>
            </div>

            <div class="row row-cols-1 row-cols-md-2 g-4">
                
                <div class="col">
                    <label class="fw-bold mb-3 d-block text-uppercase small">Giác cắt</label>
                    <div class="row g-2">
                        <div class="col-6"><button class="btn btn-outline-dark w-100 py-2 btn-filter-diamond">Fair</button></div>
                        <div class="col-6"><button class="btn btn-outline-dark w-100 py-2 btn-filter-diamond">Good</button></div>
                        <div class="col-6"><button class="btn btn-outline-dark w-100 py-2 btn-filter-diamond">Very Good</button></div>
                        <div class="col-6"><button class="btn btn-outline-dark w-100 py-2 btn-filter-diamond">Excellent</button></div>
                    </div>
                </div>

                <div class="col">
                    <label class="fw-bold mb-3 d-block text-uppercase small">Kích thước (Ly)</label>
                    <div class="row g-2">
                        <div class="col-4"><button class="btn btn-outline-dark w-100 py-1 btn-filter-diamond">3ly6</button></div>
                        <div class="col-4"><button class="btn btn-outline-dark w-100 py-1 btn-filter-diamond">4ly1</button></div>
                        <div class="col-4"><button class="btn btn-outline-dark w-100 py-1 btn-filter-diamond">4ly5</button></div>
                        <div class="col-4"><button class="btn btn-outline-dark w-100 py-1 btn-filter-diamond">5ly4</button></div>
                        <div class="col-4"><button class="btn btn-outline-dark w-100 py-1 btn-filter-diamond">6ly3</button></div>
                        <div class="col-4"><button class="btn btn-outline-dark w-100 py-1 btn-filter-diamond">7ly2</button></div>
                    </div>
                </div>

                <div class="col">
                    <label class="fw-bold mb-2 d-block text-uppercase small">Cấp màu</label>
                    <div class="filter-visual mb-2 rounded" style="height: 35px; background: linear-gradient(to right, #f8f9fa, #e9ecef, #dee2e6); border: 1px solid #eee;">
                        </div>
                    <input type="range" class="form-range diamond-range" min="0" max="5" step="1">
                    <div class="d-flex justify-content-between px-1 small fw-bold text-muted">
                        <span>I</span><span>H</span><span>G</span><span>F</span><span>E</span><span>D</span>
                    </div>
                </div>

                <div class="col">
                    <label class="fw-bold mb-2 d-block text-uppercase small">Độ tinh khiết</label>
                    <div class="filter-visual mb-2 rounded" style="height: 35px; background: linear-gradient(to right, #dee2e6, #ced4da, #adb5bd); border: 1px solid #eee;">
                        </div>
                    <input type="range" class="form-range diamond-range" min="0" max="4" step="1">
                    <div class="d-flex justify-content-between px-1 small fw-bold text-muted">
                        <span>VS2</span><span>VS1</span><span>VVS2</span><span>VVS1</span><span>IF</span>
                    </div>
                </div>
            </div>

            <div class="text-center mt-4">
                <button class="btn btn-dark px-5 py-3 fw-bold shadow-sm" style="background-color: #001f3f; border-radius: 50px;">
                    LƯU CẤU HÌNH KIM CƯƠNG CỦA BẠN
                </button>
            </div>
        </div>
        `;
    } else if (product.specs && Object.keys(product.specs).length > 0) {
        const specLabels = {
            weight: 'Trọng lượng',
            purity: 'Độ tinh khiết',
            color: 'Màu sắc',
            cut: 'Giác cắt',
            material: 'Chất liệu',
            stone: 'Loại đá',
            brand: 'Thương hiệu',
            technology: 'Công nghệ',
            includes: 'Bao gồm',
            function: 'Công dụng',
            size: 'Kích thước',
            usage: 'Sử dụng cho',
            certification: 'Chứng nhận',
            type: 'Loại'
        };
        specsHtml = `
            <div class="product-specs-container mt-5 pt-5 border-top">
                <h3 class="mb-4 fw-bold" style="font-family: 'Playfair Display', serif; color: #001f3f; border-left: 4px solid #D4AF37; padding-left: 15px;">Thông số kỹ thuật</h3>
                <table class="table table-bordered table-striped">
                    <tbody>
                        ${Object.entries(product.specs).map(([key, value]) => `
                            <tr>
                                <td class="fw-bold" style="width: 30%; background-color: #f8f9fa;">${specLabels[key] || (key.charAt(0).toUpperCase() + key.slice(1))}</td>
                                <td>${value}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;
    }

    // Helper function để tạo HTML cho các kích thước (size)
    let sizesHtml = '';
    if (product.sizes && product.sizes.length > 0) {
        let guideType = 'ring'; // Mặc định là nhẫn
        const subCats = product.subCategory || [];
        if (subCats.includes('LacTay') || subCats.includes('VongTayTyHuu') || subCats.includes('VongTay')) {
            guideType = 'bracelet';
        } 
        // Vòng cổ thường không có size, nhưng vẫn thêm logic để dự phòng
        else if (subCats.includes('DayChuyen') || subCats.includes('DayDeoThayThe')) {
            guideType = 'necklace';
        }

        const anchorId = `${guideType}-guide-anchor`;

        sizesHtml = `
            <div class="size-selection mt-4">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h6 class="mb-0 fw-bold">Chọn kích thước (Size)</h6>
                    <a href="#" class="small text-decoration-none" 
                       data-bs-toggle="modal" data-bs-target="#sizeGuideModal" 
                       onclick="prepareSizeGuideScroll('${anchorId}')">
                        <i class="fas fa-ruler-horizontal me-1"></i>Hướng dẫn đo size
                    </a>
                </div>
                <div class="size-buttons">
                    ${product.sizes.map(size => `<button class="size-btn" onclick="selectSize(this)">${size}</button>`).join('')}
                </div>
            </div>
        `;
    }

    // Hình ảnh chính và các ảnh thumbnail
    const mainImage = product.imgMain;
    const galleryImages = [mainImage, ...(product.gallery || [])];

    const productHtml = `
        <div class="row g-5">
            <!-- Image Gallery -->
            <div class="col-lg-1 d-none d-lg-block">
                <div class="thumbnail-vertical-container">
                    <button id="thumb-up" class="thumb-nav-btn mb-2"><i class="fas fa-chevron-up"></i></button>
                    <div class="thumbnail-track-wrapper">
                        <div class="thumbnail-track">
                            ${galleryImages.map((img, index) => `
                                <img src="${img}" class="thumbnail-selector ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                            `).join('')}
                        </div>
                    </div>
                    <button id="thumb-down" class="thumb-nav-btn mt-2"><i class="fas fa-chevron-down"></i></button>
                </div>
            </div>
            <div class="col-lg-5">
                <img id="main-product-image" src="${mainImage}" class="img-fluid rounded shadow-sm w-100" style="aspect-ratio: 1/1; object-fit: cover;">
            </div>

            <!-- Product Info -->
            <div class="col-lg-6">
                <h2 class="fw-bold mb-2" style="font-family: 'Playfair Display', serif; color: #001f3f;">${product.name}</h2>
                <div class="d-flex align-items-center mb-3 text-muted small">
                    <span>Đã bán: ${product.sold || 0}</span>
                    <span class="mx-2">|</span>
                    <span>Tồn kho: ${product.stock || 'Hết hàng'}</span>
                </div>
                <p class="display-6 fw-bold text-danger mb-3">${product.price ? product.price.toLocaleString() + 'đ' : 'Giá liên hệ'}</p>
                
                ${sizesHtml}

                <!-- Quantity & Actions -->
                <div class="d-flex align-items-center my-4">
                    <label class="me-3 fw-bold">Số lượng:</label>
                    <div class="d-flex align-items-center">
                        <button class="btn btn-outline-secondary btn-qty" onclick="changeDetailQty(-1)">-</button>
                        <input type="number" id="quantity-input" class="form-control qty-input mx-1" value="1" min="1" max="${product.stock || 1}">
                        <button class="btn btn-outline-secondary btn-qty" onclick="changeDetailQty(1)">+</button>
                    </div>
                </div>

                <div class="d-grid gap-2">
                    <button class="btn btn-dark btn-lg fw-bold" onclick="addToCart('${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.imgMain}')">
                        <i class="fas fa-cart-plus me-2"></i> Thêm vào giỏ hàng
                    </button>
                    <button class="btn btn-warning btn-lg fw-bold" onclick="buyNow('${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.imgMain}')">
                        Mua ngay
                    </button>
                </div>

                <div class="product-benefits mt-4">
                    <span class="benefit-tag"><i class="fas fa-check-circle text-success"></i> Miễn phí giao hàng</span>
                    <span class="benefit-tag"><i class="fas fa-check-circle text-success"></i> Bảo hành 12 tháng</span>
                    <span class="benefit-tag"><i class="fas fa-check-circle text-success"></i> Thu đổi 48h</span>
                </div>
            </div>
        </div>

        <!-- Product Description -->
        <div class="mt-5 pt-5 border-top">
            <h3 class="mb-4 fw-bold" style="font-family: 'Playfair Display', serif; color: #001f3f; border-left: 4px solid #D4AF37; padding-left: 15px;">Chi tiết sản phẩm</h3>
            <p class="text-muted" style="line-height: 1.8;">${product.detail}</p>
        </div>

        <!-- Product Specs -->
        ${specsHtml}
    `;

    container.innerHTML = productHtml;
    initThumbnailSlider();
});

function changeMainImage(src, thumbElement) {
    document.getElementById('main-product-image').src = src;
    document.querySelectorAll('.thumbnail-selector').forEach(el => el.classList.remove('active'));
    thumbElement.classList.add('active');
}

function prepareSizeGuideScroll(anchorId) {
    const modalEl = document.getElementById('sizeGuideModal');
    if (!modalEl) return;

    // Hàm xử lý cuộn khi modal đã hiển thị
    const scrollHandler = () => {
        const anchor = document.getElementById(anchorId);
        if (anchor) {
            const modalBody = modalEl.querySelector('.modal-body');
            const y = anchor.offsetTop;
            modalBody.scrollTo({
                top: y - 20, // Trừ đi một chút padding để tiêu đề không bị dính sát mép trên
                behavior: 'smooth'
            });
        }
    };

    // Lắng nghe sự kiện 'shown.bs.modal' và chỉ chạy một lần
    modalEl.addEventListener('shown.bs.modal', scrollHandler, { once: true });
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(el => el.classList.remove('active'));
    btn.classList.add('active');
}

function changeDetailQty(delta) {
    const input = document.getElementById('quantity-input');
    let currentValue = parseInt(input.value);
    const max = parseInt(input.max);
    currentValue += delta;
    if (currentValue < 1) currentValue = 1;
    if (currentValue > max) currentValue = max;
    input.value = currentValue;
}

function buyNow(name, price, img) {
    addToCart(name, price, img);
    window.location.href = 'checkout.html';
}

function initThumbnailSlider() {
    const track = document.querySelector('.thumbnail-track');
    if (!track) return;
    const upBtn = document.getElementById('thumb-up');
    const downBtn = document.getElementById('thumb-down');
    const wrapperHeight = document.querySelector('.thumbnail-track-wrapper').clientHeight;
    const itemHeight = 80 + 10; // height + gap
    let currentPosition = 0;
    const maxPosition = track.scrollHeight - wrapperHeight;

    function updateButtons() {
        upBtn.disabled = currentPosition <= 0;
        downBtn.disabled = currentPosition >= maxPosition;
    }

    upBtn.addEventListener('click', () => {
        currentPosition -= itemHeight;
        if (currentPosition < 0) currentPosition = 0;
        track.style.transform = `translateY(-${currentPosition}px)`;
        updateButtons();
    });

    downBtn.addEventListener('click', () => {
        currentPosition += itemHeight;
        if (currentPosition > maxPosition) currentPosition = maxPosition;
        track.style.transform = `translateY(-${currentPosition}px)`;
        updateButtons();
    });

    updateButtons();
}