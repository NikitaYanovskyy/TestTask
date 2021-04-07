const blackButton = document.querySelector('#black_btn');
const whiteButton = document.querySelector('#white_btn');
const homeDark = document.querySelector('.home_dark_block');
const homeLight = document.querySelector('.home_light_block');


homeLight.addEventListener('mouseover', (e)=>{
    homeDark.style.clipPath = 'polygon(62% 0, 100% 0, 100% 100%, 58% 100%)'
    blackButton.style.clipPath = 'polygon(3% 0, 100% 0, 97% 100%, 0% 100%)'
    whiteButton.style.clipPath = 'polygon(3% 0, 3% 0, 0 100%, 0% 100%)'
})
homeDark.addEventListener('mouseover', (e)=>{
    homeDark.style.clipPath = 'polygon(42% 0, 100% 0, 100% 100%, 38% 100%)'
    whiteButton.style.clipPath = 'polygon(3% 0, 100% 0, 97% 100%, 0% 100%)'
    blackButton.style.clipPath = 'polygon(3% 0, 3% 0, 0 100%, 0% 100%)'
})
