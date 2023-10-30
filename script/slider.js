const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

const changeImage = (direction) => () => {
    const pictures = document.querySelectorAll('.hero-imgs picture');
    const texts = document.querySelectorAll('.slider-text-container .text');
    
    let visibleIndex = 0;
    pictures.forEach((pic, i) => {
        if (!pic.classList.contains('d-hide')) {
            visibleIndex = i
        }
    });

    pictures[visibleIndex].classList.add('d-hide');
    texts[visibleIndex].classList.add('d-hide');
    let toShow = direction == 'next' ? mod((visibleIndex + 1), (pictures.length))
        : mod((visibleIndex - 1), (pictures.length));
    pictures[toShow].classList.remove('d-hide');  
    texts[toShow].classList.remove('d-hide');  
}

const mod = (x,m) => {
    return (x%m + m)%m;
}

prevBtn.addEventListener('click', changeImage('prev'))
nextBtn.addEventListener('click', changeImage('next'))
