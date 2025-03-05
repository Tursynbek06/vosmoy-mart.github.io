function search() {
    let query = document.getElementById("searchInput").value.trim().toLowerCase();
    let messageDiv = document.getElementById("message");

    // Список доступных файлов
    let files = [
        "index.html", "10072004ge.html", "19022005sq.html", "30072005hg.html", "04112005df.html",
        "18082005wl.html", "11022005vn.html", "21042005oj.html", "20032005rt.html",
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
