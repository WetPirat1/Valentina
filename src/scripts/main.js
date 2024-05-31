
document.getElementById("myForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var errorMessages = [];

    // Проверка имени - должно содержать только буквы и пробелы
    if (!/^[а-яА-Яa-zA-Z\s]+$/.test(name)) {
        errorMessages.push("The name must contain only letters and spaces.");
    }

    // Проверка почты
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        errorMessages.push("Please enter a valid email address.");
    }

    // Проверка номера телефона - должен состоять только из цифр и допускается пробел, "-", "(", ")"
    if (!/^\+?[\d()-\s]+$/.test(phone)) {
        errorMessages.push("The phone number must contain only numbers and be between 7 and 15 characters in length.");
    }

    // Если есть ошибки, отменяем отправку формы и выводим сообщения об ошибках
    if (errorMessages.length > 0) {
        event.preventDefault();
        var errorContainer = document.createElement("div");
        errorContainer.className = "error";
        errorContainer.innerHTML = errorMessages.join("<br>");
        document.getElementById("myForm").appendChild(errorContainer);
    }
});


function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}
// Закрытие выпадающего списка при клике вне его
window.onclick = function(event) {
    if (!event.target.matches('.dropdown button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}



document.addEventListener("DOMContentLoaded", function() {
    // Получаем все ссылки внутри .porfolio-item
    const portfolioLinks = document.querySelectorAll(".portfolio.portfolio-container.porfolio-block.porfolio-item a");

    // Функция открытия PopUp
    function openPopup(popupId) {
        document.getElementById(popupId).style.display = "block";
    }

    // Функция закрытия PopUp
    function closePopup(event) {
        event.target.closest('.popup').style.display = "none";
    }

    // Добавляем обработчик события на все ссылки
    portfolioLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const popupId = this.getAttribute("data-popup");
            openPopup(popupId);
        });
    });

    // Добавляем обработчик события на все кнопки закрытия
    document.querySelectorAll(".close").forEach(closeBtn => {
        closeBtn.addEventListener("click", closePopup);
    });

    // Закрываем PopUp при клике вне его содержимого
    window.addEventListener("click", function(event) {
        document.querySelectorAll(".popup").forEach(popup => {
            if (event.target == popup) {
                popup.style.display = "none";
            }
        });
    });
});



