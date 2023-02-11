- Các chức năng cần có của website:

* Đăng kí/Đăng nhập
* Nhắn tin, đăng bài
* Nhận thông báo, nhận tin nhắn
* Bình luận, tích hợp thời gian thực,
* Trang cá nhân (Cơ bản)
* Tùy chỉnh thông tin trên trang chính

- Cách thiết kế bài đăng phù hợp với từng người dùng:

* Dùng Select In để load bài đăng của nhân vật được người dùng theo dõi
* tạo một bảng chứa thông tin người dùng yêu thích (follow, post_tag)
* select bảng đó để lấy điều kiện cho select hiển thị thông tin

- Cách viết Follow và like:

* Tạo một function chạy mỗi khi reload trang
* Tạo 1 function kiểm tra và đếm số follow (trả về giao diện)
* tạo một function thêm khi chưa có thông tin trong bảng (follow) và xóa khi đã có thông tin (unfollow)
* Sử lý thay đổi giao diện và tự động tăng số khi ấn mà không cần load lại bằng Jquery (Ajax)
