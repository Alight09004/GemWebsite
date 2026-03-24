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
    if (product.specs && Object.keys(product.specs).length > 0) {
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

    // Logic to find related products
    let relatedProductsHtml = '';
    // Đảm bảo currentSubCategories luôn là một mảng để xử lý đồng nhất
    const currentSubCategories = Array.isArray(product.subCategory) ? product.subCategory : (product.subCategory ? [product.subCategory] : []);

    if (currentSubCategories.length > 0) {
        const relatedProducts = gemProducts.filter(p => {
            if (p.id == product.id) return false; // Exclude the current product
            
            // Đảm bảo pSubCats cũng luôn là một mảng
            const pSubCats = Array.isArray(p.subCategory) ? p.subCategory : (p.subCategory ? [p.subCategory] : []);

            // Check if there's any common subcategory
            return pSubCats.some(subCat => currentSubCategories.includes(subCat));
        }).slice(0, 4); // Get max 4 related products

        if (relatedProducts.length > 0) {
            relatedProductsHtml = '<div class="row g-3">';
            relatedProductsHtml += relatedProducts.map(rp => `
                <div class="col-6">
                    <a href="detail.html?id=${rp.id}" class="related-product-item-vertical text-decoration-none d-block">
                        <img src="${rp.imgMain}" alt="${rp.name}" class="img-fluid" style="aspect-ratio: 1/1; object-fit: cover;">
                        <div class="p-2 text-center">
                            <h6 class="mb-1 related-product-name-small">${rp.name}</h6>
                            <p class="mb-0 text-danger fw-bold small">${rp.price ? rp.price.toLocaleString() + 'đ' : 'Giá liên hệ'}</p>
                        </div>
                    </a>
                </div>
            `).join('');
            relatedProductsHtml += '</div>';
        }
    }
    if (relatedProductsHtml === '') {
        relatedProductsHtml = '<p class="text-muted small">Không có sản phẩm liên quan.</p>';
    }

    const productHtml = `
        <div class="row g-5">
            <!-- Image Gallery -->
            <div class="col-lg-1 d-none d-lg-block">
                <div class="thumbnail-vertical-container">
                    <button id="thumb-up" class="thumb-nav-btn mb-2" onclick="previousImage()"><i class="fas fa-chevron-up"></i></button>
                    <div class="thumbnail-track-wrapper">
                        <div class="thumbnail-track">
                            ${galleryImages.map((img, index) => `
                                <img src="${img}" class="thumbnail-selector ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${img}', this)">
                            `).join('')}
                        </div>
                    </div>
                    <button id="thumb-down" class="thumb-nav-btn mt-2" onclick="nextImage()"><i class="fas fa-chevron-down"></i></button>
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

        <!-- After-sales & Related Products Section -->
        <div class="row mt-5 pt-5 border-top">
            <!-- Left Column: After-sales Service -->
            <div class="col-lg-6 mb-5 mb-lg-0">
                <h3 class="mb-4 fw-bold" style="font-family: 'Playfair Display', serif; color: #001f3f; border-left: 4px solid #D4AF37; padding-left: 15px;">Dịch vụ hậu mãi / Bảo hành</h3>
                <p class="text-muted" style="line-height: 1.8;">Tại Jade Chamber, chúng tôi cam kết đồng hành cùng quý khách qua chính sách hậu mãi và bảo hành toàn diện.</p>
                <ul class="list-unstyled mt-3">
                    <li class="mb-2 d-flex align-items-start"><i class="fas fa-check-circle text-success me-2 mt-1"></i><span><strong>Bảo hành 12 tháng:</strong> Áp dụng cho các lỗi kỹ thuật sản xuất.</span></li>
                    <li class="mb-2 d-flex align-items-start"><i class="fas fa-check-circle text-success me-2 mt-1"></i><span><strong>Làm sạch, làm mới miễn phí trọn đời.</strong></span></li>
                    <li class="mb-2 d-flex align-items-start"><i class="fas fa-check-circle text-success me-2 mt-1"></i><span><strong>Chính sách thu đổi hấp dẫn.</strong></span></li>
                </ul>
                <a href="about.html" class="btn btn-outline-dark btn-sm mt-3">Xem chi tiết chính sách</a>
                <img src="./assets/img/ItemAboutUs/service.png" alt="Dịch vụ hậu mãi Jade Chamber" class="img-fluid rounded shadow-sm mt-4" style="max-width: 400px; display: block; margin: auto;">
            </div>

            <!-- Right Column: Related Products -->
            <div class="col-lg-6">
                <h3 class="mb-4 fw-bold" style="font-family: 'Playfair Display', serif; color: #001f3f; border-left: 4px solid #D4AF37; padding-left: 15px;">Sản phẩm liên quan</h3>
                <div id="related-products-container">
                    ${relatedProductsHtml}
                </div>
            </div>
        </div>
    `;

    container.innerHTML = productHtml;
    initThumbnailSlider();
});

function nextImage() {
    const activeThumb = document.getElementsByClassName('thumbnail-selector active');
    const inactiveThumbs = Array.from(document.querySelectorAll('.thumbnail-selector:not(.active)'));
    if (activeThumb.length > 0 && inactiveThumbs.length > 0) {
        const nextThumb = inactiveThumbs[0];
        changeMainImage(nextThumb.src, nextThumb);
    }
}

function previousImage() {
    const activeThumb = document.getElementsByClassName('thumbnail-selector active');
    const inactiveThumbs = Array.from(document.querySelectorAll('.thumbnail-selector:not(.active)'));
    if (activeThumb.length > 0 && inactiveThumbs.length > 0) {
        const prevThumb = inactiveThumbs[inactiveThumbs.length - 1];
        changeMainImage(prevThumb.src, prevThumb);
    }
}

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

    // function updateButtons() {
    //     upBtn.disabled = currentPosition <= 0;
    //     downBtn.disabled = currentPosition >= maxPosition;
    // }

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