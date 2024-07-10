const MENU_EL_ID = 'js-menu';
const MENU_TOGGLE_EL_ID = 'js-toggle-menu';
const ACTIVE_LIST_CLASS_NAME = 'menu__nav-list--active';
const ACTIVE_TOGGLE_CLASS_NAME = 'menu__nav-button--active';

const toggleMenuEl = document.getElementById(MENU_TOGGLE_EL_ID);
toggleMenuEl?.addEventListener('click', () => {
    const menuEl = document.getElementById(MENU_EL_ID);
    menuEl?.classList.toggle(ACTIVE_LIST_CLASS_NAME);
    toggleMenuEl.classList.toggle(ACTIVE_TOGGLE_CLASS_NAME);
});

const mediaQuery = window.matchMedia('(min-width: 1024px)');
mediaQuery.addEventListener('change', () => {
    if (mediaQuery.matches) {
        const menuEl = document.getElementById(MENU_EL_ID);
        menuEl?.classList.remove(ACTIVE_LIST_CLASS_NAME);
        toggleMenuEl?.classList.remove(ACTIVE_TOGGLE_CLASS_NAME);
    }
});
