let imgSlider = document.querySelectorAll('.imgSlider');
let links = document.querySelectorAll('.about__list');
let points = document.querySelectorAll('.point');

let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');

let counter = 0;

// Функция для обновления активного слайда
function updateActiveImage(index) {
    // Сначала убираем все активные классы
    imgSlider.forEach(slide => slide.classList.remove('activeImage'));
    links.forEach(link => link.classList.remove('active'));
    points.forEach(point => point.classList.remove('activeImage'));

    // Добавляем активный класс нужному слайду, ссылке и индикатору
    imgSlider[index].classList.add('activeImage');
    links[index].classList.add('active');
    points[index].classList.add('activeImage');
}

// Добавляем обработчики событий на ссылки
links.forEach((link, index) => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Предотвращаем стандартное поведение ссылки
        counter = index; // Обновляем индекс текущего слайда
        updateActiveImage(counter); // Обновляем отображение слайда
    });
});

// Обработчики для кнопок стрелок
leftBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = imgSlider.length - 1; // Возвращаемся к последнему слайду
    }
    updateActiveImage(counter);
});

rightBtn.addEventListener('click', () => {
    counter++;
    if (counter >= imgSlider.length) {
        counter = 0; // Возвращаемся к первому слайду
    }
    updateActiveImage(counter);
});

// Инициализация, чтобы первый слайд был активным
updateActiveImage(counter);