/**
 * Универсальная функция для показа выпадающего меню
 * @param {string} selectorBlock - селектор блока на котором происходит действие (click)
 * @param {string} selectorMenu - селектор блока меню которое будет показано
 * @param {string} classToShow - класс который будет применяться к меню для показа
 * @param {string} classToRotate - класс который будет применяться к картинки для анимации
 * @param {string} selectorSvg - селектор картинки которая должна быть анимированна
 */
function dropDownMenu(selectorBlock, selectorMenu, classToShow, classToRotate, selectorSvg) {
    let block = $(selectorBlock),
        menu = $(selectorMenu),
        svg = $(selectorSvg);
    // Показать меню по клику на блок
    block.on('tap click', function(){
        menu.toggleClass(classToShow);
        svg.toggleClass(classToRotate);
        // Скрыть меню при клике мимо меню
        $(document).mouseup(function (element){
            if (!block.is(element.target) && block.has(element.target).length === 0) {
                menu.removeClass(classToShow);
                svg.removeClass(classToRotate);
            }
        });
    })
}