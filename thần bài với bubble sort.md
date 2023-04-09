# thần bài với bubble sort

- so sánh từng cập trên từng vị trí của array nếu số trước > số sau thì hoán đổi vị trí của nó, cứ tiếp tục như vậy đến cặp cuối array thì chúng ta được số lớn nhất trong array
- như vậy sau mỗi lần so sánh ta sẽ có số lớn thứ X sau X lần lập
- để tối ưu thuật toán, như niêu trên thì mỗi lần lập thì sẽ có số lơn nhất trong vòng lập đó nên sau khi lập vòng đầu tiên thì đương nhiên số lớn nhất ở cuối cùng nên lần lập tiếp theo ta chả cần so sánh tới số lớn nhất đã tìm nữa và cứ như vậy với số lớn thứ 2, 3,...
- ở trong video ông dev có nhắc tới độ phức tạp của thuật toán nếu mình không tối ưu thì độ phức tạp là O², theo suy đoán ban đầu thì độ phức tạp được tính theo vòng lập, thuật toán bubble sort này thì sẽ có 2 vòng lập for
- okay thế [tính độ phức tạp của thuật toán bằng cách méo nào?](tính%20độ%20phức%20tạp%20của%20thuật%20toán%20bằng%20cách%20méo%20nào.md) Cái này cần tìm hiểu thêm nè.
- nhớ lúc trước mình có copy paste cái thuật toán này, sử dụng 1 hàm swap với 1 hàm triển khai cái bubble sort xài cpp.

```cpp
void swap(int *x, int *y) { // cái này không xài con trở thì hỏng được hen, mà còn mơ hồ về cách xài con trỏ trong thực tế qué.
  int tmp = *x; // cái tmp này mình lấy cảm hứng từ /tmp một cái thư mục tạm thời trong Linux hình như Unix relative cũng có giống như MAC OS vậy
  *x = *y;
  *y = tmp;
  // cái hàm này làm mình nhớ tới hồ đội tuyển tin học ở cấp 3, cô cũng đề cập đến chuyện quả trứng gì | ? gì đó cũng không nhớ lém. Nói đơn giảng là có một cái đề là làm sao để đổi chổ trứng gà với trứng vịt ở 2 rổ với nhau mà không được cho nó nằm chung với nhau nên lồi ra bỏ trứng gà vào một cái rổ rỗng khác ở đây là `tmp` rồi cho ông trứng vịt qua rổ trứng gà. Rồi di chuyển trứng gà sang rổ của trứng vịt
}

void bubbleSort(int array[], int n) {
  int i, j; //  tự nhiên tạo cái biết ở đây hỉ? khai báo trong for được rồi mà tại sao khai báo biến toàn cục làm cái méo gì? hm để test thử coi khai báo biếnt trong for có chạy không theo dự tính thì đưng nhiên phải chạy ⇒ okey đã test và kết quả là chạy được ngon
  for (i = 0; i < n - 1; i++) { // okay n ở đây là số phần tử trong array vậy chúng ta xét theo cặp nên từ số phần từ - 1 =  số lần lập
    for (j = 0; j < n - i - 1; j++) { // `n - 1` ở đây thì cũng giống như ý trên, còn `- i` là chúng ta tối ưu thuật toán (sau mõi lần lập tìm ra được số lớn nhất trong lần lập đó nên ta cứ `- i` tương đương `i++` sẽ không xét tới số lớn nhất của vòng lập trước đó nữa
      if (array[j] > array[j + 1]) {
        swap(array[j], array[j + 1]);
      }
    }
}
```

- okay đã đâu đó 607 chữ rồi cũng dài, với zettelkasten note-taking system thì giữ cho note ngắn để có thể khai thác nhiều hơn không nói lang mang như hiện tại nói về cái zettelkasten thua
- kiếm cái gì vui để làm với cái bubble sort này hỉ? → kiếm thử trên mạng có bài toán nào thú vị về cái thuật toán này để làm không? ⟹ làm biến qué nên thôi :D

---

- Author: [ông dev](ông%20dev.md)
- Video: <https://www.youtube.com/watch?v=KsbdeXLau08>
- Code bubble sort của ông dev xài js: https://github.com/OngDevTutorials/sorting-algorithms-visualizer/blob/master/assets/js/algorithms/BubbleSort.js