function search() {
    let query = document.getElementById("searchInput").value.trim().toLowerCase();
    let messageDiv = document.getElementById("message");

    // Список доступных файлов
    let files = [
        "10072004ge.html", "19022005sq.html", "30072005hg.html", " ",
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
