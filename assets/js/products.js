const gemProducts = [
    {
        id: 1,
        name: "Nhẫn bạc nữ đính kim cương Moissanite Aidan",
        price: 2181000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb2.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb2-2.jpg.webp",
        category: "KimCuong"
    },

    {
        id: 3,
        name: "Bông tai Vàng trắng 41,6% (10K) đính đá",
        price: 13070000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gbxmxmw060874-bong-tai-vang-10k-dinh-da-ecz-pnj-1.png",
        imgHover: "#",
        category: "VangTrang"
    },
    {
        id: 4,
        name: "Lắc tay Vàng 58,5% (14K)",
        price: 15370000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gl0000y060888-lac-tay-vang-14k-pnj-1.png",
        imgHover: "#",
        category: "Vang18K"
    },
    {
        id: 5,
        name: "Lắc tay Vàng trắng Ý 75% (18K)",
        price: 15892000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gl0000w001534-lac-tay-vang-trang-y-18k-pnj-1.png",
        imgHover: "#",
        category: "VangTrang"
    },
    {
        id: 6,
        name: "Bông tai Kim cương Vàng trắng 58,5% (14K)",
        price: 46200000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gbdd00w060198-bong-tai-kim-cuong-vang-trang-14k-pnj-1.png",
        imgHover: "#",
        category: "VangTrang"
    },
    {
        id: 7,
        name: "Nhẫn Kim cương Vàng trắng 58,5% (14K)",
        price: 34620000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gndd00w060464-nhan-kim-cuong-vang-trang-14k-pnj-1.png",
        imgHover: "#",
        category: "VangTrang"
    },
    {
        id: 8,
        name: "Mặt dây chuyền Vàng trắng 58,5% (14K) đính đá Sapphire",
        price: 8740000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gmsp00w000028-mat-day-chuyen-vang-14k-dinh-da-sapphire-pnj-1.png",
        imgHover: "#",
        category: "Sapphire"
    },
    {
        id: 9,
        name: "Mặt dây chuyền Vàng 75% (18K) đính Ngọc trai Southsea",
        price: 24610000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gmpsddc060001-mat-day-chuyen-vang-dinh-ngoc-trai-southsea-pnj-1.png",
        imgHover: "#",
        category: "Vang18K"
    },
    {
        id: 10,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá",
        price: 10551000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gnxmxmw005643-nhan-vang-14k-dinh-da-ecz-pnj-1.png",
        imgHover: "#",
        category: "VangTrang"
    }
    
];


const categoryNames = { 'All': 'Tất cả sản phẩm', 'KimCuong': 'Kim cương', 'VangTrang': 'Vàng trắng', 'Vang18K': 'Vàng 18K', 'Sapphire': 'Sapphire', 'Ruby': 'Ruby', 'Emerald': 'Emerald', 'Topaz': 'Topaz' };

function renderProducts(data) {
    const container = document.getElementById('product-display-grid');
    if (!container) return;
    container.innerHTML = data.map(product => `
        <div class="col-lg-3 col-md-6 mb-4">
            <a href="detail.html?id=${product.id}" class="product-card-v2-link">
                <div class="product-card-v2">
                    <div class="product-img-box">
                        <img src="${product.imgMain}" class="img-main" />
                        <img src="${product.imgHover}" class="img-hover"/>
                    </div>
                    <div class="product-info">
                        <h3 class="p-name">${product.name}</h3>
                        <p class="p-price">${product.price.toLocaleString()}đ</p>
                    </div>
                </div>
            </a>
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


// Dữ liệu nội dung các Tab (Dòng hàng nổi bật)
const tabData = {
    'kim-cuong': {
        title: 'Trang Sức Kim Cương',
        desc: 'Xuân rạng rỡ sắc xuân mới hàng mẫu kim cương mới khắc họa tinh hoa mùa mới qua đường nét hoa – lá mềm mại. Với đa dạng mẫu mã và khung giá từ tối giản đến cầu kỳ, mỗi sản phẩm đều được chế tác tỉ mỉ, mang đến trải nghiệm đẳng cấp khách hàng yêu thích sự sang trọng ngày đầu năm. Thần Tài – Đón lộc tài với thiết kế mới dòng sản phẩm kim cương cho ngày Thần Tài nổi bật với họa tiết kim tiền tròn đầy, sắc sảo. Từng sản phẩm được chế tác tỉ mỉ giúp khách hàng dễ dàng sở hữu món trang sức đẳng cấp để khởi đầu năm mới thuận lợi, vạn sự như ý.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-kim-cuong.jpg'
    },
    'ngoc-trai': {
        title: 'Trang Sức Ngọc Trai',
        desc: 'Bộ sưu tập ngọc trai là lời thì thầm ngọt ngào của mùa xuân, nơi ánh ngọc trong trẻo hòa quyện cùng sắc xuân tươi mới. Mỗi thiết kế tôn vinh vẻ đẹp cuốn hút dịu dàng, giúp nàng tỏa sáng rạng rỡ với phong thái thanh lịch khó trộn lẫn. Được chế tác tỉ mỉ và tinh xảo, những tuyệt tác này không chỉ là trang sức mà còn là biểu tượng của sự thuần khiết, mang đến vẻ ngoài quý phái và sức sống rạng ngời cho phái đẹp.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-ngoc-trai.jpg'
    },
    'day-chuyen': {
        title: 'Trang Sức Dây Chuyền',
        desc: 'Khẳng định đẳng cấp qua sự kết hợp độc đáo giữa phong cách long link, bamboo thanh mảnh và kỹ thuật khắc máy thế hệ mới trên nền vàng quý phái. Những đường xoắn lá bắt sáng rực rỡ phối cùng kết cấu dây tinh xảo giúp tôn vinh trọn vẹn vẻ đẹp của mặt dây chuyền đi kèm. Đây là lựa chọn hoàn mỹ mang lại tổng thể sang trọng, cuốn hút, giúp phái đẹp tỏa sáng rạng rỡ với phong thái thời thượng.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-day-chuyen.jpg'
    },
    'da-mau': {
        title: 'Trang Sức Đá Màu',
        desc: 'Vẻ đẹp rực rỡ của sắc vàng với thiết kế phẳng hiện đại được thổi hồn vào từng chi tiết, gợi cảm hứng từ thiên nhiên và biểu tượng tình yêu. Linh hoạt trong cách sử dụng, bạn có thể đeo như mặt dây chuyền riêng biệt hoặc phối cùng vòng charm, tạo nên điểm nhấn cá tính và phong cách độc đáo cho riêng mình.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-da-mau.jpg'
    },
    'bac': {
        title: 'Trang Sức Bạc',
        desc: 'Trang sức Bạc mới Xuân Thần Tài 2026 hội tụ nguồn năng lượng tích cực từ các biểu tượng may mắn: Hồ ly sắc sảo, Hoa đào rực rỡ, Cỏ bốn lá và Kim tiền thịnh vượng. Ứng dụng công nghệ CNC hiện đại, từng thiết kế hiện lên tinh xảo, trẻ trung và đầy dấu ấn riêng biệt. Đây là lựa chọn hoàn mỹ để thu hút tài lộc, hanh thông, mang lại vẻ đẹp thanh lịch và khởi đầu một năm mới ngập tràn phúc khí cho người sở hữu.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-bac.jpg'
    },
    'y': {
        title: 'Trang Sức Ý',
        desc: 'Mùa xuân mở ra khởi đầu mới đầy sinh khí. Trang sức Ý, với kỹ thuật chế tác cao cấp và những đường chạm khắc tinh xảo, trở thành điểm nhấn thanh lịch cho phong cách đầu năm. Các thiết kế hoa mai, trái tim, kim tiền không chỉ tôn vinh vẻ đẹp tinh tế mà còn gửi gắm lời chúc hạnh phúc – viên mãn – thịnh vượng cho năm mới.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-y.jpg'
    },
    'vo': {
        title: 'Trang Sức Vỏ',
        desc: 'Xuân thanh lịch và phá cách thiết kế mới dành cho dịp Xuân mang phong cách tối giản với bản đai mảnh thanh thoát, đính kết đá nhỏ dọc thân nhẫn tạo ánh sáng dịu dàng. Điểm nhấn là phần chân rế phá cách, cách điệu hiện đại từ họa tiết hoa lá, Thiên Nga và Ngựa như nâng niu viên kim cương chủ, khiến ánh sáng được phản chiếu trọn vẹn và nổi bật hơn. Chế tác tỉ mỉ với khung giá đa dạng, sản phẩm tôn vinh nét thanh lịch, đầy sức sống cho người sở hữu trong năm mới. Tuyên ngôn đẳng cấp các thiết kế mới cho phân khúc Premium thể hiện sự sang trọng qua size ổ lớn và kết cấu vững chắc, giúp tôn bật tối đa viên kim cương chủ. Từng chi tiết được hoàn thiện sắc sảo, mang lại tổng thể đẳng cấp và thời thượng. Với chế tác tỉ mỉ, đây là lựa chọn hoàn hảo cho những ai tìm kiếm sự nổi bật.',
        img: './assets/img/ItemTrungBaySP/dhnb-trang-suc-vo.jpg'
    }
};

function switchContent(key) {
    const data = tabData[key];
    if (!data) return;

    // 1. Cập nhật giao diện Nút (Active state)
    document.querySelectorAll('.btn-tab-item').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    // 2. Cập nhật Ảnh với hiệu ứng mờ dần (Fade)
    const imgElement = document.getElementById('dynamic-tab-img');
    imgElement.style.opacity = 0;
    setTimeout(() => {
        imgElement.src = data.img;
        imgElement.style.opacity = 1;
    }, 200);

    // 3. Cập nhật Chữ
    document.getElementById('dynamic-tab-title').innerText = data.title;
    document.getElementById('dynamic-tab-desc').innerText = data.desc;
}