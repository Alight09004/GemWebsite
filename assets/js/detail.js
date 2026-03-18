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
        <img src="${product.imgMain}" 
             class="img-fluid rounded shadow-sm w-100"
             style="max-height: 500px; object-fit: cover;">
      </div>

      <!-- INFO -->
      <div class="col-md-6">
        <h3 class="fw-bold">${product.name}</h3>

        <p class="text-danger fs-4 fw-bold">
          ${product.price ? product.price.toLocaleString() + "đ" : "Giá liên hệ"}
        </p>

        <p><strong>Loại sản phẩm:</strong> ${
          categories.join(", ") || "Không có"
        }</p>

        <p><strong>Danh mục phụ:</strong> ${
          subCategories.join(", ") || "Không có"
        }</p>

        <div class="d-flex gap-2 mt-3">
          <button class="btn btn-danger px-4"
                  onclick="addToCartById(${product.id})">
            Mua ngay
          </button>

          <button class="btn btn-outline-dark px-4"
                  onclick="addToCartById(${product.id})">
            Thêm vào giỏ
          </button>
        </div>
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

// CART
function addToCartById(productId) {
  const product = gemProducts.find((p) => p.id === productId);
  if (product) {
    addToCart(product.name, product.price, product.imgMain);
  }
}