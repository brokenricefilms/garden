# Harpoon : Vim Conference 2021

- giống như mark một vài file trên project, có điều dễ xài, đỡ nhớ với linh động với nhiều project hơn
  - tùy vào dường dẫn, giống như đang ở `~/` thì nó sẽ lưu một bản tụi mình map file 1, file 2,... Khi mình di chuyển tới một đường dẫn mới kiểu `~/gardenNote` thì nó sẽ lưu file trên một bản mới
  - nhiều project → nhiều bảng nhớ
- tình hình thì mới sử dụng được vài phút, cũng okay.
- sau này nếu map theo kiểu `g?` không xài ổn thì có thể chuyển qua kiểu map khác sử dụng `<leader>` chẳng hạn.-

```vim
Plug 'nvim-lua/popup.nvim'
Plug 'ThePrimeagen/harpoon'
nmap mi :lua require("harpoon.mark").add_file()<enter>
nmap mo :lua require("harpoon.ui").toggle_quick_menu()<enter>
" moving less, thinking like hjkl, now with number qwert|asdfg
" 6|7|8|9|10
" q|w|e|r|t
" ----------
" 1|2|3|4|5
" a|s|d|f|g
nmap ma :lua require("harpoon.ui").nav_file(1)<enter>
nmap ms :lua require("harpoon.ui").nav_file(2)<enter>
nmap md :lua require("harpoon.ui").nav_file(3)<enter>
nmap mf :lua require("harpoon.ui").nav_file(4)<enter>
nmap mg :lua require("harpoon.ui").nav_file(5)<enter>
nmap mq :lua require("harpoon.ui").nav_file(6)<enter>
nmap mw :lua require("harpoon.ui").nav_file(7)<enter>
nmap me :lua require("harpoon.ui").nav_file(8)<enter>
nmap mr :lua require("harpoon.ui").nav_file(9)<enter>
nmap mt :lua require("harpoon.ui").nav_file(10)<enter>
```

---

- [ThePrimeagen](ThePrimeagen.md)
- https://www.youtube.com/watch?v=Qnos8aApa9g

> #tool/vim
