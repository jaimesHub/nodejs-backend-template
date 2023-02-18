# Section 2: Node.js Backend Architecture - Những folders và packages cần thiết khi khởi tạo Project!

# init project: npm init -y

# touch server.js: khởi động và khai báo server

# src

    # models
    # services
    # controllers
    # utils: chứa những function / class chúng ta thường hay sử dụng
    # configs (# .env file)
    # app.js

# install the newest expressjs: npm i express --save

# package-lock.json: tracking những file đã npm i

# add .gitignore file

# node --watch server.js

# curl

# khai báo các packages cần thiết

    # morgan: in ra các log khi người dùng chạy 1 request (5 chế độ)
        # dev
        # combined
        # common
        # short
        # tiny
        # ===> curl http://localhost:3055
    # helmet
        # curl http://localhost:3055 --include => xem những header của hệ thống ở trong file curl => video tipsjs blog
    # compression

# explain about --save-dev and --save

    # --save-dev để install vào dev dependencies. Chỉ sử dụng cho môi trường development. Khi build app ra thì sẽ không install vào. Nếu bạn để --save hết thì sẽ nặng folder build khi ở production. Ảnh hưởng đến đến hiệu suất và đặc biệt là ảnh hưởng đến cost.

# pushing code to github: https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github
