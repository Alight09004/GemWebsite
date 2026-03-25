const gemProducts = [
    {
        id: 1,
        name: "Nhẫn bạc nữ đính kim cương Moissanite Aidan",
        price: 2181000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb2.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb2-2.jpg.webp",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["KimCuong", "NhanDon"],
        detail: "Nhẫn bạc nữ đính kim cương Moissanite Aidan mang vẻ đẹp thanh lịch, hiện đại. Sự lựa chọn hoàn hảo giúp phái đẹp tỏa sáng rạng rỡ với ánh sáng tinh khiết của kim cương. Thiết kế tinh xảo đến từng chi tiết giúp tôn lên vẻ đẹp kiêu sa và quý phái. Sản phẩm phù hợp để diện trong những dịp đặc biệt hoặc làm quà tặng ý nghĩa.",
        sold: 432,
        sizes: [10, 11, 12, 13, 14],
        specs: { weight: '3.0g', purity: 'VVS1', color: 'D', cut: 'Round Brilliant' },
        gallery: [ './assets/img/ItemTrangChu(1)/spnb2-2.jpg.webp' ]
    },
    {
        id: 2,
        name: "Dây chuyền bạc nữ đính đá CZ cá tiên",
        price: 1824000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb1.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb1-2.jpg.webp",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "DayChuyen"],
        detail: "Dây chuyền bạc nữ đính đá CZ cá tiên tinh tế, điểm xuyết viên đá lấp lánh mang lại sự duyên dáng. Một thiết kế tinh giản, rất phù hợp làm món quà tặng ý nghĩa. Sợi dây mảnh mai ôm sát cổ, tạo cảm giác nhẹ nhàng nhưng không kém phần thu hút. Đây chắc chắn là phụ kiện không thể thiếu trong bộ sưu tập của các quý cô.",
        sold: 915,
        sizes: ['35-40', '40-45', '45-50', '50-60'],
        specs: { weight: '1.875g', material: 'Bạc S925, đá CZ' },
        gallery: [ './assets/img/ItemTrangChu(1)/spnb1-2.jpg.webp' ]
    },
    {
        id: 3,
        name: "Bông tai Vàng trắng 41,6% (10K) đính đá",
        price: 13070000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gbxmxmw060874-bong-tai-vang-10k-dinh-da-ecz-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id3-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "BongTai"],
        detail: "Bông tai Vàng trắng 41,6% (10K) đính đá sở hữu thiết kế thời thượng, bắt sáng rực rỡ, tôn lên khuôn mặt thanh tú của phái đẹp. Sự đầu tư xứng đáng cho một thiết kế vàng đẳng cấp. Từng viên đá được đính kết tỉ mỉ, đảm bảo độ sáng bóng và bền bỉ theo thời gian. Mang đôi bông tai này, bạn sẽ luôn tự tin và nổi bật giữa đám đông.",
        sold: 124,
        specs: { weight: '1.5g', material: 'Vàng trắng 10K, đá ECZ' },
        gallery: [ './assets/img/ItemTrungBaySP/id3-hover.jpg' ]
    },
    {
        id: 4,
        name: "Lắc tay Vàng 58,5% (14K)",
        price: 15370000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gl0000y060888-lac-tay-vang-14k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id4-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang18K", "LacTay"],
        detail: "Lắc tay Vàng 58,5% (14K) điệu đà uốn lượn trên cổ tay ngọc ngà, khẳng định gu thẩm mỹ tinh tế. Một món trang sức cao cấp mang giá trị vượt thời gian. Những đường nét mềm mại nhưng chắc chắn mang đến vẻ đẹp hiện đại và cuốn hút. Phù hợp để kết hợp với nhiều phong cách thời trang khác nhau, từ công sở đến dạ hội.",
        sold: 86,
        sizes: ['S', 'M', 'L', 'XL'],
        gallery: [ './assets/img/ItemTrungBaySP/id4-hover.jpg' ],
        specs: { weight: '11.6g' }
    },
    {
        id: 5,
        name: "Lắc tay Vàng trắng Ý 75% (18K)",
        price: 15892000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gl0000w001534-lac-tay-vang-trang-y-18k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id5-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "LacTay", "Vang18K"],
        detail: "Trang sức Ý nổi tiếng với độ tinh xảo. Lắc tay Vàng trắng Ý 75% (18K) mang đến diện mạo sang trọng, kiêu sa cho những quý cô hiện đại trong bất kỳ buổi tiệc nào. Ánh kim rực rỡ của vàng trắng 18K giúp cổ tay bạn thêm phần thon gọn và quyến rũ. Đây là biểu tượng của sự thành đạt và gu thời trang đẳng cấp.",
        sold: 72,
        sizes: ['S', 'M', 'L', 'XL'],
        gallery: [ './assets/img/ItemTrungBaySP/id5-hover.jpg' ],
        specs: { weight: '10.5g' }
    },
    {
        id: 6,
        name: "Bông tai Kim cương Vàng trắng 58,5% (14K)",
        price: 46200000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gbdd00w060198-bong-tai-kim-cuong-vang-trang-14k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id6-hover.jpg",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["KimCuong", "BongTai"],
        detail: "Tuyệt tác Bông tai Kim cương Vàng trắng 58,5% (14K) lộng lẫy. Kim cương lấp lánh kết hợp vàng trắng mang đến sự quyền quý và đẳng cấp tuyệt đối cho người sở hữu. Sự kết hợp hoàn hảo giữa chất liệu cao cấp và kỹ thuật chế tác điêu luyện tạo nên một kiệt tác thực sự. Sở hữu đôi bông tai này là cách tốt nhất để khẳng định giá trị bản thân.",
        sold: 23,
        gallery: [ './assets/img/ItemTrungBaySP/id6-hover.jpg' ],
        specs: { weight: '2.5g', purity: 'VVS1', color: 'D', cut: 'Excellent' }
    },
    {
        id: 7,
        name: "Nhẫn Kim cương Vàng trắng 58,5% (14K)",
        price: 34620000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gndd00w060464-nhan-kim-cuong-vang-trang-14k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id7-hover.jpg",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["KimCuong", "NhanDon"],
        detail: "Mẫu Nhẫn Kim cương Vàng trắng 58,5% (14K) với viên chủ nổi bật. Chế tác tinh xảo khiến sản phẩm trở thành biểu tượng của tình yêu và sự vĩnh cửu hoàn mỹ. Ánh sáng chói lóa từ viên kim cương sẽ thu hút mọi ánh nhìn ngay từ lần đầu tiên. Thiết kế vòng nhẫn ôm sát ngón tay mang lại cảm giác thoải mái khi đeo hàng ngày.",
        sold: 45,
        sizes: [10, 11, 12, 13, 14],
        gallery: [ './assets/img/ItemTrungBaySP/id7-hover.jpg' ],
        specs: { weight: '5.6g', purity: 'VVS2', color: 'F', cut: 'Excellent' }
    },
    {
        id: 8,
        name: "Mặt dây chuyền Vàng trắng 58,5% (14K) đính đá Sapphire",
        price: 8740000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gmsp00w000028-mat-day-chuyen-vang-14k-dinh-da-sapphire-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id8-hover.jpg",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["Sapphire", "DayChuyen"],
        detail: "Mặt dây chuyền Vàng trắng đính đá Sapphire mang sắc xanh đại dương sâu thẳm. Món trang sức mang đến sự bình an, nét cuốn hút huyền bí và phong thái tự tin. Viên Sapphire được cắt gọt hoàn hảo, phản chiếu ánh sáng rực rỡ dưới mọi góc độ. Điểm xuyết thêm sự sang trọng cho trang phục của bạn một cách đầy tinh tế.",
        sold: 185,
        sizes: ['35-40', '40-45', '45-50', '50-60'],
        specs: { weight: '1.5g', stone: 'Sapphire', material: 'Vàng trắng 14K' },
        gallery: [ './assets/img/ItemTrungBaySP/id8-hover.jpg' ]
    },
    {
        id: 9,
        name: "Mặt dây chuyền Vàng 75% (18K) đính Ngọc trai Southsea",
        price: 24610000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gmpsddc060001-mat-day-chuyen-vang-dinh-ngoc-trai-southsea-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id9-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang18K", "DayChuyen"],
        detail: "Ngọc trai Southsea quý hiếm kết hợp cùng vàng 18K tạo nên cực phẩm nữ trang đầy kiêu sa. Sự lựa chọn tuyệt vời để phái đẹp diện trong những dịp trang trọng nhất. Ánh xà cừ óng ả của ngọc trai mang đến vẻ đẹp đài các, quý phái cho người đeo. Một sự đầu tư xứng đáng cho vẻ đẹp thanh lịch và trường tồn với thời gian.",
        sold: 38,
        sizes: ['35-40', '40-45', '45-50', '50-60'],
        specs: { weight: '2.25g', stone: 'Ngọc trai Southsea', material: 'Vàng 18K' },
        gallery: [ './assets/img/ItemTrungBaySP/id9-hover.jpg' ]
    },
    {
        id: 10,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá",
        price: 10551000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gnxmxmw005643-nhan-vang-14k-dinh-da-ecz-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id10-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "NhanDon"],
        detail: "Nhẫn Vàng trắng 14K đính đá tinh xảo dọc đai nhẫn, tôn vinh nét thanh lịch. Điểm nhấn lấp lánh mang đến diện mạo sang trọng, rạng ngời cho bạn mỗi ngày. Thiết kế thanh mảnh nhưng không kém phần nổi bật, dễ dàng kết hợp cùng các món trang sức khác. Phụ kiện hoàn hảo để tôn vinh nét đẹp nữ tính và duyên dáng của bạn.",
        sold: 211,
        sizes: [10, 11, 12, 13, 14],
        specs: { weight: '3.375g', material: 'Vàng trắng 14K, đá ECZ' },
        gallery: [ './assets/img/ItemTrungBaySP/id10-hover.jpg' ]
    },
    {
        id: 11,
        name: "Vòng tay bạc nữ đá Chalcedony Chrysoprase cỏ 4 lá",
        price: 7615000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb3.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb3-2.jpg.webp",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "LacTay"],
        detail: "Thiết kế cỏ 4 lá may mắn kết hợp đá Chalcedony Chrysoprase xanh mướt. Chiếc vòng tay tựa như bùa hộ mệnh ngọt ngào, điểm tô thêm nét duyên dáng cho chủ nhân. Màu xanh tươi mát của đá mang lại cảm giác thư thái và bình yên trong tâm hồn. Không chỉ là trang sức, đây còn là vật phẩm mang ý nghĩa phong thủy tốt lành.",
        sold: 310,
        sizes: ['S', 'M', 'L', 'XL'],
        specs: { weight: '4.5g', stone: 'Chalcedony Chrysoprase', material: 'Bạc S925' },
        gallery: [ './assets/img/ItemTrangChu(1)/spnb3-2.jpg.webp' ]
    },
    {
        id: 12,
        name: "Bông tai bạc Ý S925 nữ mạ bạch kim đính đá CZ hình trái tim",
        price: 1619000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb4.jpeg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb4-2.jpg.webp",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "BongTai"],
        detail: "Hình trái tim lãng mạn cùng chất liệu bạc Ý S925 mạ bạch kim cao cấp. Món trang sức nhỏ xinh này luôn nằm trong danh sách những item được phái đẹp yêu thích nhất. Thiết kế trẻ trung, hiện đại phù hợp với những cô nàng yêu thích sự năng động và đáng yêu. Lớp mạ bạch kim giúp bảo vệ sản phẩm luôn sáng bóng và bền màu.",
        sold: 1045,
        specs: { weight: '1.5g', material: 'Bạc Ý S925 mạ bạch kim, đá CZ' },
        gallery: [ './assets/img/ItemTrangChu(1)/spnb4-2.jpg.webp' ]
    },
    {
        id: 13,
        name: "Lắc tay bạc nữ đính pha lê Swarovski trái tim của biển",
        price: 1967000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb5.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb5-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "LacTay"],
        detail: "Sở hữu viên pha lê Swarovski lấp lánh tựa đại dương thu nhỏ. Lắc tay nữ thiết kế tinh tế là điểm nhấn hoàn hảo, nữ tính cho những cô nàng mộng mơ. Viên pha lê đa sắc chuyển màu theo từng góc nhìn tạo nên vẻ đẹp vô cùng huyền ảo. Một thiết kế ấn tượng giúp bạn tỏa sáng rực rỡ trong những buổi tiệc đêm.",
        sold: 890,
        sizes: ['S', 'M', 'L', 'XL'],
        specs: { weight: '2.625g', stone: 'Pha lê Swarovski', material: 'Bạc S925' },
        gallery: [ './assets/img/ItemTrangChu(1)/spnb5-2.jpg' ]
    },
    {
        id: 14,
        name: "Nhẫn nam Vàng trắng 41,6% (10K) đính đá ECZ MANCODE",
        price: 20754000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb6.png",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb6-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "NhanDon"],
        detail: "Mô phỏng nét tin yêu cùng vẻ đẹp tinh tế, thanh tú của nàng, PNJ mang đến hơi thở mới mẻ từ những chi tiết giản đơn cho thiết kế trang sức mới của mình. Chiếc mặt dây chuyền vàng được chế tác từ sắc vàng Ý 18K trên thiết kế đậm chất phóng khoáng và hiện đại. Sản phẩm chính là sự hội tụ của phong cách thiết kế hiện đại kết hợp đỉnh cao của trình độ chế tác và sẽ trở thành xu hướng trang sức Ý mới, mang đến cho phái đẹp thêm nhiều sự lựa chọn cho bộ sưu tập của mình. Sự mạnh mẽ, nam tính được khắc họa rõ nét qua từng góc cạnh tinh xảo của chiếc nhẫn. Đây là phụ kiện không thể thiếu giúp phái mạnh khẳng định bản lĩnh và phong độ.",
        sold: 65,
        sizes: [16, 17, 18, 19, 20],
        specs: { weight: '5.625g', material: 'Vàng trắng 10K, đá ECZ' },
        gallery: [ './assets/img/ItemTrangChu(1)/spnb6-2.jpg' ]
    },
    {
        id: 15,
        name: "Nhẫn Vàng 75% (18K) PNJ",
        price: 4656000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb7.png",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb7-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang18K", "NhanDon"],
        detail: "Thiết kế nhẫn Vàng 18K cổ điển, tinh giản nhưng đầy sắc sảo từ PNJ. Một sự lựa chọn thông minh, bền bỉ và dễ dàng kết hợp cùng nhiều phong cách thời trang. Màu vàng óng ả đặc trưng mang đến vẻ đẹp ấm áp, truyền thống nhưng không hề lỗi mốt. Sản phẩm là minh chứng cho kỹ thuật kim hoàn đỉnh cao, trường tồn cùng năm tháng.",
        sold: 412,
        sizes: [10, 11, 12, 13, 14],
        gallery: [ './assets/img/ItemTrangChu(1)/spnb7-2.jpg' ],
        specs: { weight: '4.5g' }
    },
    {
        id: 16,
        name: "Lắc tay Bạc PNJSilver",
        price: 1255000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb8.png",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb8-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "LacTay"],
        detail: "Sự nhẹ nhàng, thanh thoát của Lắc tay Bạc PNJSilver cực hợp với những trang phục dạo phố năng động. Điểm nhấn cuốn hút giúp đôi tay thêm phần ngọc ngà. Từng mắt xích được thiết kế uyển chuyển, tạo sự thoải mái tối đa khi cử động. Món phụ kiện nhỏ xinh này sẽ làm tăng thêm phần tự tin và duyên dáng cho phái đẹp.",
        sold: 1105,
        sizes: ['S', 'M', 'L', 'XL'],
        specs: { weight: '3.0g', material: 'Bạc S925' },
        gallery: [ './assets/img/ItemTrangChu(1)/spnb8-2.jpg' ]
    },
    {
        id: 17,
        name: "Vòng tay Vàng hồng 58,5% (14K) Đính đá Sapphire",
        price: 43785000,
        imgMain: "./assets/img/ItemTrungBaySP/id17.png",
        imgHover: "./assets/img/ItemTrungBaySP/id17-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Sapphire", "VangHong", "LacTay"],
        detail: "Sự hòa quyện tuyệt vời giữa Vàng hồng ấm áp và đá Sapphire quý giá. Vòng tay cao cấp được thiết kế riêng cho những quý cô yêu kiều, hướng đến vẻ đẹp sang trọng đỉnh cao. Ánh sáng hồng ngọc dịu nhẹ kết hợp với sắc xanh quyến rũ tạo nên một tổng thể vô cùng hài hòa. Chiếc vòng tay này sẽ là điểm nhấn đắt giá, thu hút sự chú ý trong mọi sự kiện.",
        sold: 18,
        sizes: ['S', 'M', 'L', 'XL'],
        specs: { weight: '4.125g', stone: 'Sapphire', material: 'Vàng hồng 14K' },
        gallery: [ './assets/img/ItemTrungBaySP/id17-hover.jpg' ]
    },
    {
        id: 18,
        name: "Nhẫn Vàng trắng 58,5% (14K) Đính đá Sapphire ",
        price: 40623000,
        imgMain: "./assets/img/ItemTrungBaySP/id18.png",
        imgHover: "./assets/img/ItemTrungBaySP/id18-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Sapphire", "VangTrang", "NhanDon"],
        detail: "Viên Sapphire chủ rực rỡ ngự trị trên ổ nhẫn Vàng trắng 14K đính kết tỉ mỉ. Tác phẩm nghệ thuật đỉnh cao này chính là tuyên ngôn tôn vinh quyền lực và sự quyến rũ của nữ giới. Vẻ đẹp sắc sảo và rạng ngời của viên đá chủ được tôn lên tối đa nhờ kỹ thuật cắt giác tinh xảo. Một sự lựa chọn hoàn hảo để đánh dấu những khoảnh khắc đáng nhớ trong cuộc đời.",
        sold: 21,
        sizes: [10, 11, 12, 13, 14],
        specs: { weight: '4.875g', stone: 'Sapphire', purity: 'VVS', color: 'Blue' },
        gallery: [ './assets/img/ItemTrungBaySP/id18-hover.jpg' ]
    },
    {
        id: 19,
        name: "Lắc tay bạc nữ đính đá Ruby hoa mặt trời Mia",
        price: 4033000,
        imgMain: "./assets/img/ItemTrungBaySP/id19.jpg",
        imgHover: "./assets/img/ItemTrungBaySP/id19-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Ruby", "Bac", "LacTay"],
        detail: "Họa tiết hoa mặt trời đính đá Ruby đỏ thẫm mang năng lượng tích cực rực rỡ. Thiết kế trang nhã thể hiện trọn vẹn sự tươi trẻ, rạng rỡ của phái đẹp trong mọi khoảnh khắc. Sắc đỏ quyến rũ của Ruby không chỉ tôn da mà còn mang lại may mắn và nhiệt huyết. Điệu đà nhưng không kém phần thanh lịch, chiếc lắc tay là món quà tuyệt vời dành tặng bản thân.",
        sold: 388,
        sizes: ['S', 'M', 'L', 'XL'],
        specs: { weight: '3.375g', stone: 'Ruby', material: 'Bạc S925' },
        gallery: [ './assets/img/ItemTrungBaySP/id19-hover.jpg' ]
    },
    {
        id: 20,
        name: "Bông tai Vàng 75% (18K) đính đá Ruby ",
        price: 11884000,
        imgMain: "./assets/img/ItemTrungBaySP/id20.png",
        imgHover: "./assets/img/ItemTrungBaySP/id20-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Ruby", "Vang18K", "BongTai"],
        detail: "Bông tai đính đá Ruby nổi bật trên nền vàng 18K cổ điển. Chế tác tinh xảo giúp món trang sức mang đến ánh nhìn thu hút, tôn lên nét kiêu sa mọi lúc mọi nơi. Thiết kế dáng nụ ôm sát vành tai mang lại vẻ đẹp cổ điển nhưng vẫn rất hiện đại. Đôi bông tai này chắc chắn sẽ làm bừng sáng khuôn mặt và tôn vinh thần thái rạng rỡ của bạn.",
        sold: 146,
        specs: { weight: '1.875g', stone: 'Ruby', material: 'Vàng 18K' },
        gallery: [ './assets/img/ItemTrungBaySP/id20-hover.jpg' ]
    },
    {
        id: 21,
        name: "Nhẫn Vàng 75% (18K) Đính đá Emerald",
        price: 90410000,
        imgMain: "./assets/img/ItemTrungBaySP/id21.png",
        imgHover: "./assets/img/ItemTrungBaySP/id21-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Emerald", "Vang18K", "NhanDon"],
        detail: "Sắc xanh ngọc lục bảo Emerald xa xỉ kết hợp vàng 18K tạo nên đẳng cấp vương giả. Chiếc nhẫn cực phẩm này là tuyên ngôn mạnh mẽ khẳng định vị thế đỉnh cao của người đeo. Màu xanh huyền bí và quyền lực của ngọc lục bảo tỏa sáng lấp lánh dưới mọi điều kiện ánh sáng. Sự tỉ mỉ trong từng đường nét chế tác càng làm tăng thêm giá trị nghệ thuật của tuyệt tác này.",
        sold: 8,
        sizes: [10, 11, 12, 13, 14],
        specs: { weight: '6.75g', stone: 'Emerald', purity: 'SI', color: 'Green' },
        gallery: [ './assets/img/ItemTrungBaySP/id21-hover.jpg' ]
    },
    {
        id: 22,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá Emerald",
        price: 149916000,
        imgMain: "./assets/img/ItemTrungBaySP/id22.png",
        imgHover: "./assets/img/ItemTrungBaySP/id22-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Emerald", "VangTrang", "NhanDon"],
        detail: "Thiết kế siêu phẩm xứng tầm với viên đá Emerald kích thước lớn rực rỡ, bao quanh là dải kim cương thiên nhiên lấp lánh trên nền vàng trắng 14K thượng hạng. Sự hòa quyện giữa sắc xanh kiêu hãnh và ánh trắng tinh khôi mang lại hiệu ứng thị giác bùng nổ. Đeo chiếc nhẫn này, bạn sẽ cảm nhận được sự tự tin và sức hút mãnh liệt.",
        sold: 3,
        sizes: [10, 11, 12, 13, 14],
        specs: { weight: '7.875g', stone: 'Emerald', purity: 'VS', color: 'Green' },
        gallery: [ './assets/img/ItemTrungBaySP/id22-hover.jpg' ]
    },
    {
        id: 23,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá Emerald Disney",
        price: 276699000,
        imgMain: "./assets/img/ItemTrungBaySP/id23.png",
        imgHover: "./assets/img/ItemTrungBaySP/id23-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Emerald", "VangTrang", "NhanDon"],
        detail: "Tuyệt tác phiên bản giới hạn Disney đính đá Emerald cỡ đại. Mang vẻ đẹp lộng lẫy hiếm có, chiếc nhẫn này như một báu vật rực rỡ bước ra từ câu chuyện cổ tích kỳ diệu. Những đường nét cách điệu tinh xảo gợi nhớ đến vẻ đẹp của các nàng công chúa trong cổ tích. Sở hữu thiết kế này là cách bạn thể hiện cá tính mộng mơ nhưng vô cùng sang trọng.",
        sold: 2,
        sizes: [10, 11, 12, 13, 14],
        specs: { weight: '9.375g', stone: 'Emerald', purity: 'VVS', color: 'Vivid Green' },
        gallery: [ './assets/img/ItemTrungBaySP/id23-hover.jpg' ]
    },
    {
        id: 24,
        name: "Bông tai Vàng trắng 58,5% (14K) Đính đá Topaz",
        price: 7992000,
        imgMain: "./assets/img/ItemTrungBaySP/id24.png",
        imgHover: "./assets/img/ItemTrungBaySP/id24-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Topaz", "VangTrang", "BongTai"],
        detail: "Đá Topaz xanh trong trẻo kết hợp với Vàng trắng 14K thanh tao. Đôi bông tai đem lại cảm giác bình yên, tươi mát cùng phong cách quý phái cho những ngày rạng rỡ. Sự lấp lánh của đá Topaz như những giọt sương mai đọng trên vành tai, tạo vẻ đẹp vô cùng thuần khiết. Thiết kế này đặc biệt phù hợp với những bộ trang phục màu pastel thanh lịch.",
        sold: 284,
        specs: { weight: '2.25g', stone: 'Topaz', material: 'Vàng trắng 14K' },
        gallery: [ './assets/img/ItemTrungBaySP/id24-hover.jpg' ]
    },
    {
        id: 25,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá Topaz ",
        price: 11489000,
        imgMain: "./assets/img/ItemTrungBaySP/id25.png",
        imgHover: "./assets/img/ItemTrungBaySP/id25-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Topaz", "VangTrang", "NhanDon"],
        detail: "Viên Topaz cắt giác hoàn hảo nằm gọn trong ổ nhẫn Vàng trắng tinh xảo. Một tuyệt tác lấp lánh, là sự lựa chọn tuyệt vời cho các quý cô lộng lẫy trong những buổi tiệc dạ hội. Cấu trúc ổ nhẫn chắc chắn giúp tôn bật kích thước và độ rực rỡ của viên đá chủ. Đây là một món trang sức mang ý nghĩa đem lại sự bình an và sức mạnh nội tại.",
        sold: 156,
        sizes: [10, 11, 12, 13, 14],
        specs: { weight: '3.75g', stone: 'Topaz', material: 'Vàng trắng 14K' },
        gallery: [ './assets/img/ItemTrungBaySP/id25-hover.jpg' ]
    },
    {
        id: 26,
        name: "Cài áo Vàng trắng 58,5% (14K) Đính đá Topaz Masterpiece",
        price: 70480000,
        imgMain: "./assets/img/ItemTrungBaySP/id26.png",
        imgHover: "./assets/img/ItemTrungBaySP/id26-hover.jpg",
        category: ["DaQuy", "VangBac"],
        subCategory: ["Topaz", "VangTrang"],
        detail: "Phụ kiện Cài áo Masterpiece đỉnh cao đính đá Topaz và viền đá quý rực rỡ. Kiệt tác nghệ thuật thủ công tinh xảo giúp tạo điểm nhấn quyền lực cho bộ âu phục sang trọng. Thiết kế độc bản này thể hiện gu thẩm mỹ tinh tế và đẳng cấp vượt trội của người sử dụng. Bất kể xuất hiện ở đâu, bạn cũng sẽ trở thành tâm điểm của sự ngưỡng mộ.",
        sold: 11,
        specs: { weight: '11.25g', stone: 'Topaz', material: 'Vàng trắng 14K' },
        gallery: [ './assets/img/ItemTrungBaySP/id26-hover.jpg' ]
    },
    {
        id: 27,
        name: "Nhẫn Vàng trắng 58,5% (14K) Đính đá Topaz",
        price: 7865000,
        imgMain: "./assets/img/ItemTrungBaySP/id27.png",
        imgHover: "./assets/img/ItemTrungBaySP/id27-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Topaz", "VangTrang", "NhanDon"],
        detail: "Thiết kế nhẫn Topaz thanh lịch, mỏng nhẹ phù hợp đeo hàng ngày. Từng chi tiết nhỏ toát lên vẻ đẹp tinh tế, đáp ứng tiêu chí sang trọng nhưng vẫn vô cùng trẻ trung. Màu xanh êm dịu của đá Topaz giúp xua tan căng thẳng, mang lại năng lượng tích cực cho người đeo. Vòng nhẫn thanh thoát, tạo sự thoải mái tối đa cho cử động của ngón tay.",
        sold: 312,
        sizes: [10, 11, 12, 13, 14],
        specs: { weight: '3.0g', stone: 'Topaz', material: 'Vàng trắng 14K' },
        gallery: [ './assets/img/ItemTrungBaySP/id27-hover.jpg' ]
    },
    {
        id: 28,
        name: "Cặp nhẫn cưới Bạch kim đính Kim Cương PNJ True Love",
        price: 40185574,
        imgMain: "./assets/img/ItemTrungBaySP/id28.png",
        imgHover: "./assets/img/ItemTrungBaySP/id28-hover.jpg",
        category: "TrangSuc",
        subCategory: "NhanCuoi",
        detail: "Bạch kim nguyên chất kết hợp kim cương thiên nhiên là minh chứng cho tình yêu vĩnh cửu. Cặp nhẫn cao cấp PNJ True Love sẽ lưu giữ lại khoảnh khắc thiêng liêng nhất của đôi lứa. Độ sáng bóng vượt thời gian của bạch kim tượng trưng cho sự gắn kết không bao giờ phai nhạt. Một sự lựa chọn hoàn hảo để bắt đầu hành trình hôn nhân viên mãn và hạnh phúc.",
        sold: 84,
        sizes: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        specs: { material: 'Bạch kim (Platinum)', stone: 'Kim cương', purity: 'VVS1' },
        gallery: [ './assets/img/ItemTrungBaySP/id28-hover.jpg' ]
    },
    {
        id: 29,
        name: "Tượng Thiên Mã Đăng Hoa Vàng 99,9% (24K)",
        price: 199000000,
        imgMain: "./assets/img/ItemTrungBaySP/id29.png",
        imgHover: "./assets/img/ItemTrungBaySP/id29-hover.jpg",
        category: "VangBac",
        subCategory: "Vang",
        detail: "Tượng vàng 24K đúc đặc tinh xảo mang ý nghĩa phong thủy mã đáo thành công. Kiệt tác phong thủy quyền uy dành riêng cho không gian làm việc của giới tinh hoa. Đường nét oai phong của Thiên Mã được chạm trổ sống động, tỏa ra khí chất mạnh mẽ và uy dũng. Vật phẩm này không chỉ thu hút tài lộc mà còn củng cố vị thế cho chủ nhân.",
        sold: 5,
        specs: { material: 'Vàng 24K', weight: '99.75g' },
        gallery: [ './assets/img/ItemTrungBaySP/id29-hover.jpg' ]
    },
    {
        id: 30,
        name: "Vàng mini Thỏi Vàng 0.5 chỉ 99,99% PNJ Tiểu Lộc Đại Phát",
        price: null,
        imgMain: "./assets/img/ItemTrungBaySP/id30.png",
        imgHover: "./assets/img/ItemTrungBaySP/id30-hover.jpg",
        category: "VangBac",
        subCategory: "Vang",
        detail: "Thỏi vàng mini 0.5 chỉ 99,99% thiết kế sắc nét mang thông điệp Tiểu Lộc Đại Phát. Của để dành giàu giá trị tích lũy và là món quà mừng tuổi đầy ý nghĩa may mắn. Thiết kế nhỏ gọn, tinh tế dễ dàng cất giữ hoặc mang theo bên mình như một lá bùa may mắn. Một khởi đầu tuyệt vời cho thói quen tiết kiệm và đầu tư dài hạn.",
        sold: 450,
        specs: { material: 'Vàng 99.99%', weight: '1.875g' },
        gallery: [ './assets/img/ItemTrungBaySP/id30-hover.jpg' ]
    },
    {
        id: 31,
        name: "Bộ Tượng Long Phụng Giao Hòa Vàng 99,9% (24K) ~ 9.9 chỉ",
        price: 239000000,
        imgMain: "./assets/img/ItemTrungBaySP/id31.png",
        imgHover: "./assets/img/ItemTrungBaySP/id31-hover.jpg",
        category: "VangBac",
        subCategory: "Vang",
        detail: "Bộ tượng Long Phụng chế tác từ ~9.9 chỉ Vàng 24K nguyên chất, biểu trưng cho sự hòa hợp, hạnh phúc viên mãn. Tuyệt tác nghệ thuật đỉnh cao, là sính lễ và món quà cưới giá trị khủng. Hình ảnh Long Phụng đan xen được khắc họa chân thực, tượng trưng cho sự cân bằng âm dương hoàn hảo. Đây là bảo vật truyền gia mang ý nghĩa sâu sắc, cầu chúc sự sinh sôi và thịnh vượng.",
        sold: 2,
        specs: { material: 'Vàng 24K', weight: '~37.125g' },
        gallery: [ './assets/img/ItemTrungBaySP/id31-hover.jpg' ]
    },
    {
        id: 32,
        name: "Bông tai cưới Vàng 99,9% (24K) Trầu Cau",
        price: 35276000,
        imgMain: "./assets/img/ItemTrungBaySP/id32.png",
        imgHover: "./assets/img/ItemTrungBaySP/id32-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang", "BongTai"],
        detail: "Mang đậm bản sắc văn hóa Việt Nam với họa tiết Trầu Cau đúc từ Vàng 24K. Đôi bông tai lộng lẫy là món sính lễ hoàn mỹ, thay cho ngàn lời chúc phúc trong ngày vu quy. Thiết kế tinh xảo đến từng chi tiết nhỏ, tái hiện vẻ đẹp truyền thống nhưng vẫn rất hiện đại. Đôi bông tai sẽ là điểm nhấn rực rỡ, giúp cô dâu thêm phần đằm thắm và kiêu sa.",
        sold: 47,
        specs: { material: 'Vàng 24K', weight: '7.5g' },
        gallery: [ './assets/img/ItemTrungBaySP/id32-hover.jpg' ]
    },
    {
        id: 33,
        name: "Nhẫn cưới Vàng 99,9% (24K)",
        price: 17439000,
        imgMain: "./assets/img/ItemTrungBaySP/ìd33.png",
        imgHover: "./assets/img/ItemTrungBaySP/id33-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang", "NhanCuoi"],
        detail: "Nhẫn cưới Vàng 24K thiết kế trơn truyền thống nhưng không kém phần sắc sảo. Tín vật tình yêu bền chặt, mang giá trị trường tồn cùng thời gian cho hạnh phúc lứa đôi. Chất liệu vàng 24K nguyên chất đảm bảo độ sáng bóng và giá trị vĩnh cửu theo năm tháng. Vẻ đẹp tối giản của thiết kế đại diện cho một tình yêu chân thành, không khoa trương nhưng vô cùng bền vững.",
        sold: 135,
        sizes: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        specs: { material: 'Vàng 24K', weight: '3.75g / chiếc' },
        gallery: [ './assets/img/ItemTrungBaySP/id33-hover.jpg' ]
    },
    {
        id: 34,
        name: "Nhẫn Vàng hồng 58,5% (14K) đính đá Sapphire Disney Sleeping Beauty",
        price: 23852000,
        imgMain: "./assets/img/ItemTrungBaySP/id34.png",
        imgHover: "./assets/img/ItemTrungBaySP/id34-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangHong", "NhanDon"],
        detail: "Lấy cảm hứng từ công chúa ngủ trong rừng, nhẫn Vàng hồng đính Sapphire toát lên vẻ lãng mạn. Từng đường nét được chăm chút tỉ mỉ, đánh thức vẻ đẹp kiêu kì, duyên dáng. Thiết kế mang đậm màu sắc cổ tích, khơi gợi những giấc mơ ngọt ngào của phái đẹp. Đeo chiếc nhẫn này, bạn sẽ cảm thấy mình như một nàng công chúa thực thụ trong câu chuyện của chính mình.",
        sold: 62,
        sizes: [10, 11, 12, 13, 14],
        specs: { weight: '4.125g', stone: 'Sapphire', material: 'Vàng hồng 14K' },
        gallery: [ './assets/img/ItemTrungBaySP/id34-hover.jpg' ]
    },
    {
        id: 35,
        name: "Cặp nhẫn cưới Kim cương Vàng hồng 75% (18K) Tình Hồng",
        price: 34816000,
        imgMain: "./assets/img/ItemTrungBaySP/id35.png",
        imgHover: "./assets/img/ItemTrungBaySP/id35-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangHong", "NhanCuoi"],
        detail: "Vàng hồng 18K ấm áp nâng đỡ viên kim cương thuần khiết lấp lánh. Cặp nhẫn cưới Tình Hồng mang thiết kế đương đại sẽ viết tiếp câu chuyện tình yêu lãng mạn của lứa đôi. Tông màu vàng hồng tôn lên vẻ đẹp rạng rỡ của làn da, mang lại cảm giác ấm áp và gần gũi. Thiết kế đồng điệu nhưng vẫn giữ được nét cá tính riêng biệt cho cả nam và nữ.",
        sold: 76,
        sizes: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        specs: { material: 'Vàng hồng 18K', stone: 'Kim cương', purity: 'VS2' },
        gallery: [ './assets/img/ItemTrungBaySP/id35-hover.jpg' ]
    },
    {
        id: 36,
        name: "Vòng tay charm Vàng 24K Tỳ Hưu Thiên Lộc dây màu đỏ",
        price: 800000,
        imgMain: "./assets/img/ItemTrungBaySP/id36.png",
        imgHover: "./assets/img/ItemTrungBaySP/id36-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["Vang", "VongTayTyHuu"],
        detail: "Charm Tỳ Hưu Vàng 24K tết dây đỏ mang đậm phong thủy chiêu tài lộc, giữ bình an. Vòng tay may mắn nhỏ gọn, mang nguồn năng lượng tích cực luôn kề bên người đeo. Dây bện chắc chắn kết hợp cùng điểm nhấn vàng rực rỡ tạo nên phong cách trẻ trung, năng động. Một món quà tuyệt vời dành tặng bản thân hoặc những người thân yêu để cầu bình an.",
        sold: 1342,
        sizes: ['S', 'M', 'L', 'XL'],
        specs: { material: 'Vàng 24K, Dây dù', weight: '0.375g' },
        gallery: [ './assets/img/ItemTrungBaySP/id36-hover.jpg' ]
    },
    {
        id: 37,
        name: "Lắc tay bạc nam dây bện dù sáp tỳ hưu may mắn Henry",
        price: 2896000,
        imgMain: "./assets/img/ItemTrungBaySP/id37.png",
        imgHover: "./assets/img/ItemTrungBaySP/id37-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["Bac", "VongTayTyHuu"],
        detail: "Thiết kế nam tính, dây dù sáp chắc chắn kết hợp Tỳ Hưu Bạc chạm khắc uy dũng. Chiếc lắc tay mạnh mẽ sẽ là vật phẩm đồng hành cùng phái mạnh gặt hái nhiều thành công. Vẻ đẹp phóng khoáng, bụi bặm nhưng không kém phần cuốn hút, phù hợp với phong cách đường phố. Vật phẩm phong thủy này hứa hẹn sẽ mang lại sự hanh thông trong công việc và cuộc sống.",
        sold: 215,
        sizes: ['S', 'M', 'L', 'XL'],
        specs: { material: 'Bạc S925, Dây dù sáp' },
        gallery: [ './assets/img/ItemTrungBaySP/id37-hover.jpg' ]
    },
    {
        id: 38,
        name: "Lắc tay bạc đính đá Trịnh Collection",
        price: 1575000,
        imgMain: "./assets/img/ItemTrungBaySP/id38.png",
        imgHover: "./assets/img/ItemTrungBaySP/id38-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["Bac", "VongTayTyHuu"],
        detail: "Sự thanh lịch xen lẫn yếu tố phong thủy trong thiết kế Trịnh Collection. Lắc tay bạc đính đá tinh xảo mang nét đẹp tinh tế, luôn nằm trong top trang sức may mắn được ưa chuộng. Các viên đá được sắp xếp khéo léo, tạo nên một dải ánh sáng lấp lánh ôm trọn cổ tay. Đây là sự kết hợp hoàn hảo giữa thẩm mỹ hiện đại và giá trị tâm linh sâu sắc.",
        sold: 780,
        sizes: ['S', 'M', 'L', 'XL'],
        specs: { material: 'Bạc S925, Đá CZ' },
        gallery: [ './assets/img/ItemTrungBaySP/id38-hover.jpg' ]
    },
    {
        id: 39,
        name: "Mặt dây chuyền Vàng 75% (18K) đính đá CZ",
        price: 11764000,
        imgMain: "./assets/img/ItemTrungBaySP/id39.png",
        imgHover: "./assets/img/ItemTrungBaySP/id39-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["Vang18K", "MatDayPhat"],
        detail: "Mặt Phật chế tác từ Vàng 18K đính viền đá CZ sáng lấp lánh mang ý nghĩa hộ mệnh sâu sắc. Từng chi tiết chạm khắc đều đạt đến độ tinh xảo tuyệt đối, tỏa ra hào quang bình an. Vẻ đẹp uy nghiêm, từ bi của mặt Phật giúp người đeo luôn cảm thấy thanh thản và được che chở. Thiết kế sang trọng này rất phù hợp để diện trong những dịp lễ chùa hoặc sự kiện quan trọng.",
        sold: 142,
        specs: { weight: '2.625g', material: 'Vàng 18K, Đá CZ' },
        gallery: [ './assets/img/ItemTrungBaySP/id39-hover.jpg' ]
    },
    {
        id: 40,
        name: "Mặt dây chuyền Vàng trắng Ý 75% (18K) đính đá CZ hình Phật",
        price: 11892000,
        imgMain: "./assets/img/ItemTrungBaySP/id40.png",
        imgHover: "./assets/img/ItemTrungBaySP/id40-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["VangTrang","Vang18K", "MatDayPhat"],
        detail: "Thiết kế hình Phật đúc từ Vàng trắng Ý cao cấp mang lại sự tịnh tâm và sang trọng. Vật phẩm phong thủy hoàn hảo giúp chủ nhân luôn thu hút được những phước lành. Chất liệu Vàng trắng Ý mang đến vẻ đẹp hiện đại, thanh tao và không kém phần nổi bật. Một sự lựa chọn tinh tế để cầu bình an và may mắn cho mọi thành viên trong gia đình.",
        sold: 105,
        specs: { weight: '3.0g', material: 'Vàng trắng Ý 18K, Đá CZ' },
        gallery: [ './assets/img/ItemTrungBaySP/id40-hover.jpg' ]
    },
    {
        id: 41,
        name: "Mặt dây chuyền Vàng trắng Ý 75% (18K) đính đá CZ hình Phật ",
        price: 20176000,
        imgMain: "./assets/img/ItemTrungBaySP/id41.png",
        imgHover: "./assets/img/ItemTrungBaySP/id41-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["VangTrang","Vang18K", "MatDayPhat"],
        detail: "Bản kích thước lớn, chi tiết mặt Phật uy nghiêm tinh xảo bao quanh bởi hàng đá CZ rực sáng. Đây là món nữ trang tâm linh đẳng cấp, mang đến sự che chở và may mắn thịnh vượng. Độ lấp lánh của đá CZ tôn lên từng đường nét chạm trổ sắc sảo của biểu tượng tôn giáo. Đeo mặt dây chuyền này không chỉ là cách thể hiện tín ngưỡng mà còn là tuyên ngôn về phong cách.",
        sold: 84,
        specs: { weight: '4.5g', material: 'Vàng trắng Ý 18K, Đá CZ' },
        gallery: [ './assets/img/ItemTrungBaySP/id41-hover.jpg' ]
    },
    {
        id: 42,
        name: "Vòng Tay Swarovski Pha lê Gema Bracelet",
        price: 5500000,
        imgMain: "./assets/img/ItemTrungBaySP/id42.png",
        imgHover: "./assets/img/ItemTrungBaySP/id42-hover.jpg",
        category: ["TrangSuc", "PhongThuy"],
        subCategory: ["LacTay", "DaTheoMenh"],
        detail: "Vòng tay pha lê đa sắc Gema Bracelet rực rỡ dưới mọi góc nhìn, dễ dàng phối theo mệnh phong thủy. Tuyệt tác đến từ nhà Swarovski giúp tô điểm phong cách sành điệu, tỏa sáng. Các viên pha lê đa hình khối được liên kết một cách ngẫu hứng nhưng vô cùng nghệ thuật. Món phụ kiện độc đáo này sẽ làm cho mọi trang phục thường ngày trở nên sinh động và rạng rỡ hơn.",
        sold: 341,
        sizes: ['S', 'M', 'L', 'XL'],
        specs: { material: 'Pha lê Swarovski, Mạ Rhodium' },
        gallery: [ './assets/img/ItemTrungBaySP/id42-hover.jpg' ]
    },
    {
        id: 43,
        name: "Lắc tay Bạc đính đá STYLE Collection",
        price: 1195000,
        imgMain: "./assets/img/ItemTrungBaySP/id43.png",
        imgHover: "./assets/img/ItemTrungBaySP/id43-hover.jpg",
        category: ["TrangSuc", "PhongThuy"],
        subCategory: ["LacTay", "DaTheoMenh"],
        detail: "BST STYLE mang đến lắc tay bạc đính đá hiện đại, phá cách tôn vinh cá tính năng động. Một item phối đồ hoàn hảo, dễ dàng tỏa sáng rạng rỡ trong mọi hoạt động mỗi ngày. Thiết kế dạng chuỗi thanh mảnh nhưng rất chắc chắn, tạo cảm giác nhẹ nhàng, nữ tính. Lớp xi mạ cao cấp giúp sản phẩm giữ được vẻ sáng bóng dài lâu, đồng hành cùng bạn theo năm tháng.",
        sold: 965,
        sizes: ['S', 'M', 'L', 'XL'],
        specs: { material: 'Bạc S925, Đá CZ' },
        gallery: [ './assets/img/ItemTrungBaySP/id43-hover.jpg' ]
    },
    {
        id: 44,
        name: "Nhẫn Bạc đính đá Ruby",
        price: 545000,
        imgMain: "./assets/img/ItemTrungBaySP/id44.png",
        imgHover: "./assets/img/ItemTrungBaySP/id44-hover.jpg",
        category: ["DaQuy","TrangSuc" ,"PhongThuy"],
        subCategory: ["Ruby", "NhanDon","DaTheoMenh"],
        detail: "Đá Ruby nhân tạo đỏ thắm trên nền bạc sáng bóng cực kỳ phù hợp cho người mệnh Hỏa, Thổ. Chiếc nhẫn phong thủy duyên dáng này là lựa chọn tối ưu và thu hút tài lộc. Sự tương phản giữa sắc đỏ rực rỡ và ánh bạc tinh khôi tạo nên một sức hút khó cưỡng. Mức giá phải chăng nhưng vẫn đảm bảo độ hoàn thiện tinh xảo, xứng đáng để sở hữu ngay.",
        sold: 1450,
        sizes: [10, 11, 12, 13, 14],
        specs: { material: 'Bạc S925', stone: 'Ruby (nhân tạo)' },
        gallery: [ './assets/img/ItemTrungBaySP/id44-hover.jpg' ]
    },
    {
        id: 45,
        name: "Cây Đào Đá Thạch Anh Hồng 3A 68 Quả ",
        price: 49500000,
        imgMain: "./assets/img/ItemTrungBaySP/id45.png",
        imgHover: "./assets/img/ItemTrungBaySP/id45-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["DaTheoMenh"],
        detail: "Cây đào phong thủy 68 quả tạc từ thạch anh hồng 3A mang ý nghĩa tình duyên nở rộ, vượng khí dồi dào. Tác phẩm nghệ thuật đỉnh cao, hoàn hảo để trưng bày sang trọng. Từng quả đào được mài giũa cẩn thận, tỏa ra năng lượng yêu thương và sự gắn kết gia đình. Vật phẩm này là điểm nhấn hoàn hảo cho không gian phòng khách hoặc bàn làm việc của bạn.",
        sold: 12,
        specs: { material: 'Thạch anh hồng 3A', type: 'Vật phẩm trưng bày' },
        gallery: [ './assets/img/ItemTrungBaySP/id45-hover.jpg' ]
    },
    {
        id: 46,
        name: "Hạt Charm Bạc đính đá",
        price: 695000,
        imgMain: "./assets/img/ItemTrungBaySP/id46.png",
        imgHover: "./assets/img/ItemTrungBaySP/id46-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["DaTheoMenh"],
        detail: "Hạt charm bạc đính đá lấp lánh dễ dàng kết hợp cùng các vòng tay sẵn có. Thiết kế nhỏ xinh, tinh tế giúp bạn thỏa sức sáng tạo nên bộ trang sức mang đậm dấu ấn cá nhân. Dù đứng độc lập hay kết hợp cùng nhiều charm khác, sản phẩm vẫn luôn nổi bật và thu hút. Sự tinh tế trong chế tác giúp món phụ kiện trở thành người bạn đồng hành đáng yêu mỗi ngày.",
        sold: 840,
        specs: { material: 'Bạc S925, Đá CZ' },
        gallery: [ './assets/img/ItemTrungBaySP/id46-hover.jpg' ]
    },
    {
        id: 47,
        name: "Hạt Charm Bạc đính đá STYLE Collection",
        price: 495000,
        imgMain: "./assets/img/ItemTrungBaySP/id47.png",
        imgHover: "./assets/img/ItemTrungBaySP/id47-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["DaTheoMenh"],
        detail: "Charm bạc chạm khắc hoa văn tinh xảo từ BST STYLE Collection hiện đại. Hạt charm mang đến vẻ đẹp cá tính, giúp lưu giữ những khoảnh khắc đáng nhớ trên chiếc vòng tay. Từng đường nét hoa văn đều kể một câu chuyện riêng, phản ánh phong cách độc đáo của người đeo. Thiết kế tiện dụng giúp bạn dễ dàng thay đổi và cập nhật xu hướng thời trang mới nhất.",
        sold: 1120,
        specs: { material: 'Bạc S925' },
        gallery: [ './assets/img/ItemTrungBaySP/id47-hover.jpg' ]
    },
    {
        id: 48,
        name: "Hạt Charm Túi vàng",
        price: 445000,
        imgMain: "./assets/img/ItemTrungBaySP/id48.png",
        imgHover: "./assets/img/ItemTrungBaySP/id48-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["CharmVang"],
        detail: "Charm bạc mạ vàng hình Túi Tiền biểu tượng cho tài lộc dồi dào, sung túc. Chế tác sinh động, tỉ mỉ mang ý nghĩa phong thủy tốt lành cho một năm làm ăn hồng phát. Màu vàng rực rỡ của lớp mạ mang đến cảm giác ấm áp và sang trọng, xua tan mọi điều xui xẻo. Đây là món quà tặng ý nghĩa dành cho đối tác, bạn bè trong những dịp khai trương, lễ tết.",
        sold: 1543,
        specs: { material: 'Bạc S925 mạ vàng' },
        gallery: [ './assets/img/ItemTrungBaySP/id48-hover.jpg' ]
    },
    {
        id: 49,
        name: "Hạt Charm Bình trà vàng",
        price: 14160000,
        imgMain: "./assets/img/ItemTrungBaySP/id49.png",
        imgHover: "./assets/img/ItemTrungBaySP/id49-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["CharmVang"],
        detail: "Hạt Charm đúc đặc bằng Vàng nguyên khối hình bình trà mang ý nghĩa gia đạo an vui, êm ấm. Sản phẩm trang sức đẳng cấp mang giá trị sưu tầm cao cho dân chơi charm thứ thiệt. Sự kỳ công trong kỹ thuật đúc nguyên khối đảm bảo độ bền bỉ và sắc nét qua thời gian. Một biểu tượng của sự thanh tao, bình yên giữa nhịp sống hối hả và bộn bề.",
        sold: 95,
        specs: { material: 'Vàng', weight: '3.0g' },
        gallery: [ './assets/img/ItemTrungBaySP/id49-hover.jpg' ]
    },
    {
        id: 50,
        name: "Hạt Charm vàng Nón lá",
        price: 755000,
        imgMain: "./assets/img/ItemTrungBaySP/id50.png",
        imgHover: "./assets/img/ItemTrungBaySP/id50-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["CharmVang"],
        detail: "Tôn vinh văn hóa Việt với charm hình nón lá mạ vàng độc đáo, tỉ mỉ. Món trang sức dễ thương, tinh xảo này là lựa chọn ngập tràn niềm tự hào và ý nghĩa sâu sắc. Biểu tượng nón lá quen thuộc được tái hiện một cách sang trọng, trở thành điểm nhấn độc bản trên cổ tay. Phụ kiện hoàn hảo để quảng bá hình ảnh Việt Nam đến bạn bè quốc tế.",
        sold: 810,
        specs: { material: 'Bạc S925 mạ vàng' },
        gallery: [ './assets/img/ItemTrungBaySP/id50-hover.jpg' ]
    },
    {
        id: 51,
        name: "Charm Pandora Moments Mạ Vàng Hình Chú Ong",
        price: 3790000,
        imgMain: "./assets/img/ItemTrungBaySP/id51.png",
        imgHover: "./assets/img/ItemTrungBaySP/id51-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["CharmVang"],
        detail: "Charm Pandora chính hãng mạ vàng hình chú ong chăm chỉ, biểu trưng cho sự ngọt ngào. Lựa chọn tuyệt vời để bổ sung vào bộ sưu tập Pandora rực rỡ và thời thượng của bạn. Hình ảnh chú ong được chế tác sinh động, mang đến năng lượng tích cực và sự tươi vui. Thiết kế tỉ mỉ này chắc chắn sẽ làm rung động trái tim của mọi tín đồ yêu thích trang sức.",
        sold: 412,
        specs: { material: 'Mạ vàng 14K' },
        gallery: [ './assets/img/ItemTrungBaySP/id51-hover.jpg' ]
    },
    {
        id: 52,
        name: "Hộp Đựng Trang Sức Pandora",
        price: 1290000,
        imgMain: "./assets/img/ItemTrungBaySP/id52.png",
        imgHover: "./assets/img/ItemTrungBaySP/id52-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["HopTrangSuc"],
        detail: "Hộp đựng bọc da lót nhung cao cấp bảo vệ tuyệt đối các hạt charm và vòng tay Pandora. Thiết kế trang nhã, cứng cáp xứng tầm thương hiệu quốc tế, điểm tô góc trang điểm. Không gian bên trong được phân chia khoa học, giúp bạn dễ dàng sắp xếp và tìm kiếm phụ kiện. Đây là người bạn đồng hành lý tưởng để bảo quản những món trang sức đắt giá của bạn.",
        sold: 520,
        specs: { material: 'Da PU, lót nỉ', brand: 'Pandora' },
        gallery: [ './assets/img/ItemTrungBaySP/id52-hover.jpg' ]
    },
    {
        id: 53,
        name: "Hộp trang sức hoạ tiết vẽ tay",
        price: 1920000,
        imgMain: "./assets/img/ItemTrungBaySP/id53.png",
        imgHover: "./assets/img/ItemTrungBaySP/id53-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["HopTrangSuc"],
        detail: "Chiếc hộp gỗ thủ công với những nét vẽ họa tiết nghệ thuật cổ điển, tinh xảo. Không chỉ để cất giữ trang sức an toàn mà còn là vật phẩm trang trí tinh tế cho bàn trang điểm. Mỗi nét vẽ đều chứa đựng tâm huyết và sự sáng tạo của người nghệ nhân tài hoa. Sản phẩm mang đậm tính cá nhân hóa, là món quà độc đáo dành tặng cho những người yêu cái đẹp.",
        sold: 234,
        specs: { material: 'Gỗ, vẽ tay' },
        gallery: [ './assets/img/ItemTrungBaySP/id53-hover.jpg' ]
    },
    {
        id: 54,
        name: "Hộp nhẫn đôi cổ điển - Crystal Engagement Proposal Gift with Velvet Lining",
        price: 2077000,
        imgMain: "./assets/img/ItemTrungBaySP/id54.png",
        imgHover: "./assets/img/ItemTrungBaySP/id54-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["HopTrangSuc"],
        detail: "Hộp pha lê trong suốt lót nhung đỏ quý phái, thiết kế cực kỳ lãng mạn. Sự lụa chọn hoàn hảo để chứa đựng kỷ vật tình yêu vĩnh cửu trong những khoảnh khắc cầu hôn thiêng liêng. Ánh sáng xuyên qua lớp pha lê làm tôn lên vẻ đẹp rực rỡ của đôi nhẫn cưới bên trong. Cấu trúc hộp chắc chắn nhưng vẫn giữ được nét mềm mại, tinh tế đến từng góc cạnh.",
        sold: 185,
        specs: { material: 'Pha lê, lót nhung' },
        gallery: [ './assets/img/ItemTrungBaySP/id54-hover.jpg' ]
    },
    {
        id: 55,
        name: "Máy rung làm sạch trang sức bằng sóng âm Bear",
        price: 560000,
        imgMain: "./assets/img/ItemTrungBaySP/id55.png",
        imgHover: "./assets/img/ItemTrungBaySP/id55-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DungCuLamSach"],
        detail: "Máy làm sạch sâu bụi bẩn trong các kẽ hở trang sức bằng công nghệ sóng âm rung tần số cao. Giải pháp chăm sóc trang sức tại nhà vô cùng tiện lợi, nhỏ gọn và nhanh chóng. Hoạt động êm ái, không gây tiếng ồn khó chịu, đảm bảo an toàn tuyệt đối cho mọi chất liệu trang sức. Thiết kế hiện đại, dễ sử dụng, giúp tiết kiệm thời gian và chi phí bảo dưỡng.",
        sold: 1320,
        specs: { technology: 'Sóng âm 45000Hz', brand: 'Bear' },
        gallery: [ './assets/img/ItemTrungBaySP/id55-hover.jpg' ]
    },
    {
        id: 56,
        name: "Bộ Vệ Sinh Trang Sức Pandora",
        price: 590000,
        imgMain: "./assets/img/ItemTrungBaySP/id56.png",
        imgHover: "./assets/img/ItemTrungBaySP/id56-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DungCuLamSach"],
        detail: "Bộ vệ sinh chuyên dụng gồm dung dịch và cọ siêu mềm giúp trang sức Pandora luôn sáng bóng như mới. Món phụ kiện cực kỳ cần thiết để bảo quản nữ trang hoàn hảo. Công thức dung dịch dịu nhẹ, đánh bay mọi vết bẩn cứng đầu mà không làm mài mòn bề mặt kim loại. Các dụng cụ đi kèm được thiết kế nhỏ gọn, dễ dàng thao tác vào những góc khuất.",
        sold: 954,
        specs: { includes: 'Dung dịch, bàn chải, khăn lau', brand: 'Pandora' },
        gallery: [ './assets/img/ItemTrungBaySP/id56-hover.jpg' ]
    },
    {
        id: 57,
        name: "Khăn lau bạc Pandora Jewelry Polishing Cloth anti tarnish silver",
        price: 263000,
        imgMain: "./assets/img/ItemTrungBaySP/id57.png",
        imgHover: "./assets/img/ItemTrungBaySP/id57-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["KhanLauBac"],
        detail: "Khăn chuyên dụng tẩm sẵn hợp chất chống oxy hóa, đánh bay xỉn màu cho trang sức bạc hiệu quả. Giải pháp bảo quản nữ trang nhanh chóng, tiết kiệm giúp món đồ luôn sáng đẹp. Chất vải mềm mại, không gây xước xát, giữ cho bề mặt trang sức luôn nhẵn mịn và hoàn hảo. Chỉ với vài thao tác lau nhẹ, vẻ đẹp nguyên bản của món phụ kiện sẽ lập tức trở lại.",
        sold: 2150,
        specs: { function: 'Chống xỉn màu', brand: 'Pandora' },
        gallery: [ './assets/img/ItemTrungBaySP/id57-hover.jpg' ]
    },
    {
        id: 58,
        name: "Khăn lau bạc TIFFANY & CO. 18X18 SILVER POLISHING CLOTH NEW IN ORIGINAL",
        price: 1576000,
        imgMain: "./assets/img/ItemTrungBaySP/id58.png",
        imgHover: "./assets/img/ItemTrungBaySP/id58-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["KhanLauBac"],
        detail: "Khăn lau cao cấp từ thương hiệu Tiffany & Co. nổi tiếng, kích thước lớn giúp làm sạch tối đa mọi bề mặt trang sức. Phụ kiện khẳng định sự chuyên nghiệp trong việc chăm sóc nữ trang. Sự đầu tư vào một chiếc khăn chính hãng giúp kéo dài tuổi thọ và độ rực rỡ cho bộ sưu tập của bạn. Đóng gói sang trọng, hoàn toàn có thể trở thành một món quà tặng tinh tế.",
        sold: 132,
        specs: { size: '18x18 cm', brand: 'Tiffany & Co.' },
        gallery: [ './assets/img/ItemTrungBaySP/id58-hover.jpg' ]
    },
    {
        id: 59,
        name: "Khăn lau bạc Town Talk Anti-Tarnish Silver & Brilliant Gold Polishing Cloth Set - 5 x 7",
        price: 578000,
        imgMain: "./assets/img/ItemTrungBaySP/id59.png",
        imgHover: "./assets/img/ItemTrungBaySP/id59-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["KhanLauBac"],
        detail: "Set khăn chuyên dụng Town Talk dùng cho cả trang sức Vàng và Bạc, chống xỉn màu hiệu quả vượt trội. Phụ kiện nhập khẩu chất lượng cao đảm bảo độ sáng bóng bền lâu. Thiết kế hai trong một mang đến sự tiện lợi tối đa cho những ai sở hữu đa dạng các loại trang sức. Kích thước nhỏ gọn, dễ dàng mang theo trong túi xách để sử dụng bất cứ lúc nào.",
        sold: 654,
        specs: { usage: 'Vàng và Bạc', brand: 'Town Talk' },
        gallery: [ './assets/img/ItemTrungBaySP/id59-hover.jpg' ]
    },
    {
        id: 60,
        name: "Dây chuyền bạc PNJSilver",
        price: 1075000,
        imgMain: "./assets/img/ItemTrungBaySP/id60.png",
        imgHover: "./assets/img/ItemTrungBaySP/id60-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DayDeoThayThe"],
        detail: "Sợi dây bạc PNJSilver mang thiết kế cơ bản, thay thế hoàn hảo cho các mặt dây chuyền đa dạng. Sợi xích vô cùng bền chắc, bắt sáng lấp lánh và giữ được nét tinh tế. Chất liệu bạc cao cấp an toàn cho da nhạy cảm, không lo bị kích ứng khi đeo thường xuyên. Thiết kế khóa cài thông minh, thao tác dễ dàng mang lại sự tiện lợi tối đa.",
        sold: 815,
        sizes: ['35-40', '40-45', '45-50', '50-60'],
        specs: { material: 'Bạc S925', brand: 'PNJSilver' },
        gallery: [ './assets/img/ItemTrungBaySP/id60-hover.jpg' ]
    },
    {
        id: 61,
        name: "Dây Chuyền Pandora Moments Mạ Vàng Hồng 14K Dạng Xích",
        price: 6990000,
        imgMain: "./assets/img/ItemTrungBaySP/id61.png",
        imgHover: "./assets/img/ItemTrungBaySP/id61-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DayDeoThayThe"],
        detail: "Dây xích Pandora mạ vàng hồng 14K chắc chắn, có thể tùy biến gắn thêm charm phong cách riêng. Sự đầu tư hoàn hảo cho nét sang trọng, kiêu kỳ độc bản của mỗi cô gái. Màu vàng hồng thời thượng kết hợp hài hòa với hầu hết các loại charm trên thị trường hiện nay. Kết cấu xích linh hoạt, không bị rối hay gấp khúc, tạo cảm giác thoải mái trên cổ.",
        sold: 201,
        sizes: ['35-40', '40-45', '45-50', '50-60'],
        specs: { material: 'Mạ vàng hồng 14K', brand: 'Pandora' },
        gallery: [ './assets/img/ItemTrungBaySP/id61-hover.jpg' ]
    },
    {
        id: 62,
        name: "Dây Chuyền Pandora Moments Dạng Xích Nút Thắt Dài",
        price: 2390000,
        imgMain: "./assets/img/ItemTrungBaySP/id62.png",
        imgHover: "./assets/img/ItemTrungBaySP/id62-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DayDeoThayThe"],
        detail: "Thiết kế xích Pandora nút thắt dài lạ mắt, dễ dàng mix-match hoàn hảo với áo len, váy xẻ sâu. Sợi dây chuyền cá tính, thời thượng luôn được phái đẹp yêu thích cuồng nhiệt. Điểm nhấn nút thắt tạo nên sự khác biệt, thu hút mọi ánh nhìn về phần cổ thanh tú. Bạn có thể tự do sáng tạo phong cách bằng cách tùy chỉnh độ dài linh hoạt.",
        sold: 462,
        sizes: ['35-40', '40-45', '45-50', '50-60'],
        specs: { material: 'Bạc S925', brand: 'Pandora' },
        gallery: [ './assets/img/ItemTrungBaySP/id62-hover.jpg' ]
    },
    {
        id: 63,
        name: "Dây Chuyền Pandora Mạ Vàng 14K Mắt Xích Dài Chữ Nhật",
        price: 4790000,
        imgMain: "./assets/img/ItemTrungBaySP/id63.png",
        imgHover: "./assets/img/ItemTrungBaySP/id63-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DayDeoThayThe"],
        detail: "Dạng mắt xích chữ nhật sành điệu, trẻ trung mạ vàng 14K từ thương hiệu Pandora đình đám. Sợi dây tạo nên điểm nhấn thời thượng khó rời mắt cho những outfit năng động. Các mắt xích cứng cáp được liên kết hoàn hảo, thể hiện sự mạnh mẽ nhưng vẫn rất nữ tính. Sự lấp lánh của lớp mạ vàng sẽ làm bừng sáng mọi phong cách thời trang của bạn.",
        sold: 188,
        sizes: ['35-40', '40-45', '45-50', '50-60'],
        specs: { material: 'Mạ vàng 14K', brand: 'Pandora' },
        gallery: [ './assets/img/ItemTrungBaySP/id63-hover.jpg' ]
    },
    {
        id: 64,
        name: "VÀNG MIẾNG SJC 1 LƯỢNG",
        price: null,
        imgMain: "./assets/img/ItemTrungBaySP/id64.png",
        imgHover: "./assets/img/ItemTrungBaySP/id64-hover.jpg",
        category: ["VangBac"],
        subCategory: ["Vang"],
        detail: "Vàng miếng SJC 1 lượng (10 chỉ) nguyên chất 99.99% là lựa chọn tối ưu để tích trữ tài sản, đầu tư sinh lời. Sản phẩm vàng miếng cao cấp, được bảo chứng bởi thương hiệu uy tín hàng đầu Việt Nam. Bao bì được niêm phong cẩn thận bằng công nghệ màng hologram chống giả tuyệt đối. Đây là kênh trú ẩn an toàn và hiệu quả, bảo vệ tài chính trước mọi biến động của thị trường.",
        sold: 64,
        specs: { weight: '37.5g', purity: '99.99%', brand: 'SJC' },
        gallery: [ './assets/img/ItemTrungBaySP/id64-hover.jpg' ]
    },
    {
        id: 65,
        name: "VÀNG MIẾNG SJC 5 CHỈ",
        price: null,
        imgMain: "./assets/img/ItemTrungBaySP/id65.png",
        imgHover: "./assets/img/ItemTrungBaySP/id65-hover.jpg",
        category: ["VangBac"],
        subCategory: ["Vang"],
        detail: "Vàng miếng SJC 5 chỉ nguyên chất 99.99% là lựa chọn tối ưu để tích trữ tài sản, đầu tư sinh lời. Sản phẩm vàng miếng cao cấp, được bảo chứng bởi thương hiệu uy tín hàng đầu Việt Nam. Khối lượng linh hoạt giúp nhà đầu tư dễ dàng mua bán, phân bổ danh mục tài sản một cách thông minh. Tính thanh khoản cao, được chấp nhận rộng rãi trên toàn quốc.",
        sold: 107,
        specs: { weight: '18.75g', purity: '99.99%', brand: 'SJC' },
        gallery: [ './assets/img/ItemTrungBaySP/id65-hover.jpg' ]
    },
    {
        id: 66,
        name: "VÀNG MIẾNG SJC 2 CHỈ",
        price: null,
        imgMain: "./assets/img/ItemTrungBaySP/id66.png",
        imgHover: "./assets/img/ItemTrungBaySP/id66-hover.jpg",
        category: ["VangBac"],
        subCategory: ["Vang"],
        detail: "Vàng miếng SJC 2 chỉ nguyên chất 99.99% là lựa chọn tối ưu để tích trữ tài sản, đầu tư sinh lời. Sản phẩm vàng miếng cao cấp, được bảo chứng bởi thương hiệu uy tín hàng đầu Việt Nam. Lựa chọn phù hợp với những ai muốn bắt đầu hành trình tích lũy một cách an toàn và bền vững. Chất lượng vàng tuyệt hảo luôn duy trì độ sáng bóng và giá trị trường tồn.",
        sold: 368,
        specs: { weight: '7.5g', purity: '99.99%', brand: 'SJC' },
        gallery: [ './assets/img/ItemTrungBaySP/id66-hover.jpg' ]
    },
    {
        id: 67,
        name: "VÀNG MIẾNG SJC 1 CHỈ",
        price: null,
        imgMain: "./assets/img/ItemTrungBaySP/id67.png",
        imgHover: "./assets/img/ItemTrungBaySP/id67-hover.jpg",
        category: ["VangBac"],
        subCategory: ["Vang"],
        detail: "Vàng miếng SJC 1 chỉ nguyên chất 99.99% là lựa chọn tối ưu để tích trữ tài sản, đầu tư sinh lời. Sản phẩm vàng miếng cao cấp, được bảo chứng bởi thương hiệu uy tín hàng đầu Việt Nam. Kích thước nhỏ gọn, rất thích hợp để làm quà biếu tặng trong các dịp lễ tết hay sự kiện trọng đại. Một giải pháp tài chính đơn giản nhưng vô cùng thiết thực cho tương lai.",
        sold: 386,
        specs: { weight: '3.75g', purity: '99.99%', brand: 'SJC' },
        gallery: [ './assets/img/ItemTrungBaySP/id67-hover.jpg' ]
    },
    {
        id: 68,
        name: "Kim Cương Tự Nhiên",
        price: null,
        imgMain: "./assets/img/ItemTrungBaySP/cuc-kim-cuong.webp",
        imgHover: "./assets/img/ItemTrungBaySP/cuc-kim-cuong-hover.png",
        category: ["DaQuy"],
        subCategory: ["KimCuong"],
        detail: "Kim cương tự nhiên GIA uy tín hàng đầu Việt Nam. Mỗi viên kim cương đều mang một vẻ đẹp độc bản, tượng trưng cho sự thuần khiết và vĩnh cửu. Chúng tôi cam kết mang đến những sản phẩm chất lượng nhất, đi kèm giấy chứng nhận quốc tế minh bạch.",
        sold: 12,
        specs: { purity: 'Tùy chọn', color: 'Tùy chọn', cut: 'Tùy chọn', certification: 'GIA' },
        gallery: [ './assets/img/ItemTrungBaySP/cuc-kim-cuong-hover.png' ]
    },
];



// Sinh tự động số lượng tồn kho (stock) cho mỗi sản phẩm để đồng bộ với giỏ hàng.
gemProducts.forEach(product => {
    if (product.stock === undefined) {
        let hash = 0;
        for (let i = 0; i < product.name.length; i++) hash += product.name.charCodeAt(i);
        product.stock = (hash % 20) + 5;
    }
});



const categoryNames = { 'All': 'Tất cả sản phẩm', 'KimCuong': 'Kim cương', 'VangTrang': 'Vàng trắng', 'Vang18K': 'Vàng Ý 18K', 'Vang24K': 'Vàng 24K', 'VangHong': 'Vàng hồng', 'Sapphire': 'Sapphire', 'Ruby': 'Ruby', 'Emerald': 'Emerald', 'Topaz': 'Topaz', 'Bac': 'Bạc S925', 'NhanDon': 'Nhẫn đơn', 'DayChuyen': 'Dây chuyền', 'BongTai': 'Bông tai', 'LacTay': 'Vòng & Lắc tay', 'VongTay': 'Vòng tay', 'NhanCuoi': 'Nhẫn cưới', 'VongTayTyHuu': 'Vòng tay tỳ hưu', 'MatDayPhat': 'Mặt dây Phật', 'DaTheoMenh': 'Đá theo mệnh', 'CharmVang': 'Charm vàng', 'HopTrangSuc': 'Hộp trang sức', 'DungCuLamSach': 'Dụng cụ làm sạch', 'KhanLauBac': 'Khăn lau bạc', 'DayDeoThayThe': 'Dây đeo thay thế' };

let currentDisplayList = [];
let currentSortType = 'default';
let currentPageIndex = 1;
const itemsPerPage = 12; // Số sản phẩm trên 1 trang

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
                        <h3 class="p-name text-center mb-1">${product.name}</h3>
                        <p class="p-price text-center mb-1">${product.price ? product.price.toLocaleString() + 'đ' : '<i style="font-weight: normal;">Liên hệ</i>'}</p>
                        <div class="text-end w-100">
                            <span class="text-muted small" style="font-size: 0.75rem;">Đã bán: ${product.sold || 0}</span>
                        </div>
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

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Ngăn chặn ghi đè breadcrumb của các trang không thuộc danh mục sản phẩm (như about.html, detail.html,...)
    const productPages = ['TrungBaySP.html', 'DaQuy.html', 'VangBac.html', 'TrangSuc.html', 'PhongThuy.html', 'PhuKien.html'];
    if (!productPages.includes(currentPage)) return;

    breadcrumbList.innerHTML = '';
    
    const createItem = (text, href, isActive, icon = null) => {
        const li = document.createElement('li');
        li.className = `breadcrumb-item ${isActive ? 'active' : ''}`;
        if (isActive) li.setAttribute('aria-current', 'page');
        
        let content = '';
        if (icon) content += `<i class="fas ${icon} me-1"></i>`;
        
        if (isActive) {
            content += `<span class="text-dark fw-bold">${text}</span>`;
            li.innerHTML = content;
        } else {
            li.innerHTML = `<a href="${href}" class="text-decoration-none text-muted">${content}${text}</a>`;
        }
        return li;
    };

    breadcrumbList.appendChild(createItem('Trang chủ', 'index.html', false, 'fa-home'));

    const pageConfig = {
        'DaQuy.html': { title: 'Đá quý', href: 'DaQuy.html' },
        'VangBac.html': { title: 'Vàng bạc', href: 'VangBac.html' },
        'TrangSuc.html': { title: 'Trang sức', href: 'TrangSuc.html' },
        'PhongThuy.html': { title: 'Phong thủy', href: 'PhongThuy.html' },
        'PhuKien.html': { title: 'Phụ kiện', href: 'PhuKien.html' }
    };

    const currentConfig = pageConfig[currentPage];

    if (currentConfig) {
        breadcrumbList.appendChild(createItem('Sản phẩm', 'TrungBaySP.html', false));
        if (label === 'Tất cả sản phẩm' || label === currentConfig.title) {
            breadcrumbList.appendChild(createItem(currentConfig.title, currentConfig.href, true));
        } else {
            breadcrumbList.appendChild(createItem(currentConfig.title, currentConfig.href, false));
            breadcrumbList.appendChild(createItem(label, '#', true));
        }
    } else {
        if (label === 'Tất cả sản phẩm' || label === 'Sản phẩm') {
            breadcrumbList.appendChild(createItem('Sản phẩm', 'TrungBaySP.html', true));
        } else {
            breadcrumbList.appendChild(createItem('Sản phẩm', 'TrungBaySP.html', false));
            breadcrumbList.appendChild(createItem(label, '#', true));
        }
    }
}

// --- HÀM 3: LỌC THEO DANH MỤC ---
function filterCat(catKey) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let filtered = gemProducts;

    const pageCategoryMap = {
        'DaQuy.html': 'DaQuy',
        'VangBac.html': 'VangBac',
        'TrangSuc.html': 'TrangSuc',
        'PhongThuy.html': 'PhongThuy',
        'PhuKien.html': 'PhuKien'
    };

    const mainCategory = pageCategoryMap[currentPage];

    if (mainCategory) {
        // Lọc sản phẩm theo danh mục lớn của trang hiện tại
        filtered = gemProducts.filter(p => p.category && p.category.includes(mainCategory));
        // Nếu có chọn subCategory thì lọc tiếp
        if (catKey !== 'All') {
            filtered = filtered.filter(p => p.subCategory && p.subCategory.includes(catKey));
        }
    } else {
        // Mặc định ở trang Sản phẩm chung
        filtered = catKey === 'All' ? gemProducts : gemProducts.filter(p => (p.category && p.category.includes(catKey)) || (p.subCategory && p.subCategory.includes(catKey)));
    }

    currentDisplayList = filtered;
    currentPageIndex = 1; // Đặt lại về trang 1 khi đổi danh mục
    applySortAndRender();
    updateBreadcrumb(categoryNames[catKey] || 'Tất cả sản phẩm');

    // Hiển thị Accordion nếu chọn danh mục Kim Cương
    const kimCuongAccordion = document.getElementById('kim-cuong-accordion-container');
    if (kimCuongAccordion) {
        if (catKey === 'KimCuong') {
            kimCuongAccordion.classList.remove('d-none');
        } else {
            kimCuongAccordion.classList.add('d-none');
        }
    }

    // Hiển thị Hero Video Kim Cương
    const kimCuongVideo = document.getElementById('kim-cuong-hero-video');
    if (kimCuongVideo) {
        if (catKey === 'KimCuong') {
            kimCuongVideo.classList.remove('d-none');
        } else {
            kimCuongVideo.classList.add('d-none');
        }
    }
}

// --- HÀM XỬ LÝ SẮP XẾP ---
function applySortAndRender() {
    const sortSelect = document.getElementById('price-sort-select');
    const priceSortValue = sortSelect ? sortSelect.value : 'default';
    
    let sorted = [...currentDisplayList];
    
    // Ưu tiên sắp xếp theo giá nếu người dùng chọn
    if (priceSortValue === 'asc') {
        sorted.sort((a, b) => (a.price || Infinity) - (b.price || Infinity));
        document.querySelectorAll('.btn-sort').forEach(b => b.classList.remove('active'));
        currentSortType = 'default';
    } else if (priceSortValue === 'desc') {
        sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
        document.querySelectorAll('.btn-sort').forEach(b => b.classList.remove('active'));
        currentSortType = 'default';
    } else {
        // Xử lý các nút sắp xếp (Phổ biến, Mới nhất, Bán chạy)
        if (currentSortType === 'newest') {
            sorted.sort((a, b) => b.id - a.id); // ID càng lớn càng mới
        } else if (currentSortType === 'bestseller') {
            sorted.sort((a, b) => (b.sold || 0) - (a.sold || 0)); // Lượt bán cao nhất xếp trước
        } else if (currentSortType === 'popular') {
            // Điểm phổ biến = Lượt bán kết hợp với độ mới của ID
            sorted.sort((a, b) => {
                const scoreA = (a.sold || 0) * 0.7 + a.id * 3;
                const scoreB = (b.sold || 0) * 0.7 + b.id * 3;
                return scoreB - scoreA;
            });
        }
    }
    
    // Logic phân trang
    const totalItems = sorted.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (currentPageIndex < 1) currentPageIndex = 1;
    if (currentPageIndex > totalPages && totalPages > 0) currentPageIndex = totalPages;

    const startIndex = (currentPageIndex - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = sorted.slice(startIndex, endIndex);

    renderProducts(paginatedItems);
    renderPagination(totalItems, totalPages);
}

// --- HÀM RENDER PHÂN TRANG ---
function renderPagination(totalItems, totalPages) {
    const container = document.getElementById('pagination-container');
    if (!container) return;

    if (totalPages < 1) {
        container.innerHTML = '';
        return;
    }

    let html = '<ul class="pagination custom-pagination mb-0">';

    // Nút "Trang trước"
    html += `<li class="page-item ${currentPageIndex === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" aria-label="Previous" onclick="event.preventDefault(); changePage(${currentPageIndex - 1})">
                    <i class="fas fa-chevron-left"></i>
                </a>
             </li>`;

    // Hiển thị các số trang và dấu ...
    let startPage = Math.max(1, currentPageIndex - 1);
    let endPage = Math.min(totalPages, currentPageIndex + 1);

    if (currentPageIndex === 1) {
        endPage = Math.min(totalPages, 3);
    } else if (currentPageIndex === totalPages) {
        startPage = Math.max(1, totalPages - 2);
    }

    if (startPage > 1) {
        html += `<li class="page-item"><a class="page-link" href="#" onclick="event.preventDefault(); changePage(1)">1</a></li>`;
        if (startPage > 2) {
            html += `<li class="page-item disabled"><span class="page-link border-0 text-muted">...</span></li>`;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        html += `<li class="page-item ${i === currentPageIndex ? 'active' : ''}">
                    <a class="page-link" href="#" onclick="event.preventDefault(); changePage(${i})">${i}</a>
                 </li>`;
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            html += `<li class="page-item disabled"><span class="page-link border-0 text-muted">...</span></li>`;
        }
        html += `<li class="page-item"><a class="page-link" href="#" onclick="event.preventDefault(); changePage(${totalPages})">${totalPages}</a></li>`;
    }

    // Nút "Trang sau"
    html += `<li class="page-item ${currentPageIndex === totalPages ? 'disabled' : ''}">
                <a class="page-link" href="#" aria-label="Next" onclick="event.preventDefault(); changePage(${currentPageIndex + 1})">
                    <i class="fas fa-chevron-right"></i>
                </a>
             </li>`;

    html += '</ul>';
    container.innerHTML = html;
}

// --- HÀM CHUYỂN TRANG ---
function changePage(page) {
    currentPageIndex = page;
    applySortAndRender();
    
    // Cuộn nhẹ lên đầu lưới sản phẩm
    const gridTop = document.getElementById('product-display-grid');
    if (gridTop) {
        const y = gridTop.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

// --- HÀM 4: TÌM KIẾM NHANH ---
function searchProducts(query) {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageCategoryMap = {
        'DaQuy.html': 'DaQuy',
        'VangBac.html': 'VangBac',
        'TrangSuc.html': 'TrangSuc',
        'PhongThuy.html': 'PhongThuy',
        'PhuKien.html': 'PhuKien'
    };
    
    const mainCategory = pageCategoryMap[currentPage];
    
    let filtered = gemProducts.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase())
    );
    
    if (mainCategory) {
        filtered = filtered.filter(p => p.category && p.category.includes(mainCategory));
    }
    
    currentDisplayList = filtered;
    currentPageIndex = 1; // Đặt lại về trang 1 khi tìm kiếm
    applySortAndRender();
    updateBreadcrumb(`Kết quả cho: "${query}"`);

    // Đảm bảo ẩn Accordion khi đang ở chế độ tìm kiếm
    const kimCuongAccordion = document.getElementById('kim-cuong-accordion-container');
    if (kimCuongAccordion) {
        kimCuongAccordion.classList.add('d-none');
    }

    // Ẩn Video Kim cương khi tìm kiếm
    const kimCuongVideo = document.getElementById('kim-cuong-hero-video');
    if (kimCuongVideo) {
        kimCuongVideo.classList.add('d-none');
    }
}

// --- HÀM TẠO GRID SẢN PHẨM (GIỐNG TRANG CHỦ) ---
function renderProductGrid4(containerId, products) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let html = '<div class="product-grid-4">';
    products.forEach(product => {
        const safeName = product.name.replace(/'/g, "\\'");
        html += `
            <div class="product-card-v2 h-100 d-flex flex-column" style="cursor: pointer;" onclick="window.location.href='detail.html?id=${product.id}'">
                <div class="product-img-box">
                    <img src="${product.imgMain}" class="img-main" />
                    <img src="${product.imgHover}" class="img-hover" />
                </div>
                <div class="product-info flex-grow-1 d-flex flex-column">
                    <h3 class="p-name">${product.name}</h3>
                    <p class="p-price">${product.price ? product.price.toLocaleString() + 'đ' : '<i style="font-weight: normal;">Liên hệ</i>'}</p>
                    <div class="p-buttons mt-auto">
                        <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart('${safeName}', ${product.price}, '${product.imgMain}')">THÊM GIỎ HÀNG</button>
                        <a href="checkout.html" class="btn-buy-now text-decoration-none text-center" onclick="event.stopPropagation(); addToCart('${safeName}', ${product.price}, '${product.imgMain}')">MUA NGAY</a>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';
    container.innerHTML = html;
}



// --- KHỞI CHẠY KHI TRANG TẢI XONG ---
document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const searchQuery = urlParams.get('search');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const validPages = ['DaQuy.html', 'VangBac.html', 'TrangSuc.html', 'PhongThuy.html', 'PhuKien.html'];

    if (searchQuery) {
        searchProducts(searchQuery);
    } else if (category && categoryNames[category]) {
        filterCat(category);
    } else {
        if (validPages.includes(currentPage)) {
            filterCat('All');
        } else {
            currentDisplayList = gemProducts;
            applySortAndRender();
            if (currentPage === 'TrungBaySP.html') {
                updateBreadcrumb('Tất cả sản phẩm');
            }
        }
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

    // Cài đặt sự kiện cho các nút Sắp xếp (Sort Bar)
    const sortButtons = document.querySelectorAll('.btn-sort');
    sortButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            // Chuyển đổi trạng thái Active
            sortButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Xác định loại sắp xếp
            const text = this.innerText.trim();
            if (text === 'Phổ biến') {
                currentSortType = 'popular';
            } else if (text === 'Mới nhất') {
                currentSortType = 'newest';
            } else if (text === 'Bán chạy') {
                currentSortType = 'bestseller';
            }
            
            // Khi bấm vào nút thì Reset select giá về mặc định để tránh xung đột
            const priceSelect = document.getElementById('price-sort-select');
            if (priceSelect) priceSelect.value = 'default';
            
            currentPageIndex = 1; // Đặt lại về trang 1 khi bấm nút sắp xếp
            applySortAndRender();
        });
    });
    
    // --- KHỞI TẠO GRID SẢN PHẨM TRONG TRUNGBAYSP ---
    const newProductsContainer = document.getElementById('grid-new-products');
    const bestsellerProductsContainer = document.getElementById('grid-bestseller-products');

    if (newProductsContainer) {
        const newProducts = [...gemProducts].sort((a, b) => b.id - a.id).slice(0, 8);
        renderProductGrid4('grid-new-products', newProducts);
    }
    
    if (bestsellerProductsContainer) {
        const bestSellerProducts = [...gemProducts].sort((a, b) => (b.sold || 0) - (a.sold || 0)).slice(0, 8);
        renderProductGrid4('grid-bestseller-products', bestSellerProducts);
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