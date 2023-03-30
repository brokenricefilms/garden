# Gốc chia sẻ setup linux sài hằng ngày (2021)

**hệ điều hành**

- Tui xài Pop!\_OS 21.04 (nó giống như là một bản mod lại của ubuntu của system76, hỗ trợ nhiều thứ hay ho hơn)
- Tại sao tui không xài ubuntu?
  -> ubuntu thì tui không thích thằng snap, dùng nó cài app các thể loại thì nó load chậm một cách không thể chấp nhận, mấy chế có thể tiêu diệt snap rôi xài flatpak thay thế cũng được.
  -> tui dùng pop shell (cũng thuộc kiểu tiling window manager chạy trên nền gnome), mà pop shell do system76 phát triển nên, tui xài popos luôn cho khỏe khỏi cần setup lại ubuntu.
- Tại sao tui dùng gnome + popshell mà không xài mấy cái tiling wm, như i3, dwm, xmonad, etc...?
  -> do tui lười config, do tui dùng gnome từ hồi mới xài linux nên tui cũng quen, còn mấy cái DE như xmonad chẳng hạn thì tui phải config các thể loại thì mới tui mới thích xài, chứ xài mấy cái config sẵn trên mạng thì tui không thích lắm, kiểu không cá nhân hóa được. Do tui bị ám ảnh cưỡng chế nên mới vậy :D.
- Tại sao tui không xài arch base?
  -> tui dùng arch base lâu nhất là khoảng gần một tháng, lần gần đây nhất tui dùng nó thì tui xài artix (systemd free) + i3wm, xài được khoảng hơn một tuần, mà nó gặp lỗi gì đó bay màu luôn, tui mệt nên không fix mà cài lại debian base xài.
  -> cái package manager pacman của thằng arch thì xài sướng thật, nhiều package nó có sẵn, mấy cái kitty terminal tui xài chẳng hạn thì nó update version nhanh hơn mấy cái rolling release như debian base chẳng hạn, nhưng mà update version mới nhất cũng có cái hại là sản sinh ra nhiều lỗi vặt, tui fix mệt quá nên quay lại debian base luôn cho lành.

**Cái chỗ để code các thể loại**

- Tui dùng nvim + tmux + kitty terminal (nó render mượt hơn, và hỗ trợ mấy cái ligatures, chừng nào thằng alacritty hỗ trợ tính năng đó thì tui chuyển sang alacritty xài)
- gần đây tui học môn thực hành cấu trúc dữ liệu thì tui cài mssql với dbever để chạy mấy cái lệnh sql các thể loại.
- cli app mà tui recommend cho mấy ông xài cái `gh` (github cli) nó có nhiều thứ hay ho hơn khi xài cái git gốc, fzf (mấy chế config các thể loại lại một chút lại là okay), starship prompt (làm cho cái prompt của anh em nó fancy hơn).
- anh em nào thích xem tui config các thể loại thì vô repo dotfiles tui coi thử: <https://github.com/thuanowa/dotfiles>

**VIMer Philosophy**

- chủ yếu tui config các thể loại sao mà dùng chuột ích nhất có thể.
- tui tạo 10 cái workplace (tui dùng alt + 1,2,...9,0 'tui không dùng cái phím window vì tui ngõ phím đặt trên home rule nên tui map cái alt cho dễ bấm hơn') để di chuyển đến mấy cái workplace đó
- tui xài pop shell nên khi tui mở mấy cái app các thứ thì nó tự chia đôi màn hình cách thể loại, rồi di chuyển giữa các window các thứ mà không dùng chuột
- Workspace

1. browser (tui dùng brave)
2. terminal (code, cli, ...etc) do tui dùng tmux nên có thể tạo thêm nhiều panes, windows, sessions, các thể loại.
3. cái google calendar (tui dùng brave rồi tạo một cái shortcut, nó làm cái thanh top bar trên brave nhỏ lại)
4. tui mở cái note app của tui xài (obsidian, tui note theo cách zettelkasten)
5. tui mở mấy cái chat như discord chẳng hạn

- còn mấy workspace 6, 7, 8, 9, 10 thì tui tùy vào cái công việc thì dùng nó cho mục đích khác nhau như quan video chẳng hạn.
- cái workspace này giống như cái khi mấy chế có muscle memory, giống như cần terminal thì không cần suy nghĩ `alt+2` nó bay xuống workspace 2
- tui xài xmodmap để khi tui giữ cái phím capslock + hjkl (trái, xuống, lên, phải), i (home), o (end)
- tui thấy mấy cái dock, rồi cái top bar hơi phiền nên tui config lại cho nó bay màu luôn, top bar (thì tui dùng gnome extension hide top bar), cái dock thì tui tắt nó đi
- tui bị ám ảnh cưỡng chế nên giao diện theo light theme là nó light hết, dark là nó phải dark hết, tui tui viết func `light` `dark`, trên terminal để nó tự đổi theme nvim, terminal, bat,...

**web browser setup**

- tui dùng Surfingkeys để lướt web mà không cần dùng chuột, kiểu VIMer :D, mà xài mấy cái app design như figma chẳng hạn thì vẫn phải dùng chuột :D
- tui block ads, spam các thể loại,thì tui dùng cái block ads, https update cái thể loại của thằng brave, nhưng có không có mấy cái chuyên xâu nên tui dùng ublock origin, tui custom filter các thể loại (do tui thích nghịch giao diện nên thấy cái nào ngứa mắt tui block cho nó bay màu luôn)
- một số filter tui recommend anh em bật
  - VIE: ABPVN List
  - Anti-Facebook
  - EasyList Cookie
- ublock có mấy cái filter hay ho khác tùy vào mục đích sử dụng của anh em nha.
- về chuyện đọc tài liệu các thứ bằng tiếng anh thì tui xài google translate extension (anh em bôi đen là nó hiện cửa sổ nhỏ lên, nhanh tiện), nhưng cái google translate thì nó dịch một số từ hơi khó hiểu, thì tui dùng Google Dictionary (by Google) nó giải thích của từ đó ra để cho mình dễ hiểu hơn.
- bên github thì tui dùng Octotree, nó hiện thêm một cái tree folder các thể loại bên trái,
- khi lướt youtube thì tui cái channel nào click bait, title các thể loại thì tui dùng BlockTube, để nó chặt mấy cái video dựa trên video title , channel mà mấy ông chặn, ublacklist chẳng được mấy cái trang web tào lao mà mấy ông search google thấy.
- youtube thì dùng thêm cái SponsorBlock for YouTube, YouTube NonStop.
- khi tui đọc mấy cái blog, etc... mà trang web nó bị béo phì thì tui sài DOM Distiller Reading Mode, để nó hiển thị text mà mình muốn độc thôi, độc được tập trung, không bị làm phiền bởi mấy cái khó chịu.
- tui xài thêm Marinara: Pomodoro® Assistant, kiểu làm việc theo thời gian pomodoro, tui đang reverse pomodoro technique lại để tìm xem tui làm việc theo kiểu nào là ok nhất như 50/10 , 25/5, etc...
- tui xài [Workona](Workona.md)Tab Manager, để quản lý mấy cái tab, kiểu khi design cái course storage thì tui mở mấy tab liên quan để khoải bị ngợp trong đống tab, tui cũng xài nó như một cái read/watch later vậy tui lưu nó vô một cái workspace muốn đọc thì tui chỉ cần alt-a di chuyển tới cái workspace read later rồi nó cho chạy tất cả các tab tui bỏ trong workspace đó, còn mấy tab trong workspace vừa xài thì nó ẩn đi.

anh em có thể xem cái screencast tui làm cái blog của tui, để xem qua cái cái setup của tui (video từ tháng 3/2021, nên setup có hơi outdated một chút nha): <https://www.youtube.com/watch?v=cUJ_PjfW2SE>

**điện thoại**

- Trên điện thoại tui xài brave browser luôn, chủ yếu để coi youtube, phim hàn xẻng, anime các thể loại mà không bị quảng cáo, mấy ông nên vô cái cái filter của thằng brave trên điện thoại và bật cái filter của việt nam.
- trên điện thoại thì tui code bằng Termux, giống như một cái terminal vậy, nó chạy được localhost:??? các thể loại trên điện thoại được luôn, tui chỉ mới chạy review cái file markdown của tui (anh em ngõ cái địa chỉ localhost:??? trên brave, firefox là nó vô), tui chưa thử code web yarn các thứ các thể loại,..
- tui lên trường thì không cầm theo laptop vì cái laptop tui bị hư pin nên hơi phiền, tui xài termux code mấy cái bài tập c++ trên trường cũng okay (do quen dùng terminal nên không gặp khó khăn lắm)
- tui xài termux, cho nó chạy cron job nó tự sync cái repo note của tui trên github, khoảng 15 phút thì nó tự sync, tui viết note có định dạng là md nên hiện tại tui dùng markor để coi note trên điện thoại, (tui đợi thằng obsidian publish cái app trên android thì tui chuyển qua obsidian trên điện thoại xài)

---
#writing/blog #tool/linux 