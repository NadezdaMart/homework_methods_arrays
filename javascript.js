
// Дан случайный массив чисел (создайте самостоятельно). С помощью метода .filter() отфильтруйте массив так, чтобы в новый массив вошли только четные двухзначные числа из исходного.

// const arr = [2, 9, 34, 56, 1, 7, 15];
// const newArr = arr.filter(item => {
//     if (item % 2 === 0 && item >= 10) {
//         return true;
//     }
//     else {
//         return false;
//     }
// })
// console.log(newArr);

// Пользователь вводит 10 случайных значений. Каждое значение необходимо записать в массив. С помощью метода .every() проверить были ли все введенные пользователем данные – числами.

// const arr = [];

// for (let i = 1; i <= 3; i++) {
//     let input = (Number(prompt(`Please enter random number ${i}:`)));
//     arr.push(input);
// }
// console.log(arr);

// const result = arr.every(item => {
// if (typeof item === 'number'){
//     return true;
// }
// else {
//     return false;
// }
// })
// console.log(result);


// Вывести в консоль 'its valid', если во всех объектах поле a > b, вывести 'its invalid' если хотя бы в одном объекте a<=b

const arr = [
    {a: 2, b: 1},
    {a: 5, b: 12},
    {a: 95, b: 7}
  ]


// const arr2 = arr.find(item => {
//     if (item.a > item.b) {
//         console.log('is valid');
//     }
//     else {
//         console.log('is not valid');
//     }
// })

// На основе массива arr, создать массив объектов у которых поле b возведено в квадрат пример:
// const arr2 = [
//     {a: 2, b: 1},
//     {a: 5, b: 144},
//     {a: 95, b: 49}
//   ];

const arr2 = arr.map(item => {
    return {
        ...item,
        b: item.b * item.b
    }});
console.log(arr2)