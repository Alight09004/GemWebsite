function initSearchOverlay() {
    // Tránh inject nhiều lần nếu script bị gọi trùng
    if (document.getElementById("search-overlay-fullscreen")) return;

    // 1. Tạo và chèn CSS trực tiếp qua JS
    const style = document.createElement('style');
    style.innerHTML = `
        .search-overlay-fullscreen {
            height: 100%;
            width: 100%;
            display: none;
            position: fixed;
            z-index: 2000;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.95);
            overflow-x: hidden;
            transition: opacity 0.4s ease;
            opacity: 0;
        }
        .search-overlay-fullscreen.open {
            display: block;
            opacity: 1;
        }
        .search-overlay-content {
            position: relative;
            top: 15%;
            width: 80%;
            max-width: 800px;
            margin: auto;
            text-align: center;
            transform: translateY(-50px);
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            transition-delay: 0.1s;
        }
        .search-overlay-fullscreen.open .search-overlay-content {
            transform: translateY(0);
            opacity: 1;
        }
        .search-overlay-fullscreen .closebtn {
            position: absolute;
            top: 20px;
            right: 45px;
            font-size: 60px;
            cursor: pointer;
            color: #fff;
            transition: 0.3s;
            line-height: 1;
        }
        .search-overlay-fullscreen .closebtn:hover {
            color: #D4AF37;
        }
        .search-category-wrapper {
            margin-bottom: 15px;
        }
        .search-overlay-form-container {
            display: flex;
            align-items: center;
            border-bottom: 2px solid #D4AF37;
            padding: 10px 0;
            position: relative;
        }
        .search-category-select {
            background: transparent;
            color: #D4AF37;
            border: 1px solid rgba(212, 175, 55, 0.5);
            padding: 10px 15px;
            font-size: 1rem;
            border-radius: 30px;
            outline: none;
            font-family: 'Roboto', sans-serif;
            cursor: pointer;
            font-weight: bold;
            transition: 0.3s;
        }
        .search-category-select:hover {
            border-color: #D4AF37;
            background: rgba(212, 175, 55, 0.1);
        }
        .search-category-select option {
            color: #001f3f;
            background: #fff;
        }
        .search-overlay-content input[type="text"] {
            flex-grow: 1;
            padding: 15px;
            font-size: 1.5rem;
            border: none;
            background: transparent;
            color: #001f3f;
            font-family: 'Playfair Display', serif;
            outline: none;
            width: 100%;
            min-width: 0;
        }
        .search-overlay-content input[type="text"]::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }
        .search-overlay-content button[type="submit"] {
            background: transparent;
            border: none;
            cursor: pointer;
            color: #D4AF37;
            font-size: 1.5rem;
            padding: 0 10px;
            transition: 0.3s;
        }
        .search-overlay-content button[type="submit"]:hover {
            color: #fff;
        }
        .search-hint {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.95rem;
            margin-top: 15px;
            font-style: italic;
        }
        /* Live Search Results Styles */
        .overlay-search-results {
            position: absolute;
            top: calc(100% + 5px);
            left: 0;
            width: 100%;
            background: #fff;
            color: #001f3f;
            max-height: 350px;
            overflow-y: auto;
            border-radius: 0 0 8px 8px;
            text-align: left;
            margin-top: 2px;
            display: none;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            z-index: 10;
        }
        .overlay-search-results.show {
            display: block;
        }
        .overlay-result-item {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            text-decoration: none;
            color: #001f3f;
            border-bottom: 1px solid #eee;
            transition: background-color 0.2s;
        }
        .overlay-result-item:last-child {
            border-bottom: none;
        }
        .overlay-result-item:hover {
            background: #f8f9fa;
        }
        .overlay-result-item img {
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 4px;
            margin-right: 15px;
            border: 1px solid #eee;
        }
        .overlay-result-info {
            flex-grow: 1;
        }
        .overlay-result-info h6 {
            margin: 0 0 5px 0;
            font-size: 1.05rem;
            font-weight: bold;
            color: #001f3f;
        }
        .overlay-result-info p {
            margin: 0;
            color: #d42222;
            font-size: 0.95rem;
            font-weight: bold;
        }
        .overlay-result-view-all {
            display: block;
            text-align: center;
            padding: 12px;
            background: #f9f9f9;
            color: #001f3f;
            font-weight: bold;
            text-decoration: none;
            transition: 0.2s;
        }
        .overlay-result-view-all:hover {
            background: #eee;
            color: #D4AF37;
        }
    `;
    document.head.appendChild(style);

    // 2. Tạo và chèn cấu trúc HTML
    const overlayDiv = document.createElement('div');
    overlayDiv.id = "search-overlay-fullscreen";
    overlayDiv.className = "search-overlay-fullscreen";
    overlayDiv.innerHTML = `
        <span class="closebtn" onclick="closeFullscreenSearch()" title="Đóng tìm kiếm">&times;</span>
        <div class="search-overlay-content">
            <form id="fullscreen-search-form" action="#" method="get">
                <div class="search-category-wrapper">
                    <select id="fullscreen-search-category" class="search-category-select">
                        <option value="All">Tất cả danh mục</option>
                        <option value="DaQuy">Đá quý</option>
                        <option value="VangBac">Vàng bạc</option>
                        <option value="TrangSuc">Trang sức</option>
                        <option value="PhongThuy">Phong Thủy</option>
                        <option value="PhuKien">Phụ kiện</option>
                    </select>
                </div>
                <div class="search-overlay-form-container">
                    <input type="text" id="fullscreen-search-input" placeholder="Tìm kiếm đá quý, vàng bạc, trang sức..." name="q" autocomplete="off">
                    <button type="submit"><i class="fa fa-search"></i></button>
                    
                    <!-- Khung kết quả Live Search -->
                    <div id="overlay-search-results" class="overlay-search-results"></div>
                </div>
            </form>
            <p class="search-hint">Gợi ý: Nhẫn kim cương, vòng tay phong thủy, dây chuyền vàng 18k...</p>
        </div>
    `;
    document.body.appendChild(overlayDiv);

    // 3. Logic xử lý tìm kiếm
    const form = document.getElementById('fullscreen-search-form');
    const input = document.getElementById('fullscreen-search-input');
    const categorySelect = document.getElementById('fullscreen-search-category');
    const resultsContainer = document.getElementById('overlay-search-results');

    // Hàm xử lý Live Search (Tìm kiếm thời gian thực)
    function performLiveSearch() {
        const query = input.value.trim().toLowerCase();
        const category = categorySelect.value;
        
        if (query.length > 1) {
            if (typeof gemProducts !== 'undefined') {
                let filtered = gemProducts.filter(p => p.name.toLowerCase().includes(query));
                
                if (category !== 'All') {
                    filtered = filtered.filter(p => 
                        (Array.isArray(p.category) && p.category.includes(category)) || 
                        (Array.isArray(p.subCategory) && p.subCategory.includes(category)) ||
                        p.category === category || 
                        p.subCategory === category
                    );
                }

                if (filtered.length > 0) {
                    const topResults = filtered.slice(0, 4); // Lấy 4 kết quả đầu tiên
                    let html = topResults.map(p => `
                        <a href="detail.html?id=${p.id}" class="overlay-result-item">
                            <img src="${p.imgMain}" alt="${p.name}">
                            <div class="overlay-result-info">
                                <h6>${p.name}</h6>
                                <p>${p.price ? p.price.toLocaleString() + 'đ' : 'Liên hệ cửa hàng'}</p>
                            </div>
                        </a>
                    `).join('');
                    
                    if (filtered.length > 4) {
                        html += `<a href="#" onclick="document.querySelector('#fullscreen-search-form button[type=submit]').click(); return false;" class="overlay-result-view-all">Xem tất cả ${filtered.length} kết quả <i class="fas fa-arrow-right ms-1"></i></a>`;
                    }
                    
                    resultsContainer.innerHTML = html;
                    resultsContainer.classList.add('show');
                } else {
                    resultsContainer.innerHTML = '<div class="p-3 text-center" style="color: #001f3f;">Không tìm thấy sản phẩm nào phù hợp.</div>';
                    resultsContainer.classList.add('show');
                }
            } else {
                // Dành cho trang không chứa products.js (ví dụ Index)
                resultsContainer.innerHTML = '<div class="p-3 text-center" style="color: #001f3f;"><i class="fas fa-keyboard me-2"></i>Nhấn <strong>Enter</strong> để xem kết quả tìm kiếm...</div>';
                resultsContainer.classList.add('show');
            }
        } else {
            resultsContainer.classList.remove('show');
        }
    }

    // Gắn sự kiện khi gõ phím và khi thay đổi Danh mục
    input.addEventListener('input', performLiveSearch);
    categorySelect.addEventListener('change', performLiveSearch);

    // Ẩn kết quả khi click ra ngoài input
    document.addEventListener('click', function(e) {
        if (!input.contains(e.target) && !resultsContainer.contains(e.target) && !categorySelect.contains(e.target)) {
            resultsContainer.classList.remove('show');
        }
    });

    // Xử lý Submit Form chuẩn xác
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const query = input.value.trim();
        const category = categorySelect.value;
        
        if (query.trim() !== '') {
            closeFullscreenSearch(); // Đóng overlay
            
            if (typeof searchProducts === 'function' && document.getElementById('product-display-grid') && !window.location.pathname.includes('detail.html')) {
                if(typeof filterCat === 'function' && category !== 'All') {
                    filterCat(category);
                }
                searchProducts(query);
            } else {
                let url = `TrungBaySP.html?search=${encodeURIComponent(query)}`;
                if (category !== 'All') {
                    url += `&category=${encodeURIComponent(category)}`;
                }
                window.location.href = url;
            }
        }
    });

    // 4. Cho phép đóng khi nhấn phím ESC
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape") {
            closeFullscreenSearch();
        }
    });

    // 5. Cho phép đóng khi click ra ngoài vùng tối
    overlayDiv.addEventListener('click', function(event) {
        if (event.target === overlayDiv) {
            closeFullscreenSearch();
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initSearchOverlay);
} else {
    initSearchOverlay();
}

// Hàm gọi từ nút ở Navbar để mở Overlay
window.openFullscreenSearch = function() {
    const overlay = document.getElementById("search-overlay-fullscreen");
    if (overlay) {
        overlay.classList.add("open");
        // Đợi 100ms cho animation chạy xong rồi auto focus vào ô nhập liệu
        setTimeout(() => {
            document.getElementById('fullscreen-search-input').focus();
        }, 100);
    }
};

// Hàm đóng Overlay
window.closeFullscreenSearch = function() {
    const overlay = document.getElementById("search-overlay-fullscreen");
    if (overlay) {
        overlay.classList.remove("open");
    }
};