window.addEventListener('scroll', function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY)
})

function toggle() {
    var header = document.querySelector("header")
    header.classList.toggle("active")
}

