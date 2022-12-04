window.addEventListener('scroll', function () {
    let scroll = document.querySelector('.upward');
    scroll.classList.toggle('active', window.scrollY>500)
})

function scrollUp () {
    window.scrollTo ({
        top: 0,
        behavior: "smooth"
    })
}
