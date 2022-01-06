import dropDownMenu from './components/dropdown-menu';

$(document).ready(function () {
    dropDownMenu(
        '.js-language-dropdown',
        '.js-language-drop-show',
        'drop-show',
        'drop-svg-rotate',
        '.js-drop-svg'
    );
    dropDownMenu(
        '.js-categories',
        '.js-categories-show',
        'show-categories',
        'drop-svg-rotate',
        '.js-categories-svg'
    );
    dropDownMenu(
        '.js-collections',
        '.js-collections-show',
        'show-collections',
        'drop-svg-rotate',
        '.js-collections-svg'
    );
})