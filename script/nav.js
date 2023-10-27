
const menu = document.querySelector('.menu');
const toggle = document.querySelector('.mobile-nav-toggle');

function menuToggle() {
    return () => {
        const menuState = menu.getAttribute('data-visible');
        const newState = !(menuState === 'true');
        menu.setAttribute('data-visible', newState);
        toggle.setAttribute("aria-expanded", newState);
    };
}

toggle.addEventListener("click", menuToggle());
