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
    .slice(0, 4);

  // RENDER UI
  container.innerHTML = `
    <div class="row g-4">
      
      <!-- IMAGE -->
      <div class="col-md-6">
        <!-- ẢNH CHÍNH -->
        <img id="mainImage"
          src="${product.imgMain}" 
          class="img-fluid rounded shadow-sm w-100"
          style="max-height: 500px; object-fit: cover;">
      </div>

      <!-- INFO -->
      <div class="col-md-6 d-flex flex-column">

  <h3 class="fw-bold">${product.name}</h3>

  <!-- GIÁ + ĐÃ BÁN -->
  <div class="d-flex align-items-center gap-3">
    <p class="text-danger fs-4 fw-bold mb-0">
      ${product.price ? product.price.toLocaleString() + "đ" : "Giá liên hệ"}
    </p>
    <span class="text-muted">
      | Đã bán: ${product.sold ?? 0}
    </span>
  </div>

  <p class="mt-2"><strong>Loại sản phẩm:</strong> ${categories.join(", ") || "Không có"}</p>
  <p><strong>Danh mục phụ:</strong> ${subCategories.join(", ") || "Không có"}</p>

  <!-- SỐ LƯỢNG -->
  <div class="d-flex align-items-center gap-3 mb-3">
    <label class="fw-bold">Số lượng:</label>
    <input type="number" id="quantity" value="1" min="1"
           class="form-control"
           style="width: 80px;">
  </div>

  <!-- BUTTON -->
  <button class="btn btn-danger w-100 py-3 fs-5 fw-bold"
          onclick="buyNow(${product.id})">
    Mua ngay
  </button>

  <button class="btn btn-outline-dark w-100 mt-3 py-2"
          onclick="addToCartById(${product.id})">
    Thêm vào giỏ
  </button>

  <!-- ẢNH NHỎ -->
  <div class="d-flex gap-2 mt-4 justify-content-start">
    
    <img src="${product.imgMain}" 
         class="img-thumbnail"
         style="width: 80px; height: 80px; object-fit: cover; cursor: pointer;"
         onclick="changeImage('${product.imgMain}')">

    ${
      product.imgHover
        ? `
      <img src="${product.imgHover}" 
           class="img-thumbnail"
           style="width: 80px; height: 80px; object-fit: cover; cursor: pointer;"
           onclick="changeImage('${product.imgHover}')">
      `
        : ""
    }

  </div>

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


    <!-- RELATED -->
    <h4 class="mb-4">Sản phẩm liên quan</h4>

    <div class="row">
      ${
        relatedProducts.length > 0
          ? relatedProducts
              .map(
                (p) => `
          <div class="col-md-3 mb-4">
            <div class="card h-100 shadow-sm">
              
              <img src="${p.imgMain}" 
                   class="card-img-top"
                   style="height:200px; object-fit:cover;">

              <div class="card-body d-flex flex-column">
                <h6 class="card-title">${p.name}</h6>

                <p class="text-danger fw-bold">
                  ${
                    p.price
                      ? p.price.toLocaleString() + "đ"
                      : "Liên hệ"
                  }
                </p>

                <a href="detail.html?id=${p.id}" 
                   class="btn btn-dark btn-sm mt-auto">
                  Xem chi tiết
                </a>
              </div>
            </div>
          </div>
        `
              )
              .join("")
          : "<p>Không có sản phẩm liên quan</p>"
      }
    </div>
  `;
});
function changeImage(src) {
  const mainImg = document.getElementById("mainImage");
  if (mainImg) {
    mainImg.src = src;
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