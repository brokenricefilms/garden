# Gõ ký tự toán học ∑ bằng chức năng gõ tắt

- Khi tui muốn gõ mấy cái ký tự của toán thì phải lên mạng search cái ký tự của nó rồi copy paste lại giống như ^2 = ²
- Bí một chỗ nữa là mấy cái ký tự toán thường ngày viết trên giấy okay, nhưng khi gõ trên máy tính thì méo biến tên của nó là gì thường mấy cái unicode của toán thì phải search tiếng anh mới ra, mà tui mới biết mấy cái tên cơ bản thư alpha symbol -> α, β, lấy ví dụ như mấy cái symbol như sum: ∑ rồi ℝ thì hên xui lúc nhớ lúc không
- Nói về cá nhân tui thì sợ viết trên giấy lém, tui được mọi người ca ngợi là sỡ hữu chữ viết bác sĩ, viết giống thư pháp các thể loại 😁, nên tui thường note trên laptop, phone là chính còn giấy dùng khi nào tui phải suy nghĩ cái vấn đề nào đó cần phải tái hiện cái suy nghĩ của tui.

**⇒ Okay đến lúc giải quyết vấn đề**

- Thì tui xài linux nên sử dụng cái ibus-bamboo[^1] để gõ tiếng việt, còn mấy cái trình gõ tiếng việt khác thì tui nghĩ cũng cùng ý tưởng.
- Tui dùng chức năng gõ tắt của ibus-bamboo, nói chung thì gõ một cái chứ gì đó như `r..` đi thì nó bung ra ℝ, cơ bản ý tưởng là vậy.

ví dụ một khúc file cấu hình:

```
a..:α
b..:β
z..:ℤ
r..:ℝ
p..:π
<=..:≤
=>..:⇒
->..:→
<-..:←
^2..:²
^3..:³
^4..:⁴
```

⇒ Thì ở đây tui dùng leader key là `..`, để chắc là tui muốn thay thế ký tự, mấy bạn có thể không sử dụng leader key cũng được.

> ví dụ: giống như bạn muốn gõ ^5 mà bạn cấu hình ^5:⁵, thì bạn có thể bấm phím tắt chuyển sang tiếng anh để gõ cũng là một cách.

- Tui lấy mấy cái tưởng này từ chú Xah Lee[^2], tui coi cái emacs math input[^3] của chú ý mà cái math input đó mấy trăm cái symbol lận, trình toán của tui cũng không tới đẳng cấp sau khi học xong tiến sĩ về toán của chú ý nên tui coi rồi lụm mấy cái tui thường thấy thôi ⇒ nói chung là do tui lười ý 😁.
- Còn về giới hạn của cái này thì bản chất nó là unicode nên là từng ký tự một nên không làm mấy cái xịn hơn như lim, rồi phần tử phần mẫu 2-tử-/3-mẫu-, rồi giới hạn,... tui nghĩ là làm được nhưng nó mệt lém giống như tụi mình sẽ thiết kế một cái ngôn ngữ mới vậy nên do trình không đủ nên khó làm lắm, nếu mấy bạn muốn mấy cái siêu đẳng chuyên về nghiên cứu về toán học thì có thể tìm hiểu wolfram lang[^4] nó xịn lém.

⇒ Tóm lại thì tui sẽ tiếp tục thêm bớt, nên sẽ tạo một cái repo ibus-bamboo-math[^5] trên github rồi đi chém gió trên ibus-bamboo, có gì vô repo đó[^5] hay chat với tui để để dàm đạo hỉ.

---

[^1]: https://github.com/BambooEngine/ibus-bamboo/
[^2]: http://xahlee.info/
[^3]: https://github.com/emacsmirror/xah-math-input/blob/master/xah-math-input.el
[^4]: http://xahlee.info/M/index.html
[^5]: https://github.com/thuanowa/ibus-bamboo-math

> #Mathematics_and_logic #Philosophy_and_thinking/writing/blog 