// Xử lý click link Sản phẩm - vừa dropdown vừa navigate
let sanphamDropdownClicked = false;

document.addEventListener('DOMContentLoaded', function() {
    const sanphamLink = document.querySelector('a[href="./TrungBaySP.html"][data-bs-toggle="dropdown"]');
    
    if (sanphamLink) {
        sanphamLink.addEventListener('click', function(e) {
            const dropdown = this.nextElementSibling;
            
            // Nếu dropdown đã mở, cho navigate
            if (dropdown && dropdown.classList.contains('show')) {
                window.location.href = './TrungBaySP.html';
            } else {
                // Dropdown chưa mở, ngăn navigate để cho dropdown mở
                e.preventDefault();
            }
        });
    }
});

// Khởi tạo dữ liệu mẫu
if (!localStorage.getItem('gems')) {
    const defaultData = [
        { id: 1712345678901, title: "Nhẫn Kim Cương Kim Bảo", desc: "Vàng 18K, kim cương tự nhiên 5.4ly", deadline: "2026-05-20", priority: "High", status: "Pending" },
        { id: 1712345678902, title: "Dây chuyền Ruby", desc: "Đá Ruby đỏ huyết bồ câu, thiết kế tinh xảo", deadline: "2026-06-15", priority: "Medium", status: "Done" }
    ];
    localStorage.setItem('gems', JSON.stringify(defaultData));
}

function getGems() {
    return JSON.parse(localStorage.getItem('gems')) || [];
}

function saveGems(data) {
    localStorage.setItem('gems', JSON.stringify(data));
}

// Hàm Export JSON (Bonus điểm)
function exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(getGems()));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "gem_data.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}