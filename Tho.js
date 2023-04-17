const accordionItems = document.querySelectorAll('.accordion_item')

accordionItems.forEach((item) => {
    const accordionHeaders = item.querySelector('.accordion_header')

    accordionHeaders.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if(openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.accordion_content')

    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
}

window.addEventListener('scroll', function(){
    var header = document.querySelector(".navbar_header");
    header.classList.toggle("sticky", window.scrollY)
})