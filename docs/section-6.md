# Section 6: Custom Dynamic Middleware for ApiKey and Permissions

# 1. Creating apikey.model.js

- apikey: có nhiệm vụ lưu trữ token theo thời gian, để admin nắm rõ key

# 2. Creating checkAuth.js in auth folder

- function apiKey: check key của user có hợp lệ với key của server trong DB hay ko ?
- function permission (using closure): check rule / role

# 3. Creating apikey.service.js
