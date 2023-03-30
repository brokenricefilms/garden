# Làm sao lập trình một blog để chém gió

Hello lại là chụy bảy đây,

Hôm nay tui sẽ chia sẽ quá trình làm sao tui xây dựng ra một trang blog để chém gió.

## Đính chính một chút về project này

Cảnh báo đây không phải là cách đơn giản nhất, hiệu quả nhất.

Các sư huynh sư tỉ có thể tạo một tài khoảng trên một cộng đồng viết lách nào đó cho lập trình viên giống như dev.to, medium.com,... Nhanh ngọn, hiệu quả,..

Còn cách tui làm sau đây, vì tui thích dọc quá, nghịch nhợm này nọ nên mới làm nha.

Trong bài viết này tui sẽ không bàn sâu quá vào technical, tui chỉ nói quá trình thui nha.

Okay, let's go!

**Một số mục tiêu bang đầu**

1. Kinh phí 0 đồng. =>Do tui nghèo nên không thể duy trì kinh phí như:
   1. Tên miền: cũng có vài cái tên miền miễn phí cho sinh viên như trong gói hỗ trợ student developer pack của github, như thời hạn có một năm, mấy năm sao không biết giá cả duy trì như thế nào :D
   2. Web hosting trên clound giá cả cũng vài chục đô một năm :D, nên vĩnh biệt với nó luôn.
2. Dễ bảo trì. Tui nói thích nghịch phá nhưng, maintain cái blog quài cũng mệt.
3. Giao diện nó sạch sẽ, dễ đọc.
4. SEO ổn áp. Viết blog mà hổng ai xem cũng hơi kì :D

## Chọn công nghệ gì?

Với những mục tiêu như trên thì tui sẽ chọn combo github page + jekkyll

Github page giải quyết cho ta phần host với tên miền. Nếu tui gây thù với anh hacker nào, mà ảnh tấn công ddos thì bên github cũng bảo kê tui vì web của tui host bên github.

Còn jekkyll thì dễ sài, tui quen viết markdown nên cũng okay cộng với có nhiều theme opensource đẹp, clean, SEO okay.

## Quá trình build

Tui có quay lại quá trình tui build blog trên youtube, có gì anh em lên trên youtube coi tui làm chi tiết nha.

[https://www.youtube.com/watch?v=cUJ_PjfW2SE](https://www.youtube.com/watch?v=cUJ_PjfW2SE)

**Có thể tóm gọn lại như sao**

Anh em lên trang doc của jekyll để setup cơ bản.

[https://jekyllrb.com/docs/](https://jekyllrb.com/docs/)

Làm theo cái doc của jekyll rồi anh em có thể lên github tìm mấy cái theme jekyll cho blog mà anh em thấy ưng ý rồi làm theo readme của cái theme jekyll đó là okay.

Setup môi trường, config các thể loại trên máy okay hết rồi thì anh em tạo một cái repo trên github để push code của anh em lên.

Tùy vào cái jekyll theme của anh em hoạt động ra sao, nhưng cơ bản thì anh em phải đảm bảo phần setting của repo có bật chức năng github page

Còn về tên miền thì anh em có thể làm giống tui là đặc tên cái repo của anh em là {githubUser}.github.io, cái {githubUser} là username github của anh em. Nếu anh em muốn custom domain name thì anh em tạo một cái file CNAME rồi bỏ cái domain name của anh em vô file đó là okay.

Cơ bản là vậy, nếu phát sinh lỗi gì đó thì anh em search google là ra. Goolge muôn năm :D

Cuối cùng anh em có thể tham khảo source code của cái blog của tui nha.

[https://github.com/thuanowa/thuanowa.github.io](https://github.com/thuanowa/thuanowa.github.io)

---

#writing/blog #programming 