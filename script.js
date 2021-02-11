// Task 1
// Создайте input в который пользователь может вводить текст на латинице. Используя события клавиатуры перехватывайте введенный символ - если пользователь ввел маленькую (строчную) букву, выводите ее. Если большую (пропись) - удаляйте. Ограничте возможность введения только буквами.

let i1 = document.querySelector('.i-1');
let out1 = document.querySelector('.out-1');

i1.onkeypress = (e) => {
   if (e.keyCode > 96 && e.keyCode < 123) this.value += e.key;
   else return false;
}

// Task 2
// Создайте один блок внутри другого. На внутренний блок добавьте возможность сдвига блока вправо, влево, вверх, вниз с помощью клавиш стрелок. Бонус - добавьте на пробел возможность поворота фигуры вокруг оси на 45 градусов.

let in2 = document.querySelector('.in-2');
let count = 0;
let count2 = 0;
let count3 = 0;

document.onkeydown = (e) => {
   if (e.keyCode == 39) {
      count = count + 10;
      in2.style.marginLeft = count + 'px';
   }
   if (e.keyCode == 37) {
      count = count - 10;
      in2.style.marginLeft = count + 'px';
   }
   if (e.key == 'ArrowDown') {
      count2 = count2 + 10;
      in2.style.marginTop = count2 + 'px';
   }
   if (e.key == 'ArrowUp') {
      count2 = count2 - 10;
      in2.style.marginTop = count2 + 'px';
   }
   if (e.keyCode == 32) {
      count3 = count3 + 45;
      in2.style.transform = `rotate(${count3}deg)`;
   }
}

// Task 3
// Напишите программу которая при нажатии кнопки клавиатуры меняет символ на произвольный.

let i3 = document.querySelector('.i-3');

i3.onkeypress = () => {
   let rand = Math.round(Math.random() * (90-65) + 65);
   let info = String.fromCharCode(rand).toLowerCase();
   i3.value += info;
   return false;
}

// Task 4
// Напишите программу шутку которая меняет введенный символ q на w, w на e и т.д. Т.е. выполняет сдвиг на одну клавишу влево на клавиатуре. Последние символы строк меняет так: ] на q, \ на a, / на z. Возможно для решения потребуется массив.

let i4 = document.querySelector('.i-4');

const a = {
   q: "w",
   w: "e",
   e: "r",
   r: "t",
   t: "y",
   y: "u",
   u: "i",
   i: "o",
   o: "p",
   p: "[",
   "[": "]",
   "]": "q",
   "\\" : "a",   // !!!
   a: "s",
   s: "d",
   d: "f",
   f: "g",
   g: "h",
   h: "j",
   j: "k",
   k: "l",
   l: ";",
   ";": "'",
   "'": "z",
   z: "x",
   x: "c",
   c: "v",
   v: "b",
   b: "n",
   n: "m",
   m: ",",
   ",": ".",
   ".": "/",
   "/": "z",
}

i4.onkeypress = (e) => {
   let b = e.key;
   if (a[b] !== undefined) i4.value += a[b];
   else i4.value += b;
   return false;
}


