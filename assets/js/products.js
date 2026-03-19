const gemProducts = [
    {
        id: 1,
        name: "Nhẫn bạc nữ đính kim cương Moissanite Aidan",
        price: 2181000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb2.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb2-2.jpg.webp",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["KimCuong", "NhanDon"],
        detail: "Chiếc nhẫn Aidan lấp lánh với viên kim cương Moissanite chủ đạo, biểu tượng của vẻ đẹp tinh khiết và vĩnh cửu. Chế tác từ bạc cao cấp, thiết kế thanh lịch này là món quà hoàn hảo cho những dịp đặc biệt.",
        sold: 345
    },
    {
        id: 2,
        name: "Dây chuyền bạc nữ đính đá CZ cá tiên",
        price: 1824000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb1.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb1-2.jpg.webp",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "DayChuyen"],
        detail: "Sợi dây chuyền bạc lấp lánh với mặt đá CZ hình cá tiên độc đáo, mang đến vẻ đẹp mộng mơ và nữ tính. Một phụ kiện không thể thiếu cho các cô nàng yêu thích sự tinh tế.",
        sold: 521
    },
    {
        id: 3,
        name: "Bông tai Vàng trắng 41,6% (10K) đính đá",
        price: 13070000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gbxmxmw060874-bong-tai-vang-10k-dinh-da-ecz-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id3-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "BongTai"],
        detail: "Đôi bông tai vàng trắng 10K sang trọng, đính đá ECZ cao cấp tạo điểm nhấn lấp lánh. Thiết kế hiện đại, phù hợp cho cả đi làm và dự tiệc.",
        sold: 189
    },
    {
        id: 4,
        name: "Lắc tay Vàng 58,5% (14K)",
        price: 15370000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gl0000y060888-lac-tay-vang-14k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id4-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang18K", "LacTay"],
        detail: "Chiếc lắc tay vàng 14K với thiết kế chuỗi xích cổ điển nhưng không kém phần thời thượng. Món trang sức hoàn hảo để khẳng định phong cách và đẳng cấp.",
        sold: 230
    },
    {
        id: 5,
        name: "Lắc tay Vàng trắng Ý 75% (18K)",
        price: 15892000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gl0000w001534-lac-tay-vang-trang-y-18k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id5-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "LacTay", "Vang18K"],
        detail: "Chế tác từ vàng trắng Ý 18K cao cấp, chiếc lắc tay mang vẻ đẹp tinh xảo và quý phái. Thiết kế thanh mảnh, dễ dàng phối hợp với nhiều loại trang phục.",
        sold: 155
    },
    {
        id: 6,
        name: "Bông tai Kim cương Vàng trắng 58,5% (14K)",
        price: 46200000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gbdd00w060198-bong-tai-kim-cuong-vang-trang-14k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id6-hover.jpg",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["KimCuong", "BongTai"],
        detail: "Tỏa sáng rạng ngời với đôi bông tai kim cương tự nhiên trên nền vàng trắng 14K. Vẻ đẹp vĩnh cửu của kim cương sẽ thu hút mọi ánh nhìn.",
        sold: 88
    },
    {
        id: 7,
        name: "Nhẫn Kim cương Vàng trắng 58,5% (14K)",
        price: 34620000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gndd00w060464-nhan-kim-cuong-vang-trang-14k-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id7-hover.jpg",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["KimCuong", "NhanDon"],
        detail: "Một tuyệt tác trang sức với viên kim cương lấp lánh được đặt trên nền vàng trắng 14K. Chiếc nhẫn là biểu tượng của tình yêu và sự cam kết bền vững.",
        sold: 112
    },
    {
        id: 8,
        name: "Mặt dây chuyền Vàng trắng 58,5% (14K) đính đá Sapphire",
        price: 8740000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gmsp00w000028-mat-day-chuyen-vang-14k-dinh-da-sapphire-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id8-hover.jpg",
        category: ["DaQuy", "TrangSuc"],
        subCategory: ["Sapphire", "DayChuyen"],
        detail: "Mặt dây chuyền nổi bật với viên đá Sapphire xanh biếc huyền bí, được bao bọc bởi vàng trắng 14K. Món quà ý nghĩa cho người phụ nữ bạn yêu thương.",
        sold: 190
    },
    {
        id: 9,
        name: "Mặt dây chuyền Vàng 75% (18K) đính Ngọc trai Southsea",
        price: 24610000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gmpsddc060001-mat-day-chuyen-vang-dinh-ngoc-trai-southsea-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id9-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang18K", "DayChuyen"],
        detail: "Vẻ đẹp cổ điển và sang trọng từ ngọc trai Southsea quý hiếm kết hợp cùng vàng 18K. Một món trang sức không bao giờ lỗi mốt, tôn vinh nét đẹp quý phái.",
        sold: 75
    },
    {
        id: 10,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá",
        price: 10551000,
        imgMain: "./assets/img/ItemTrungBaySP/sp-gnxmxmw005643-nhan-vang-14k-dinh-da-ecz-pnj-1.png",
        imgHover: "./assets/img/ItemTrungBaySP/id10-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "NhanDon"],
        detail: "Chiếc nhẫn vàng trắng 14K với thiết kế đính đá ECZ tinh xảo, mang lại vẻ đẹp trẻ trung và hiện đại. Phù hợp để đeo hàng ngày hoặc trong các dịp đặc biệt.",
        sold: 310
    },
    {
        id: 11,
        name: "Vòng tay bạc nữ đá Chalcedony Chrysoprase cỏ 4 lá",
        price: 7615000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb3.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb3-2.jpg.webp",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "LacTay"],
        detail: "Mang lại may mắn với vòng tay bạc đính đá Chalcedony hình cỏ 4 lá. Sắc xanh ngọc của đá mang lại cảm giác tươi mới và bình an.",
        sold: 450
    },
    {
        id: 12,
        name: "Bông tai bạc Ý S925 nữ mạ bạch kim đính đá CZ hình trái tim",
        price: 1619000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb4.jpeg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb4-2.jpg.webp",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "BongTai"],
        detail: "Đôi bông tai bạc Ý S925 hình trái tim lãng mạn, được mạ bạch kim và đính đá CZ lấp lánh. Món quà ngọt ngào cho tình yêu.",
        sold: 620
    },
    {
        id: 13,
        name: "Lắc tay bạc nữ đính pha lê Swarovski trái tim của biển",
        price: 1967000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb5.jpg",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb5-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "LacTay"],
        detail: "Lấy cảm hứng từ đại dương xanh thẳm, chiếc lắc tay bạc đính pha lê Swarovski hình trái tim mang vẻ đẹp quyến rũ và bí ẩn.",
        sold: 580
    },
    {
        id: 14,
        name: "Nhẫn nam Vàng trắng 41,6% (10K) đính đá ECZ MANCODE",
        price: 20754000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb6.png",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb6-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangTrang", "NhanDon"],
        detail: "Thiết kế mạnh mẽ và nam tính từ bộ sưu tập MANCODE. Nhẫn vàng trắng 10K đính đá ECZ tạo nên phong cách lịch lãm và đẳng cấp cho phái mạnh.",
        sold: 215
    },
    {
        id: 15,
        name: "Nhẫn Vàng 75% (18K) PNJ",
        price: 4656000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb7.png",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb7-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang18K", "NhanDon"],
        detail: "Chiếc nhẫn vàng 18K từ PNJ với thiết kế đơn giản, tinh tế, phù hợp cho mọi dịp. Một món trang sức cơ bản nhưng không thể thiếu trong bộ sưu tập của bạn.",
        sold: 480
    },
    {
        id: 16,
        name: "Lắc tay Bạc PNJSilver",
        price: 1255000,
        imgMain: "./assets/img/ItemTrangChu(1)/spnb8.png",
        imgHover: "./assets/img/ItemTrangChu(1)/spnb8-2.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Bac", "LacTay"],
        detail: "Lắc tay bạc từ dòng sản phẩm PNJSilver trẻ trung, năng động. Thiết kế basic dễ dàng phối đồ, tạo điểm nhấn nhẹ nhàng cho cổ tay.",
        sold: 780
    },
    {
        id: 17,
        name: "Vòng tay Vàng hồng 58,5% (14K) Đính đá Sapphire",
        price: 43785000,
        imgMain: "./assets/img/ItemTrungBaySP/id17.png",
        imgHover: "./assets/img/ItemTrungBaySP/id17-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Sapphire", "VangHong", "LacTay"],
        detail: "Sự kết hợp hoàn hảo giữa sắc vàng hồng thời thượng và đá Sapphire xanh quý phái. Chiếc vòng tay này sẽ làm nổi bật vẻ đẹp sang trọng của bạn.",
        sold: 95
    },
    {
        id: 18,
        name: "Nhẫn Vàng trắng 58,5% (14K) Đính đá Sapphire ",
        price: 40623000,
        imgMain: "./assets/img/ItemTrungBaySP/id18.png",
        imgHover: "./assets/img/ItemTrungBaySP/id18-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Sapphire", "VangTrang", "NhanDon"],
        detail: "Viên đá Sapphire chủ đạo được tôn lên bởi thiết kế nhẫn vàng trắng 14K tinh xảo. Một biểu tượng của sự thông thái và lòng chung thủy.",
        sold: 125
    },
    {
        id: 19,
        name: "Lắc tay bạc nữ đính đá Ruby hoa mặt trời Mia",
        price: 4033000,
        imgMain: "./assets/img/ItemTrungBaySP/id19.jpg",
        imgHover: "./assets/img/ItemTrungBaySP/id19-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Ruby", "Bac", "LacTay"],
        detail: "Lắc tay bạc với điểm nhấn là viên đá Ruby đỏ rực rỡ hình hoa mặt trời. Thiết kế mang lại năng lượng tích cực và vẻ đẹp đầy sức sống.",
        sold: 390
    },
    {
        id: 20,
        name: "Bông tai Vàng 75% (18K) đính đá Ruby ",
        price: 11884000,
        imgMain: "./assets/img/ItemTrungBaySP/id20.png",
        imgHover: "./assets/img/ItemTrungBaySP/id20-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Ruby", "Vang18K", "BongTai"],
        detail: "Đôi bông tai vàng 18K nổi bật với sắc đỏ quyến rũ của đá Ruby. Món trang sức thể hiện quyền lực và niềm đam mê.",
        sold: 140
    },
    {
        id: 21,
        name: "Nhẫn Vàng 75% (18K) Đính đá Emerald",
        price: 90410000,
        imgMain: "./assets/img/ItemTrungBaySP/id21.png",
        imgHover: "./assets/img/ItemTrungBaySP/id21-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Emerald", "Vang18K", "NhanDon"],
        detail: "Viên đá Emerald xanh lục bảo quý hiếm là tâm điểm của chiếc nhẫn vàng 18K. Một món trang sức đẳng cấp, biểu tượng của sự thịnh vượng và tái sinh.",
        sold: 65
    },
    {
        id: 22,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá Emerald",
        price: 149916000,
        imgMain: "./assets/img/ItemTrungBaySP/id22.png",
        imgHover: "./assets/img/ItemTrungBaySP/id22-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Emerald", "VangTrang", "NhanDon"],
        detail: "Vẻ đẹp hoàng gia toát lên từ chiếc nhẫn vàng trắng 14K đính đá Emerald. Thiết kế tinh xảo, xứng đáng là một vật phẩm gia truyền.",
        sold: 45
    },
    {
        id: 23,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá Emerald Disney",
        price: 276699000,
        imgMain: "./assets/img/ItemTrungBaySP/id23.png",
        imgHover: "./assets/img/ItemTrungBaySP/id23-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Emerald", "VangTrang", "NhanDon"],
        detail: "Lấy cảm hứng từ những câu chuyện cổ tích Disney, chiếc nhẫn Emerald này mang vẻ đẹp huyền ảo và mộng mơ. Một thiết kế độc đáo cho những ai yêu thích sự khác biệt.",
        sold: 30
    },
    {
        id: 24,
        name: "Bông tai Vàng trắng 58,5% (14K) Đính đá Topaz",
        price: 7992000,
        imgMain: "./assets/img/ItemTrungBaySP/id24.png",
        imgHover: "./assets/img/ItemTrungBaySP/id24-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Topaz", "VangTrang", "BongTai"],
        detail: "Đôi bông tai vàng trắng 14K đính đá Topaz xanh biển trong veo, mang lại cảm giác mát lành và thanh khiết. Phụ kiện hoàn hảo cho mùa hè.",
        sold: 280
    },
    {
        id: 25,
        name: "Nhẫn Vàng trắng 58,5% (14K) đính đá Topaz ",
        price: 11489000,
        imgMain: "./assets/img/ItemTrungBaySP/id25.png",
        imgHover: "./assets/img/ItemTrungBaySP/id25-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Topaz", "VangTrang", "NhanDon"],
        detail: "Chiếc nhẫn vàng trắng 14K với viên đá Topaz cắt giác tinh xảo, phản chiếu ánh sáng rực rỡ. Biểu tượng của niềm vui và sự lạc quan.",
        sold: 250
    },
    {
        id: 26,
        name: "Cài áo Vàng trắng 58,5% (14K) Đính đá Topaz Masterpiece",
        price: 70480000,
        imgMain: "./assets/img/ItemTrungBaySP/id26.png",
        imgHover: "./assets/img/ItemTrungBaySP/id26-hover.jpg",
        category: ["DaQuy", "VangBac"],
        subCategory: ["Topaz", "VangTrang"],
        detail: "Một tác phẩm nghệ thuật thực sự, chiếc cài áo Masterpiece được chế tác tỉ mỉ từ vàng trắng 14K và đá Topaz. Phụ kiện đẳng cấp cho những sự kiện trang trọng.",
        sold: 25
    },
    {
        id: 27,
        name: "Nhẫn Vàng trắng 58,5% (14K) Đính đá Topaz",
        price: 7865000,
        imgMain: "./assets/img/ItemTrungBaySP/id27.png",
        imgHover: "./assets/img/ItemTrungBaySP/id27-hover.jpg",
        category: ["DaQuy", "VangBac", "TrangSuc"],
        subCategory: ["Topaz", "VangTrang", "NhanDon"],
        detail: "Thiết kế nhẫn thanh lịch với viên đá Topaz làm điểm nhấn. Món trang sức mang lại vẻ đẹp nhẹ nhàng, tinh tế cho người đeo.",
        sold: 300
    },
    {
        id: 28,
        name: "Cặp nhẫn cưới Bạch kim đính Kim Cương PNJ True Love",
        price: 40185574,
        imgMain: "./assets/img/ItemTrungBaySP/id28.png",
        imgHover: "./assets/img/ItemTrungBaySP/id28-hover.jpg",
        category: "TrangSuc",
        subCategory: "NhanCuoi",
        detail: "Ghi dấu tình yêu vĩnh cửu với cặp nhẫn cưới True Love từ bạch kim và kim cương. Thiết kế đồng điệu, biểu tượng cho sự gắn kết không rời.",
        sold: 150
    },
    {
        id: 29,
        name: "Tượng Thiên Mã Đăng Hoa Vàng 99,9% (24K)",
        price: 199000000,
        imgMain: "./assets/img/ItemTrungBaySP/id29.png",
        imgHover: "./assets/img/ItemTrungBaySP/id29-hover.jpg",
        category: "VangBac",
        subCategory: "Vang24K",
        detail: "Tác phẩm điêu khắc tinh xảo từ vàng 24K nguyên chất, hình tượng Thiên Mã mang ý nghĩa thành công và thăng tiến. Vật phẩm phong thủy cao cấp cho gia chủ.",
        sold: 15
    },
    {
        id: 30,
        name: "Vàng mini Thỏi Vàng 0.5 chỉ 99,99% PNJ Tiểu Lộc Đại Phát",
        price: null,
        imgMain: "./assets/img/ItemTrungBaySP/id30.png",
        imgHover: "./assets/img/ItemTrungBaySP/id30-hover.jpg",
        category: "VangBac",
        subCategory: "Vang24K",
        detail: "Thỏi vàng mini 0.5 chỉ từ PNJ, món quà lộc may mắn đầu năm. Sản phẩm vàng 24K đảm bảo giá trị tích trữ và ý nghĩa phong thủy.",
        sold: 1500
    },
    {
        id: 31,
        name: "Bộ Tượng Long Phụng Giao Hòa Vàng 99,9% (24K) ~ 9.9 chỉ",
        price: 239000000,
        imgMain: "./assets/img/ItemTrungBaySP/id31.png",
        imgHover: "./assets/img/ItemTrungBaySP/id31-hover.jpg",
        category: "VangBac",
        subCategory: "Vang24K",
        detail: "Bộ tượng Long Phụng bằng vàng 24K, biểu tượng của hôn nhân viên mãn và hạnh phúc. Một món quà cưới sang trọng và đầy ý nghĩa.",
        sold: 12
    },
    {
        id: 32,
        name: "Bông tai cưới Vàng 99,9% (24K) Trầu Cau",
        price: 35276000,
        imgMain: "./assets/img/ItemTrungBaySP/id32.png",
        imgHover: "./assets/img/ItemTrungBaySP/id32-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang24K", "BongTai"],
        detail: "Đôi bông tai cưới bằng vàng 24K lấy cảm hứng từ hình ảnh trầu cau truyền thống. Nét đẹp văn hóa được thể hiện qua trang sức cưới quý giá.",
        sold: 180
    },
    {
        id: 33,
        name: "Nhẫn cưới Vàng 99,9% (24K)",
        price: 17439000,
        imgMain: "./assets/img/ItemTrungBaySP/ìd33.png",
        imgHover: "./assets/img/ItemTrungBaySP/id33-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["Vang24K", "NhanCuoi"],
        detail: "Nhẫn cưới chế tác từ vàng 24K nguyên chất, biểu tượng cho tình yêu son sắt và bền vững. Một lựa chọn truyền thống và giá trị.",
        sold: 220
    },
    {
        id: 34,
        name: "Nhẫn Vàng hồng 58,5% (14K) đính đá Sapphire Disney Sleeping Beauty",
        price: 23852000,
        imgMain: "./assets/img/ItemTrungBaySP/id34.png",
        imgHover: "./assets/img/ItemTrungBaySP/id34-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangHong", "NhanDon"],
        detail: "Chiếc nhẫn vàng hồng lãng mạn từ bộ sưu tập Disney, đính đá Sapphire lấp lánh như trong truyện cổ tích Người đẹp ngủ trong rừng.",
        sold: 160
    },
    {
        id: 35,
        name: "Cặp nhẫn cưới Kim cương Vàng hồng 75% (18K) Tình Hồng",
        price: 34816000,
        imgMain: "./assets/img/ItemTrungBaySP/id35.png",
        imgHover: "./assets/img/ItemTrungBaySP/id35-hover.jpg",
        category: ["VangBac", "TrangSuc"],
        subCategory: ["VangHong", "NhanCuoi"],
        detail: "Sắc vàng hồng ấm áp kết hợp cùng kim cương lấp lánh tạo nên cặp nhẫn cưới Tình Hồng đầy ngọt ngào và hiện đại.",
        sold: 130
    },
    {
        id: 36,
        name: "Vòng tay charm Vàng 24K Tỳ Hưu Thiên Lộc dây màu đỏ",
        price: 800000,
        imgMain: "./assets/img/ItemTrungBaySP/id36.png",
        imgHover: "./assets/img/ItemTrungBaySP/id36-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["Vang24K", "VongTayTyHuu"],
        detail: "Vòng tay dây đỏ may mắn kết hợp charm Tỳ Hưu bằng vàng 24K, mang lại tài lộc và bình an cho người đeo. Món trang sức phong thủy được nhiều người ưa chuộng.",
        sold: 950
    },
    {
        id: 37,
        name: "Lắc tay bạc nam dây bện dù sáp tỳ hưu may mắn Henry",
        price: 2896000,
        imgMain: "./assets/img/ItemTrungBaySP/id37.png",
        imgHover: "./assets/img/ItemTrungBaySP/id37-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["Bac", "VongTayTyHuu"],
        detail: "Thiết kế nam tính với dây dù bện và charm Tỳ Hưu bạc. Chiếc lắc tay Henry không chỉ là phụ kiện thời trang mà còn là vật phẩm phong thủy may mắn.",
        sold: 430
    },
    {
        id: 38,
        name: "Lắc tay bạc đính đá Trịnh Collection",
        price: 1575000,
        imgMain: "./assets/img/ItemTrungBaySP/id38.png",
        imgHover: "./assets/img/ItemTrungBaySP/id38-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["Bac", "VongTayTyHuu"],
        detail: "Một thiết kế độc đáo từ Trịnh Collection, lắc tay bạc đính đá mang phong cách nghệ thuật và cá tính. Phù hợp với những ai yêu thích sự khác biệt.",
        sold: 350
    },
    {
        id: 39,
        name: "Mặt dây chuyền Vàng 75% (18K) đính đá CZ",
        price: 11764000,
        imgMain: "./assets/img/ItemTrungBaySP/id39.png",
        imgHover: "./assets/img/ItemTrungBaySP/id39-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["Vang18K", "MatDayPhat"],
        detail: "Mặt dây chuyền vàng 18K hình Phật Bà Quan Âm đính đá CZ, mang lại cảm giác bình an và được che chở. Món trang sức tâm linh ý nghĩa.",
        sold: 280
    },
    {
        id: 40,
        name: "Mặt dây chuyền Vàng trắng Ý 75% (18K) đính đá CZ hình Phật",
        price: 11892000,
        imgMain: "./assets/img/ItemTrungBaySP/id40.png",
        imgHover: "./assets/img/ItemTrungBaySP/id40-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["VangTrang","Vang18K", "MatDayPhat"],
        detail: "Chế tác tinh xảo từ vàng trắng Ý 18K, mặt dây chuyền hình Phật Di Lặc mang lại niềm vui và sự an lạc. Một món quà ý nghĩa cho người thân.",
        sold: 260
    },
    {
        id: 41,
        name: "Mặt dây chuyền Vàng trắng Ý 75% (18K) đính đá CZ hình Phật ",
        price: 20176000,
        imgMain: "./assets/img/ItemTrungBaySP/id41.png",
        imgHover: "./assets/img/ItemTrungBaySP/id41-hover.jpg",
        category: ["VangBac", "PhongThuy"],
        subCategory: ["VangTrang","Vang18K", "MatDayPhat"],
        detail: "Mặt dây chuyền Phật A Di Đà bằng vàng trắng Ý 18K, một vật phẩm tâm linh giúp tâm hồn thanh tịnh và hướng thiện.",
        sold: 190
    },
    {
        id: 42,
        name: "Vòng Tay Swarovski Pha lê Gema Bracelet",
        price: 5.500000,
        imgMain: "./assets/img/ItemTrungBaySP/id42.png",
        imgHover: "./assets/img/ItemTrungBaySP/id42-hover.jpg",
        category: ["TrangSuc", "PhongThuy"],
        subCategory: ["LacTay", "DaTheoMenh"],
        detail: "Vòng tay Gema từ Swarovski nổi bật với những viên pha lê đa sắc, được cắt giác tinh xảo. Một phụ kiện thời trang cao cấp, mang lại vẻ đẹp rực rỡ và sang trọng.",
        sold: 320
    },
    {
        id: 43,
        name: "Lắc tay Bạc đính đá STYLE Collection",
        price: 1195000,
        imgMain: "./assets/img/ItemTrungBaySP/id43.png",
        imgHover: "./assets/img/ItemTrungBaySP/id43-hover.jpg",
        category: ["TrangSuc", "PhongThuy"],
        subCategory: ["LacTay", "DaTheoMenh"],
        detail: "Lắc tay bạc từ STYLE Collection với thiết kế hiện đại, đính đá theo mệnh, mang lại năng lượng tích cực và may mắn. Phụ kiện thời trang và phong thủy 2 trong 1.",
        sold: 680
    },
    {
        id: 44,
        name: "Nhẫn Bạc đính đá Ruby",
        price: 545000,
        imgMain: "./assets/img/ItemTrungBaySP/id44.png",
        imgHover: "./assets/img/ItemTrungBaySP/id44-hover.jpg",
        category: ["DaQuy","TrangSuc" ,"PhongThuy"],
        subCategory: ["Ruby", "NhanDon","DaTheoMenh"],
        detail: "Chiếc nhẫn bạc đơn giản nhưng nổi bật với viên đá Ruby đỏ hợp mệnh Hỏa và Thổ. Món trang sức phong thủy giúp tăng cường năng lượng và may mắn.",
        sold: 750
    },
    {
        id: 45,
        name: "Cây Đào Đá Thạch Anh Hồng 3A 68 Quả ",
        price: 49500000,
        imgMain: "./assets/img/ItemTrungBaySP/id45.png",
        imgHover: "./assets/img/ItemTrungBaySP/id45-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["DaTheoMenh"],
        detail: "Cây đào phong thủy chế tác từ đá thạch anh hồng tự nhiên, biểu tượng cho tình duyên và các mối quan hệ tốt đẹp. Vật phẩm trang trí mang lại năng lượng tích cực cho không gian sống.",
        sold: 40
    },
    {
        id: 46,
        name: "Hạt Charm Bạc đính đá",
        price: 695000,
        imgMain: "./assets/img/ItemTrungBaySP/id46.png",
        imgHover: "./assets/img/ItemTrungBaySP/id46-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["DaTheoMenh"],
        detail: "Hạt charm bạc đính đá lấp lánh dễ dàng kết hợp cùng các vòng tay sẵn có. Thiết kế nhỏ xinh, tinh tế giúp bạn thỏa sức sáng tạo nên bộ trang sức mang đậm dấu ấn cá nhân.",
        sold: 840
    },
    {
        id: 47,
        name: "Hạt Charm Bạc đính đá STYLE Collection",
        price: 495000,
        imgMain: "./assets/img/ItemTrungBaySP/id47.png",
        imgHover: "./assets/img/ItemTrungBaySP/id47-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["DaTheoMenh"],
        detail: "Charm bạc chạm khắc hoa văn tinh xảo từ BST STYLE Collection hiện đại. Hạt charm mang đến vẻ đẹp cá tính, giúp lưu giữ những khoảnh khắc đáng nhớ trên chiếc vòng tay.",
        sold: 1120
    },
    {
        id: 48,
        name: "Hạt Charm Túi vàng",
        price: 445000,
        imgMain: "./assets/img/ItemTrungBaySP/id48.png",
        imgHover: "./assets/img/ItemTrungBaySP/id48-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["CharmVang"],
        detail: "Charm bạc mạ vàng hình Túi Tiền biểu tượng cho tài lộc dồi dào, sung túc. Chế tác sinh động, tỉ mỉ mang ý nghĩa phong thủy tốt lành cho một năm làm ăn hồng phát.",
        sold: 1543
    },
    {
        id: 49,
        name: "Hạt Charm Bình trà vàng",
        price: 14160000,
        imgMain: "./assets/img/ItemTrungBaySP/id49.png",
        imgHover: "./assets/img/ItemTrungBaySP/id49-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["CharmVang"],
        detail: "Hạt Charm đúc đặc bằng Vàng nguyên khối hình bình trà mang ý nghĩa gia đạo an vui, êm ấm. Sản phẩm trang sức đẳng cấp mang giá trị sưu tầm cao cho dân chơi charm thứ thiệt.",
        sold: 95
    },
    {
        id: 50,
        name: "Hạt Charm vàng Nón lá",
        price: 755000,
        imgMain: "./assets/img/ItemTrungBaySP/id50.png",
        imgHover: "./assets/img/ItemTrungBaySP/id50-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["CharmVang"],
        detail: "Tôn vinh văn hóa Việt với charm hình nón lá mạ vàng độc đáo, tỉ mỉ. Món trang sức dễ thương, tinh xảo này là lựa chọn ngập tràn niềm tự hào và ý nghĩa sâu sắc.",
        sold: 810
    },
    {
        id: 51,
        name: "Charm Pandora Moments Mạ Vàng Hình Chú Ong",
        price: 3790000,
        imgMain: "./assets/img/ItemTrungBaySP/id51.png",
        imgHover: "./assets/img/ItemTrungBaySP/id51-hover.jpg",
        category: ["PhongThuy"],
        subCategory: ["CharmVang"],
        detail: "Charm Pandora chính hãng mạ vàng hình chú ong chăm chỉ, biểu trưng cho sự ngọt ngào. Lựa chọn tuyệt vời để bổ sung vào bộ sưu tập Pandora rực rỡ và thời thượng của bạn.",
        sold: 412
    },
    {
        id: 52,
        name: "Hộp Đựng Trang Sức Pandora",
        price: 1290000,
        imgMain: "./assets/img/ItemTrungBaySP/id52.png",
        imgHover: "./assets/img/ItemTrungBaySP/id52-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["HopTrangSuc"],
        detail: "Hộp đựng bọc da lót nhung cao cấp bảo vệ tuyệt đối các hạt charm và vòng tay Pandora. Thiết kế trang nhã, cứng cáp xứng tầm thương hiệu quốc tế, điểm tô góc trang điểm.",
        sold: 520
    },
    {
        id: 53,
        name: "Hộp trang sức hoạ tiết vẽ tay",
        price: 1920000,
        imgMain: "./assets/img/ItemTrungBaySP/id53.png",
        imgHover: "./assets/img/ItemTrungBaySP/id53-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["HopTrangSuc"],
        detail: "Chiếc hộp gỗ thủ công với những nét vẽ họa tiết nghệ thuật cổ điển, tinh xảo. Không chỉ để cất giữ trang sức an toàn mà còn là vật phẩm trang trí tinh tế cho bàn trang điểm.",
        sold: 234
    },
    {
        id: 54,
        name: "Hộp nhẫn đôi cổ điển - Crystal Engagement Proposal Gift with Velvet Lining",
        price: 2077000,
        imgMain: "./assets/img/ItemTrungBaySP/id54.png",
        imgHover: "./assets/img/ItemTrungBaySP/id54-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["HopTrangSuc"],
        detail: "Hộp pha lê trong suốt lót nhung đỏ quý phái, thiết kế cực kỳ lãng mạn. Sự lụa chọn hoàn hảo để chứa đựng kỷ vật tình yêu vĩnh cửu trong những khoảnh khắc cầu hôn thiêng liêng.",
        sold: 185
    },
    {
        id: 55,
        name: "Máy rung làm sạch trang sức bằng sóng âm Bear",
        price: 560000,
        imgMain: "./assets/img/ItemTrungBaySP/id55.png",
        imgHover: "./assets/img/ItemTrungBaySP/id55-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DungCuLamSach"],
        detail: "Máy làm sạch sâu bụi bẩn trong các kẽ hở trang sức bằng công nghệ sóng âm rung tần số cao. Giải pháp chăm sóc trang sức tại nhà vô cùng tiện lợi, nhỏ gọn và nhanh chóng.",
        sold: 1320
    },
    {
        id: 56,
        name: "Bộ Vệ Sinh Trang Sức Pandora",
        price: 590000,
        imgMain: "./assets/img/ItemTrungBaySP/id56.png",
        imgHover: "./assets/img/ItemTrungBaySP/id56-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DungCuLamSach"],
        detail: "Bộ vệ sinh chuyên dụng gồm dung dịch và cọ siêu mềm giúp trang sức Pandora luôn sáng bóng như mới. Món phụ kiện cực kỳ cần thiết để bảo quản nữ trang hoàn hảo.",
        sold: 954
    },
    {
        id: 57,
        name: "Khăn lau bạc Pandora Jewelry Polishing Cloth anti tarnish silver",
        price: 263000,
        imgMain: "./assets/img/ItemTrungBaySP/id57.png",
        imgHover: "./assets/img/ItemTrungBaySP/id57-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["KhanLauBac"],
        detail: "Khăn chuyên dụng tẩm sẵn hợp chất chống oxy hóa, đánh bay xỉn màu cho trang sức bạc hiệu quả. Giải pháp bảo quản nữ trang nhanh chóng, tiết kiệm giúp món đồ luôn sáng đẹp.",
        sold: 2150
    },
    {
        id: 58,
        name: "Khăn lau bạc TIFFANY & CO. 18X18 SILVER POLISHING CLOTH NEW IN ORIGINAL",
        price: 1576000,
        imgMain: "./assets/img/ItemTrungBaySP/id58.png",
        imgHover: "./assets/img/ItemTrungBaySP/id58-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["KhanLauBac"],
        detail: "Khăn lau cao cấp từ thương hiệu Tiffany & Co. nổi tiếng, kích thước lớn giúp làm sạch tối đa mọi bề mặt trang sức. Phụ kiện khẳng định sự chuyên nghiệp trong việc chăm sóc nữ trang.",
        sold: 132
    },
    {
        id: 59,
        name: "Khăn lau bạc Town Talk Anti-Tarnish Silver & Brilliant Gold Polishing Cloth Set - 5 x 7",
        price: 578000,
        imgMain: "./assets/img/ItemTrungBaySP/id59.png",
        imgHover: "./assets/img/ItemTrungBaySP/id59-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["KhanLauBac"],
        detail: "Set khăn chuyên dụng Town Talk dùng cho cả trang sức Vàng và Bạc, chống xỉn màu hiệu quả vượt trội. Phụ kiện nhập khẩu chất lượng cao đảm bảo độ sáng bóng bền lâu.",
        sold: 654
    },
    {
        id: 60,
        name: "Dây chuyền bạc PNJSilver",
        price: 1075000,
        imgMain: "./assets/img/ItemTrungBaySP/id60.png",
        imgHover: "./assets/img/ItemTrungBaySP/id60-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DayDeoThayThe"],
        detail: "Sợi dây bạc PNJSilver mang thiết kế cơ bản, thay thế hoàn hảo cho các mặt dây chuyền đa dạng. Sợi xích vô cùng bền chắc, bắt sáng lấp lánh và giữ được nét tinh tế.",
        sold: 815
    },
    {
        id: 61,
        name: "Dây Chuyền Pandora Moments Mạ Vàng Hồng 14K Dạng Xích",
        price: 6990000,
        imgMain: "./assets/img/ItemTrungBaySP/id61.png",
        imgHover: "./assets/img/ItemTrungBaySP/id61-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DayDeoThayThe"],
        detail: "Dây xích Pandora mạ vàng hồng 14K chắc chắn, có thể tùy biến gắn thêm charm phong cách riêng. Sự đầu tư hoàn hảo cho nét sang trọng, kiêu kỳ độc bản của mỗi cô gái.",
        sold: 201
    },
    {
        id: 62,
        name: "Dây Chuyền Pandora Moments Dạng Xích Nút Thắt Dài",
        price: 2390000,
        imgMain: "./assets/img/ItemTrungBaySP/id62.png",
        imgHover: "./assets/img/ItemTrungBaySP/id62-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DayDeoThayThe"],
        detail: "Thiết kế xích Pandora nút thắt dài lạ mắt, dễ dàng mix-match hoàn hảo với áo len, váy xẻ sâu. Sợi dây chuyền cá tính, thời thượng luôn được phái đẹp yêu thích cuồng nhiệt.",
        sold: 462
    },
    {
        id: 63,
        name: "Dây Chuyền Pandora Mạ Vàng 14K Mắt Xích Dài Chữ Nhật",
        price: 4790000,
        imgMain: "./assets/img/ItemTrungBaySP/id63.png",
        imgHover: "./assets/img/ItemTrungBaySP/id63-hover.jpg",
        category: ["PhuKien"],
        subCategory: ["DayDeoThayThe"],
        detail: "Dạng mắt xích chữ nhật sành điệu, trẻ trung mạ vàng 14K từ thương hiệu Pandora đình đám. Sợi dây tạo nên điểm nhấn thời thượng khó rời mắt cho những outfit năng động.",
        sold: 188
    },
];


const categoryNames = { 'All': 'Tất cả sản phẩm', 'KimCuong': 'Kim cương', 'VangTrang': 'Vàng trắng', 'Vang18K': 'Vàng Ý 18K', 'Vang24K': 'Vàng 24K', 'VangHong': 'Vàng hồng', 'Sapphire': 'Sapphire', 'Ruby': 'Ruby', 'Emerald': 'Emerald', 'Topaz': 'Topaz', 'Bac': 'Bạc S925', 'NhanDon': 'Nhẫn đơn', 'DayChuyen': 'Dây chuyền', 'BongTai': 'Bông tai', 'LacTay': 'Lắc tay', 'VongTay': 'Vòng tay', 'NhanCuoi': 'Nhẫn cưới', 'VongTayTyHuu': 'Vòng tay tỳ hưu', 'MatDayPhat': 'Mặt dây Phật', 'DaTheoMenh': 'Đá theo mệnh', 'CharmVang': 'Charm vàng', 'HopTrangSuc': 'Hộp trang sức', 'DungCuLamSach': 'Dụng cụ làm sạch', 'KhanLauBac': 'Khăn lau bạc', 'DayDeoThayThe': 'Dây đeo thay thế' };

let currentDisplayList = [];

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
    applySortAndRender();
    updateBreadcrumb(categoryNames[catKey] || 'Tất cả sản phẩm');
}

// --- HÀM XỬ LÝ SẮP XẾP ---
function applySortAndRender() {
    const sortSelect = document.getElementById('price-sort-select');
    const sortValue = sortSelect ? sortSelect.value : 'default';
    
    let sorted = [...currentDisplayList];
    if (sortValue === 'asc') {
        sorted.sort((a, b) => (a.price || Infinity) - (b.price || Infinity));
    } else if (sortValue === 'desc') {
        sorted.sort((a, b) => (b.price || 0) - (a.price || 0));
    }
    
    renderProducts(sorted);
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
    
    const lowerCaseQuery = query.toLowerCase();
    let filtered = gemProducts.filter(p => {
        const inName = p.name.toLowerCase().includes(lowerCaseQuery);
        const inDetail = p.detail && p.detail.toLowerCase().includes(lowerCaseQuery);
        return inName || inDetail;
    });
    
    if (mainCategory) {
        filtered = filtered.filter(p => p.category && p.category.includes(mainCategory));
    }
    
    currentDisplayList = filtered;
    applySortAndRender();
    updateBreadcrumb(`Kết quả cho: "${query}"`);
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
            updateBreadcrumb('Tất cả sản phẩm');
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