/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let result = '';
  let wordStart = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result += str.substring(wordStart, i).charAt(0).toUpperCase() + str.substring(wordStart + 1, i).toLowerCase() + ' ';
      wordStart = i + 1;
    }
  }
  result += str.substring(wordStart).charAt(0).toUpperCase() + str.substring(wordStart + 1).toLowerCase();
  return result;
}


// function capitalizeWords(str) {
//   return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
// }

