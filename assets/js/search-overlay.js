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
            z-index: 2050;
            top: 0;
            left: 0;
            background-color: rgba(0, 31, 63, 0.7);
            backdrop-filter: blur(5px);
            overflow-x: hidden;
            justify-content: center;
            align-items: flex-start;
            padding-top: 10vh;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .search-overlay-fullscreen.open {
            display: flex;
            opacity: 1;
        }
        .search-overlay-box {
            width: 90%;
            max-width: 800px;
            background: #fff;
            border-radius: 16px;
            padding: 30px;
            position: relative;
            transform: translateY(-30px);
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
            transition-delay: 0.1s;
            box-shadow: 0 20px 50px rgba(0,0,0,0.2);
        }
        .search-overlay-fullscreen.open .search-overlay-box {
            transform: translateY(0);
            opacity: 1;
        }
        .search-overlay-fullscreen > .closebtn {
            position: absolute;
            top: 30px;
            right: 40px;
            font-size: 40px;
            cursor: pointer;
            color: rgba(255, 255, 255, 0.7);
            background: none;
            border: none;
            transition: 0.3s;
            padding: 0;
            line-height: 1;
        }
        .search-overlay-fullscreen > .closebtn:hover {
            color: #fff;
            transform: scale(1.1);
        }
        .search-input-wrapper {
            display: flex;
            align-items: center;
            border: 2px solid #eee;
            border-radius: 50px;
            background: #fff;
            transition: 0.3s;
            margin-bottom: 25px;
            overflow: hidden;
        }
        .search-input-wrapper:focus-within {
            border-color: #D4AF37;
            box-shadow: 0 0 0 4px rgba(212, 175, 55, 0.1);
        }
        .btn-search-icon {
            background: none;
            border: none;
            color: #999;
            font-size: 1.2rem;
            padding: 15px 15px 15px 25px;
            cursor: pointer;
            transition: 0.3s;
        }
        .btn-search-icon:hover { color: #D4AF37; }
        .search-input-wrapper input {
            flex-grow: 1;
            padding: 15px 10px;
            border: none;
            background: transparent;
            font-size: 1.1rem;
            color: #001f3f;
            outline: none;
            min-width: 0;
        }
        .search-input-wrapper input::placeholder {
            color: #aaa;
        }
        .search-category-select {
            border: none;
            background: #f8f9fa;
            color: #001f3f;
            padding: 15px 25px;
            font-weight: bold;
            outline: none;
            cursor: pointer;
            border-left: 1px solid #eee;
        }
        
        /* Suggestions */
        .search-suggestions-container {
            display: flex;
            gap: 40px;
            text-align: left;
        }
        .suggestion-col {
            flex: 1;
        }
        .suggestion-col h4 {
            font-size: 1rem;
            font-weight: bold;
            color: #001f3f;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .suggestion-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .suggestion-tags span {
            background: #f5f5f5;
            color: #555;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            cursor: pointer;
            transition: 0.2s;
            border: 1px solid transparent;
        }
        .suggestion-tags span:hover {
            background: #fffbf0;
            color: #D4AF37;
            border-color: #D4AF37;
        }
        /* Live Search Results Styles */
        .overlay-search-results {
            display: none;
            text-align: left;
            max-height: 350px;
            overflow-y: auto;
        }
        .overlay-search-results.show {
            display: block;
        }
        .overlay-result-item {
            display: flex;
            align-items: center;
            padding: 12px 15px;
            text-decoration: none;
            color: #001f3f;
            border-radius: 8px;
            transition: 0.2s;
            margin-bottom: 5px;
        }
        .overlay-result-item:hover {
            background: #f8f9fa;
            transform: translateX(5px);
        }
        .overlay-result-item img {
            width: 50px;
            height: 50px;
            object-fit: cover;
            border-radius: 6px;
            margin-right: 15px;
            border: 1px solid #eee;
        }
        .overlay-result-info {
            flex-grow: 1;
        }
        .overlay-result-info h6 {
            margin: 0 0 4px 0;
            font-size: 0.95rem;
            font-weight: bold;
            color: #001f3f;
        }
        .overlay-result-info p {
            margin: 0;
            color: #d42222;
            font-size: 0.9rem;
            font-weight: bold;
        }
        .overlay-result-view-all {
            display: block;
            text-align: center;
            padding: 12px;
            background: #fffbf0;
            color: #D4AF37;
            font-weight: bold;
            text-decoration: none;
            border-radius: 8px;
            margin-top: 10px;
            transition: 0.2s;
        }
        .overlay-result-view-all:hover {
            background: #D4AF37;
            color: #fff;
        }
        
        .overlay-search-results::-webkit-scrollbar { width: 6px; }
        .overlay-search-results::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .overlay-search-results::-webkit-scrollbar-thumb { background: #ccc; border-radius: 10px; }
        .overlay-search-results::-webkit-scrollbar-thumb:hover { background: #D4AF37; }
        
        @media (max-width: 768px) {
            .search-overlay-fullscreen > .closebtn {
                top: 15px;
                right: 20px;
                font-size: 30px;
            }
            .search-suggestions-container { flex-direction: column; gap: 20px; }
            .search-category-select { display: none; }
            .search-overlay-box { padding: 20px; }
        }
    `;
    document.head.appendChild(style);

    // 2. Tạo và chèn cấu trúc HTML
    const overlayDiv = document.createElement('div');
    overlayDiv.id = "search-overlay-fullscreen";
    overlayDiv.className = "search-overlay-fullscreen";
    overlayDiv.innerHTML = `
        <button class="closebtn" onclick="closeFullscreenSearch()" title="Đóng tìm kiếm"><i class="fas fa-times"></i></button>
        <div class="search-overlay-box">
            <form id="fullscreen-search-form" action="#" method="get">
                <div class="search-input-wrapper">
                    <button type="submit" class="btn-search-icon"><i class="fa fa-search"></i></button>
                    <input type="text" id="fullscreen-search-input" placeholder="Tìm kiếm đá quý, vàng bạc, trang sức..." name="q" autocomplete="off">
                    <select id="fullscreen-search-category" class="search-category-select">
                        <option value="All">Tất cả danh mục</option>
                        <option value="DaQuy">Đá quý</option>
                        <option value="VangBac">Vàng bạc</option>
                        <option value="TrangSuc">Trang sức</option>
                        <option value="PhongThuy">Phong Thủy</option>
                        <option value="PhuKien">Phụ kiện</option>
                    </select>
                </div>
            </form>

            <div id="search-suggestions-container" class="search-suggestions-container">
                <div class="suggestion-col">
                    <h4><i class="fas fa-fire text-danger"></i> Top tìm kiếm</h4>
                    <div class="suggestion-tags">
                        <span onclick="window.setSearchValue('Nhẫn kim cương')">Nhẫn kim cương</span>
                        <span onclick="window.setSearchValue('Dây chuyền vàng')">Dây chuyền vàng</span>
                        <span onclick="window.setSearchValue('Bông tai')">Bông tai</span>
                        <span onclick="window.setSearchValue('Đá Sapphire')">Đá Sapphire</span>
                        <span onclick="window.setSearchValue('Lắc tay bạc')">Lắc tay bạc</span>
                    </div>
                </div>
                <div class="suggestion-col">
                    <h4><i class="fas fa-bolt text-warning"></i> Dịch vụ hot</h4>
                    <div class="suggestion-tags">
                        <span onclick="window.location.href='about.html'">Trả góp 0%</span>
                        <span onclick="window.location.href='about.html'">Giao hàng 3h</span>
                        <span onclick="window.location.href='about.html'">Thu đổi 48h</span>
                        <span onclick="window.location.href='about.html'">Làm sạch miễn phí</span>
                    </div>
                </div>
            </div>

            <!-- Khung kết quả Live Search -->
            <div id="overlay-search-results" class="overlay-search-results"></div>
        </div>
    `;
    document.body.appendChild(overlayDiv);

    // 3. Logic xử lý tìm kiếm
    const form = document.getElementById('fullscreen-search-form');
    const input = document.getElementById('fullscreen-search-input');
    const categorySelect = document.getElementById('fullscreen-search-category');
    const resultsContainer = document.getElementById('overlay-search-results');
    const suggestionsContainer = document.getElementById('search-suggestions-container');

    // Hàm xử lý Live Search (Tìm kiếm thời gian thực)
    function performLiveSearch() {
        const query = input.value.trim().toLowerCase();
        const category = categorySelect.value;
        
        if (query.length > 0) {
            suggestionsContainer.style.display = 'none'; // Ẩn gợi ý mặc định

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
                        html += `<a href="#" onclick="document.getElementById('fullscreen-search-form').dispatchEvent(new Event('submit', {cancelable: true, bubbles: true})); return false;" class="overlay-result-view-all">Xem tất cả ${filtered.length} kết quả <i class="fas fa-arrow-right ms-1"></i></a>`;
                    }
                    
                    resultsContainer.innerHTML = html;
                    resultsContainer.classList.add('show');
                } else {
                    resultsContainer.innerHTML = '<div class="p-4 text-center text-muted"><i class="fas fa-box-open fa-2x mb-3 opacity-50"></i><br>Không tìm thấy sản phẩm nào phù hợp.</div>';
                    resultsContainer.classList.add('show');
                }
            } else {
                // Dành cho trang không chứa products.js (ví dụ Index)
                resultsContainer.innerHTML = '<div class="p-4 text-center text-muted"><i class="fas fa-keyboard fa-2x mb-3 opacity-50"></i><br>Nhấn <strong>Enter</strong> để xem kết quả tìm kiếm...</div>';
                resultsContainer.classList.add('show');
            }
        } else {
            resultsContainer.classList.remove('show');
            suggestionsContainer.style.display = 'flex'; // Hiện lại gợi ý mặc định
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

// Hàm thiết lập giá trị tìm kiếm từ tag gợi ý
window.setSearchValue = function(val) {
    const input = document.getElementById('fullscreen-search-input');
    if(input) {
        input.value = val;
        input.dispatchEvent(new Event('input')); // Kích hoạt Live Search
        input.focus();
    }
};

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