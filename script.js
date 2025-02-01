// script.js

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвращаем отправку формы

    // получаем значения из полей формы
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // проверка логина и пароля
    if (username === 'admin' && password === '1234') {
        // если правильный логин и пароль, перенаправляем на другую страницу
        window.location.href = 'Другая страница.html'; // относительный путь
    } else {
        alert('Неверный логин или пароль');
    }
});
