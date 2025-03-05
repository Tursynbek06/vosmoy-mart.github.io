function search() {
    let query = document.getElementById("searchInput").value.trim().toLowerCase();
    let messageDiv = document.getElementById("message");

    // Список доступных файлов
    let files = [
        "10072004.html", " ", " ", " ",
        " ", " ", " ", " ",
        " ", " ", " ", " "
    ];

    // Проверяем, есть ли такой файл
    let foundFile = files.find(file => file.toLowerCase().includes(query));

    if (foundFile) {
        window.location.href = foundFile; // Открываем файл
    } else {
        messageDiv.textContent = "Файл не найден.";
    }
}