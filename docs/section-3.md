# Connect MongoDB to NodeJS using Mongoose

# và 7 điều cần triển khai trong hệ thống

# creating dbs

# 1. Nhược điểm của cách Connect cũ

# 2. Cách Connect MỚI - khuyên dùng

- Thiết kế theo design pattern Singleton
- getInstance

# 3. Kiểm tra hệ thống có bao nhiêu Connections ?

- file utils: viết những functions (chuyển đổi kí tự hoa -> thường...) và helpers (uỷ quyền giúp cta làm việc nhiều hơn -> tần suất sử dụng nhiều hơn ) khác nhau

# 4. Thông báo khi server quá tải Connect

- khái niệm OS & Process => YT: làm sao để tăng tốc request trong nodejs
- YT: docker & k8s

# 5. Có nên disConnect() liên tục hay không ?

-> ko can

# 6. PoolSize là gì ? Vì sao lại quan trọng ?

# 7. Nếu vượt quá kết nối PoolSize ?
