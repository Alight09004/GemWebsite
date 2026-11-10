# JADE Chamber (GemWebsite)

Website trang sức tĩnh được xây dựng trong học phần **Công nghệ lập trình web** bằng HTML, CSS, JavaScript, Bootstrap, jQuery và Slick Carousel. Nhóm dùng VS Code, Git và GitHub để phát triển và chia sẻ mã.

## Chạy và kiểm tra

Mở `index.html` trên trình duyệt để xem bản demo. Với Node.js 22 trở lên, có thể chạy:

```sh
node scripts/check-site.mjs  # Kiểm tra cú pháp JS và đường dẫn HTML/CSS/JS cục bộ
node --test                   # Kiểm thử các điều kiện xác nhận đặt hàng trong checkout.html
node scripts/build-site.mjs   # Đóng gói HTML và assets vào dist/
```

Các lệnh không cần cài thêm thư viện npm. `dist/` là tệp sinh ra để phát hành, không đưa vào Git.

## Quy trình mới

Xem [CONTRIBUTING.md](CONTRIBUTING.md) để biết cách tạo Issue, nhánh tính năng, pull request và rà soát mã. Workflow [ci-pages.yml](.github/workflows/ci-pages.yml) chạy `check`, `test`, `build` khi có pull request vào `main`. Khi có push lên `main`, workflow còn tải gói website lên GitHub Pages.

Để bật phát hành lần đầu, người quản trị repository cần mở **Settings → Pages → Build and deployment → Source → GitHub Actions**. Cấu hình trong repository chưa chứng minh website đã được xuất bản; chỉ xem là triển khai thành công sau khi workflow trên GitHub chạy đạt và có URL Pages. Xem [hướng dẫn GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Minh chứng cho bài tập Cloud Computing

| Câu | Minh chứng trong dự án |
| --- | --- |
| 1. Quy trình và công cụ | Các trang HTML, `assets/css/`, `assets/js/`; quy trình từ nay trong `CONTRIBUTING.md`. |
| 2. Quản lý mã nguồn | Lịch sử commit và người đóng góp trên GitHub; mẫu pull request trong `.github/`. |
| 3. Kiểm thử | `tests/checkout.test.mjs`, lệnh `node --test`, bước kiểm tra trong workflow. |
| 4. Đóng gói, triển khai | `scripts/build-site.mjs`, thư mục `dist/` sinh ra, job `deploy` trong workflow; ảnh chạy thật chỉ có sau khi push/bật Pages. |
| 5. Cải tiến | Quy trình Issue → nhánh → pull request → kiểm tra → phát hành trong `CONTRIBUTING.md`. |

Những tài liệu và workflow mới này mô tả **cách làm từ thời điểm bổ sung**, không phải bằng chứng rằng CI/CD đã tồn tại trong các commit cũ.

## Lưu ý về bản demo

Giỏ hàng và đăng nhập lưu dữ liệu ở `localStorage`; đặt hàng chưa gửi tới máy chủ. Đây là mô phỏng giao diện, chưa phải hệ thống bán hàng dùng được với dữ liệu thật.
