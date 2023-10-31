const prevBtn = document.querySelectorAll('.slider-btn.prev');
const nextBtn = document.querySelectorAll('.slider-btn.next');
console.log(prevBtn, nextBtn)

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


prevBtn.forEach(b => b.addEventListener('click', changeImage('prev')))
nextBtn.forEach(b => b.addEventListener('click', changeImage('next')))
