/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
let sum = 0;
let number = 1;

while (number <= 20) { 
  if (number % 2 != 0) {
    sum = sum + number;number = number + 1;
  }
  number = number + 1;
  console.log(sum);
}

alert(sum);

