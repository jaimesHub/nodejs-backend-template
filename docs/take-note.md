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

    # khi npm i "package-name" --save thì dành cho môi trường product
    Nghĩa là khi clone về thì npm i là install những cái đó (nằm trong package.json)
    Ví dụ như sau
    npm i express --save

    # Còn --save-dev thì ở môi trường test, dev...
    Khi viết xong api thì mình phải viết unitest
    Cho nên phải install mocha
    npm i mocha --save-dev
    Lên product thì không cần mocha nữa, vì đã lên rồi thì test làm gì nữa

# pushing code to github: https://docs.github.com/en/get-started/importing-your-projects-to-github/importing-source-code-to-github/adding-locally-hosted-code-to-github

# Writing message commit when pushing code to git/github/gitlab

    Dưới đây là một số từ khóa phổ biến khi làm việc với các công ty:
    example:
        FEAT : Sử dụng từ khóa này để cho biết rằng bạn đang làm việc trên một tính năng mới.
        Thì commit -m ""FEAT: Add new login functionality.""
        keyword sẽ là: FEAT
    example fix bugs:
        FIX: Sử dụng từ khóa này để cho biết rằng bạn đang tiến hành khắc phục sự cố hoặc vấn đề cụ thể.
        "FIX: Fix bug causing crashes on certain devices."
    example refactoring code:
        REFACTOR : Sử dụng từ khóa này để cho biết rằng bạn đang thực hiện các thay đổi đối với mã, cải thiện cấu trúc hoặc tổ chức của mã nhưng không thêm tính năng mới hoặc sửa lỗi.
        Thì như sau: "REFACTOR: Refactor the code to improve readability."

    More Reference to: http://karma-runner.github.io/1.0/dev/git-commit-msg.html
