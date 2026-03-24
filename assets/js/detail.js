document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  const product = gemProducts.find((p) => p.id === productId);
  const container = document.getElementById("product-detail-container");

  if (!product) {
    container.innerHTML = "<p>Sản phẩm không tồn tại.</p>";
    return;
  }

  // FIX CATEGORY
  const categories = Array.isArray(product.category)
    ? product.category
    : product.category
    ? [product.category]
    : [];

  const subCategories = Array.isArray(product.subCategory)
    ? product.subCategory
    : product.subCategory
    ? [product.subCategory]
    : [];

  // RELATED PRODUCTS
  const relatedProducts = gemProducts
    .filter((p) => {
      if (p.id === product.id) return false;

      const pCategories = Array.isArray(p.category)
        ? p.category
        : p.category
        ? [p.category]
        : [];

      return pCategories.some((c) => categories.includes(c));
    })
    .slice(0, 2);

  // RENDER UI
  container.innerHTML = `
    <div class="row g-4">
      
      <!-- IMAGE -->
      <div class="col-md-6">
        <!-- ẢNH CHÍNH -->
        <img id="mainImage"
          src="${product.imgMain}" 
          class="img-fluid rounded shadow-sm w-100"
          style="height: 480px; object-fit: cover;">

        <!-- ẢNH NHỎ -->
        <div class="d-flex gap-3 mt-3 justify-content-start" id="thumbnail-container">
            <img src="${product.imgMain}"
                class="img-thumbnail thumbnail-selector active"
                style="width: 70px; height: 70px;"
                onclick="changeImage(this, '${product.imgMain}')">
            ${
              product.imgHover
                ? `<img src="${product.imgHover}"
                      class="img-thumbnail thumbnail-selector"
                      style="width: 70px; height: 70px;"
                      onclick="changeImage(this, '${product.imgHover}')">`
                : ""
            }
        </div>
      </div>

      <!-- INFO -->
      <div class="col-md-6 d-flex flex-column">

  <h3 class="fw-bold">${product.name}</h3>

  <!-- GIÁ + ĐÃ BÁN -->
  <div class="d-flex align-items-center gap-3">
    <p class="text-danger fs-3 fw-bold mb-0">
      ${product.price ? product.price.toLocaleString() + "đ" : "Giá liên hệ"}
    </p>
    <span class="text-muted">
      | Đã bán: ${product.sold ?? 0}
    </span>
  </div>

  <p class="mt-2"><strong>Loại sản phẩm:</strong> ${categories.join(", ") || "Không có"}</p>
  <p><strong>Danh mục phụ:</strong> ${subCategories.join(", ") || "Không có"}</p>

  ${
    product.specs
      ? `
      <div class="product-specs">
        <h6 class="spec-title">Thông số chi tiết:</h6>
        <ul>
          ${product.specs.weight ? `<li><strong>Trọng lượng:</strong> ${product.specs.weight}</li>` : ''}
          ${product.specs.purity ? `<li><strong>Độ tinh khiết:</strong> ${product.specs.purity}</li>` : ''}
          ${product.specs.color ? `<li><strong>Màu sắc:</strong> ${product.specs.color}</li>` : ''}
          ${product.specs.cut ? `<li><strong>Giác cắt:</strong> ${product.specs.cut}</li>` : ''}
        </ul>
      </div>
      `
      : ""
  }

  ${
    categories.includes("TrangSuc") && product.sizes
      ? `
      <div class="size-selection mb-3">
        <div class="d-flex justify-content-between align-items-center mb-2">
            <label class="fw-bold mb-0">Chọn kích cỡ (cm):</label>
            <a href="#" class="text-decoration-none small" data-bs-toggle="modal" data-bs-target="#sizeGuideModal"><i class="fas fa-ruler-horizontal me-1"></i> Hướng dẫn đo size</a>
        </div>
        <div class="size-buttons">
          ${product.sizes.map((size, index) => `<button class="size-btn ${index === 0 ? 'active' : ''}">${size}</button>`).join('')}
        </div>
      </div>
      `
      : ""
  }

  <!-- SỐ LƯỢNG -->
  <div class="d-flex align-items-center gap-3 mb-3">
    <label class="fw-bold">Số lượng:</label>
    <input type="number" id="quantity" value="1" min="1"
           class="form-control"
           style="width: 80px;">
  </div>

  <div class="product-benefits my-3">
    <div class="benefit-tag">🚚 Miễn phí giao hàng</div>
    <div class="benefit-tag">📦 Phục vụ 24/7</div>
    <div class="benefit-tag">🔄 Thu đổi 48h</div>
  </div>

  <!-- BUTTON -->
  <button class="btn btn-danger w-100 py-2 fs-5 fw-bold mt-auto"
          onclick="buyNow(${product.id})" ${!product.price ? 'disabled' : ''}>
    <i class="fas fa-shopping-bag me-2"></i> ${product.price ? 'Mua ngay' : 'Sản phẩm chưa mở bán'}
  </button>

  <button class="btn btn-outline-dark w-100 mt-2 py-2 fs-5 fw-bold"
          onclick="addToCartById(${product.id})" ${!product.price ? 'disabled' : ''}>
    <i class="fas fa-cart-plus me-2"></i> ${product.price ? 'Thêm vào giỏ hàng' : 'Sản phẩm chưa mở bán'}
  </button>

</div>
    </div>

    <hr class="my-5">

    <div class="row">
  
      <!-- LEFT: CHI TIẾT -->
      <div class="col-md-6">
        <h4 class="mb-3">Chi tiết sản phẩm</h4>
        <p class="text-muted" style="line-height: 1.8;">
          ${product.detail || "Chưa có mô tả sản phẩm"}
        </p>
      </div>

      <!-- RIGHT: GIỮ CHỖ (cân layout) -->
      <div class="col-md-6">
        <img src="assets/img/ItemAboutUs/service.png" 
          class="img-fluid rounded shadow-sm"
          style="max-height: 800px; object-fit: cover;">
      </div>

    </div>

    <hr class="my-5">


    <!-- RELATED PRODUCTS -->
    <h4 class="mb-4">Sản phẩm liên quan</h4>

    <div class="row g-4">
      ${
        relatedProducts.length > 0
          ? relatedProducts.map((p) => {
              const safeName = p.name.replace(/'/g, "\\'");
              const pButtons = p.price
                ? `
                <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${safeName}', ${p.price}, '${p.imgMain}')">THÊM GIỎ HÀNG</button>
                <a href="checkout.html" class="btn-buy-now text-decoration-none text-center" onclick="event.stopPropagation(); addToCart('${safeName}', ${p.price}, '${p.imgMain}')">MUA NGAY</a>
                `
                : `
                <button class="btn-add-cart" disabled>LIÊN HỆ</button>
                <a href="#" class="btn-buy-now text-decoration-none text-center disabled" onclick="event.stopPropagation(); alert('Vui lòng liên hệ cửa hàng để biết giá sản phẩm này.');">LIÊN HỆ</a>
                `;
              return `
          <div class="col-6 col-md-4">
            <div class="product-card-v2 h-100 d-flex flex-column" style="cursor: pointer;" onclick="window.location.href='detail.html?id=${p.id}'">
                <div class="product-img-box">
                    <img src="${p.imgMain}" class="img-main" alt="${p.name}" />
                    <img src="${p.imgHover}" class="img-hover" alt="${p.name}" />
                </div>
                <div class="product-info flex-grow-1 d-flex flex-column">
                    <h3 class="p-name">${p.name}</h3>
                    <p class="p-price">${p.price ? p.price.toLocaleString() + 'đ' : '<i style="font-weight: normal;">Liên hệ</i>'}</p>
                    <div class="p-buttons mt-auto">${pButtons}</div>
                </div>
            </div>
          </div>
        `}).join("")
          : "<p>Không có sản phẩm liên quan</p>"
      }
    </div>
  `;

  // Add event listeners for size buttons
  document.querySelectorAll('.size-btn').forEach(button => {
      button.addEventListener('click', function() {
          document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
      });
  });
});
function changeImage(element, src) {
  const mainImg = document.getElementById("mainImage");
  if (mainImg) {
    mainImg.src = src;
  }
  // Xử lý trạng thái active cho ảnh thumbnail
  const thumbnails = document.querySelectorAll('.thumbnail-selector');
  thumbnails.forEach(thumb => thumb.classList.remove('active'));
  if (element) {
    element.classList.add('active');
  }
}
// CART
function addToCartById(productId) {
  const product = gemProducts.find((p) => p.id === productId);
  if (product) {
    addToCart(product.name, product.price, product.imgMain);
  }
}
function buyNow(productId) {
  const product = gemProducts.find((p) => p.id === productId);
  const quantity = parseInt(document.getElementById("quantity").value) || 1;

  if (product) {
    for (let i = 0; i < quantity; i++) {
      addToCart(product.name, product.price, product.imgMain);
    }
    window.location.href = "checkout.html";
  }
}