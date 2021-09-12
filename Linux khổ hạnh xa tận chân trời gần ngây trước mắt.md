# Linux khổ hạnh: xa tận chân trời gần ngây trước mắt

• Hôm nay tui config cái dns để block ads: https://nextdns.io/
• Config trên rounter okay rùi, rồi ngồi nghịch cli như thường này
• Và đây! tự như `sudo` chạy chậm một cách bất thường
• Suy nghĩ đầu tiên ập tới trong đầu, “à nãy giờ mình config zsh mấy lệch sudo chắc nó bị lỗi gì đó”
• Thế là mấy chục phút đầu ngồi mò mà không nghĩ ra “hí mình `alias shit='sudo $(fc -ln -1)'` cũng bình thường mà hỉ hồ  đó mình cũng `alias ins="sudo dnf install"` mà hỉ có bị méo gì đâu”
• Thể là a lô cho chị google, đọc mấy cái stackoverflow thì nó do lỗi dns này nọ
• Tui chợt nhớ ra à mình có thay đổi cái `/etc/hosts` mà hỉ, này nào cũng chạy cái lệch này
```bash
function updateHostsBlockShit() {
    sudo curl https://raw.githubusercontent.com/StevenBlack/hosts/master/alternates/fakenews-gambling/hosts --output /etc/hosts
    cowsay "sometimes if you not lazy try to clear host cache: chrome://net-internals/#dns"
    sudo systemctl restart NetworkManager.service
}
```
• Tui lại đổ lỗi cho ông @stevenblack chắc trên repos thay đổi cái méo gì rồi.
• Tui chơi nhất dương chỉ `sudoedit \etc\hosts`, với tiệt chiêu nhất nhãn bá vương tui lưới qua mấy cái config ban đầu điều bình thường không có gì lạ.
• Thui rồi tui lại đổ oanh cho ông @stevenblack đẹp trai
• Chuyện gì đến cũng đã đến, xa tận chân trời gần ngay trước mắt
• Hí mình có đụng tới thằng nextdns mà hỉ, **dns** thôi rồi
• Tui chỉnh lại dns của google, clean máy cái cache dns đồ rồi reboot đồ
• Và rồi chạy `sudo` nhanh như cuộc sống bình của tui.
```bash
👉 time sudo echo ahihi
ahihi
sudo echo ahihi  0.02s user 0.01s system 21% cpu 0.124 total
```
• Tóm lại: tui cũng chả hiểu nguyên nhân xâu xa cái bị lỗi nào ở nextdns, tui nghĩ tui hỏi ông nextdns địa chỉ nhà thôi mà hỉ, giống như địa chỉ ads.shit.ahihi thì ổng chả về 0.0.0.0 thôi, làm thế nào ảnh hưởng tới ông `sudo` mà tại sao ông `sudo` lại dích tới dns, network này nọ. Thôi đang làm biến nên tạm xài google dns 😁


---

> #tool/linux #blog 
