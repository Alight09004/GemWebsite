# Cách nhóm cộng tác với JADE Chamber

Tài liệu này áp dụng cho những thay đổi **từ bây giờ**. Lịch sử commit cũ vẫn giữ nguyên.

1. Ghi đầu việc hoặc lỗi thành GitHub Issue, nêu trang bị ảnh hưởng và cách kiểm tra hoàn thành.
2. Tạo nhánh từ `main`, ví dụ `feature/product-filter` hoặc `fix/checkout-email`.
3. Sửa phần được giao, chạy `node scripts/check-site.mjs` và `node --test`, sau đó xem lại trên trình duyệt.
4. Commit với nội dung cụ thể, ví dụ `fix: validate checkout phone number`.
5. Mở pull request vào `main`; một thành viên khác xem mã và thử chức năng liên quan.
6. Chỉ gộp khi kiểm tra tự động đạt. Workflow sẽ phát hành bản demo sau khi mã vào `main` và GitHub Pages đã được bật.

## Phân chia công việc

Mỗi Issue nên có một người phụ trách và điều kiện hoàn thành ngắn gọn. Khi sửa chung một tệp, các thành viên báo trước trong Issue hoặc pull request để giảm xung đột.

## Giới hạn của bản demo

Đăng nhập và giỏ hàng hiện dùng `localStorage`; bước đặt hàng chỉ mô phỏng. Không dùng dữ liệu khách hàng thật hoặc thông tin thanh toán thật trong bản demo.
