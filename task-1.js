//Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

const isEnoughCapacity = function (products, containerSize) {
  let total = 0;
  for (const key in products) {
    total += products[key];
  }
  return total < containerSize;
};
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false
