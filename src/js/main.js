import dropDownMenu from './components/dropdown-menu';
import showLoader from "./components/loader";
import timer from './components/timer';

$(document).ready(function () {

    showLoader('.preloader', 'hide-preloader')

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

    timer('timer1', '2023-02-25');
    timer('timer2', '2023-03-05');
})
