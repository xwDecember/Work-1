function main() {
    // Запрос данных у пользователя
    // Браузер может блокировать множественные prompt после первого запуска
    const day = parseInt(prompt("День рождения:"));
    const month = parseInt(prompt("Месяц рождения:"));
    const year = parseInt(prompt("Год рождения:"));
    
    const birthDate = new Date(year, month - 1, day);
    if (isNaN(birthDate)) return console.log("Некорректная дата!");

    // День недели
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    console.log(`День недели: ${days[birthDate.getDay()]}`);
    
    // Високосный год
    console.log(`Високосный год: ${(year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Да" : "Нет"}`);
    
    // Возраст
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    if (today < new Date(today.getFullYear(), birthDate.getMonth(), birthDate.getDate())) age--;
    console.log(`Возраст: ${age} лет`);
    
    // Цифры звёздочками
    const digitPatterns = {
        '0': '*** * * * * ***', '1': '  *   *   *   *   *', 
        '2': '***   *****  ***', '3': '***   ***   ******', 
        '4': '* * * *****   *', '5': '*****  ***   *****', 
        '6': '*****  ***** ***', '7': '***   *   *   *', 
        '8': '*** * *** * ***', '9': '*** * *****   *',
        ' ': '                   '
    };
    
    const dateStr = `${day.toString().padStart(2, '0')} ${month.toString().padStart(2, '0')} ${year}`;
    console.log("Дата рождения:");
    
    for (let i = 0; i < 5; i++) {
        let line = "";
        for (let char of dateStr) {
            const pattern = digitPatterns[char] || digitPatterns[' '];
            line += pattern.substring(i * 4, i * 4 + 3) + " ";
        }
        console.log(line);
    }
}

main();