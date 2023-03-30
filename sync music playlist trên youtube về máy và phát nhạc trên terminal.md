# sync music playlist trên youtube về máy và phát nhạc trên terminal

- mục tiêu là tiết kiệm tý hiệu năng khi phải chạy một chrome tab để play cái playlist music trên youtube
- thay thể cho tab chrome là mpv

```bash
alias m='mpv --shuffle --loop-playlist ~/Music/*'
```

- mod cũng không biết hiệu năng có giảm chúc đỉnh nào không :D
- và tới nhân vật chính ngày hôm nay

```bash
alias yta='youtube-dl -f "bestaudio" --continue --no-overwrites --ignore-errors --extract-audio --audio-format mp3 -o "%(title)s.%(ext)s"'

function musicSync() {
    cd ~/Music/
    trash *
    yta "https://thuanowa.github.io/l/music"
}
```

- mấy bạn có thể cài youtube-dl theo hướng dẫn: <https://github.com/ytdl-org/youtube-dl#installation>
- cái lệch trên nguy hiểm một cái là trash \* trên thư mục music, do mod chỉ nghe mấy bày trên playlist đó thôi cũng chả chứa cái gì khác trong ~/Music nên mod chuyển vô thùng rác luôn bẳng lệch trash, mấy bạn không có trash-cli thì thay thế bằng `rm -rf`` cũng okay
- cái url <https://thuanowa.github.io/l/music> này thì bạn có thẻ thay đổi bằng playlist bạn thích
- một cách lười hơn thì bạn có thể xài cron job để tự động vào mọt khoảng thời gian thì nó tự động chạy lệch này

---

#Technology_and_applied_sciences/tool/command_line
