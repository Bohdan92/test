const names  = [
    "Ura", 
]; // Массив


// ****** //
function showNames() {
    const namesLength = names.length; //  Длинна массива
    
    for (let i = 0; i < names.length; i++) { // Цикл
      const name = names[i]; // Имя по ключу
    
      console.log("Name ===>>>", name); // Выводиться имя
    }
}

showNames(); // Запуск функции 
// **** //