const blackButton = document.querySelector('#black_btn');
const whiteButton = document.querySelector('#white_btn');
const homeDark = document.querySelector('.home_dark_block');
const homeLight = document.querySelector('.home_light_block');


//Home animation
var isDarkBlockClicked = false;
var developerAnimTiming = 0.4
const HoverOverLightBlock = () => {
    whiteButton.style.clipPath = 'polygon(3% 0, 100% 0, 97% 100%, 0% 100%)';
    if(isDarkBlockClicked){
        blackButton.style.clipPath = 'polygon(12% 0, 12% 0, 0 100%, 0% 100%)';
    }else{
        blackButton.style.clipPath = 'polygon(3% 0, 3% 0, 0 100%, 0% 100%)';
    }
}
const HoverOverDarkBlock = () => {
    whiteButton.style.clipPath = 'polygon(3% 0, 3% 0, 0 100%, 0% 100%)';
    blackButton.style.clipPath = 'polygon(3% 0, 100% 0, 97% 100%, 0% 100%)';
}
//Functions that store MouseOver styles
const setHomeLightMouseOverStyles = ()=>{
    homeDark.style.clipPath = 'polygon(62% 0, 100% 0, 100% 100%, 58% 100%)';
    
};
const setHomeDarkMouseOverStyles = ()=>{
    homeDark.style.clipPath = 'polygon(42% 0, 100% 0, 100% 100%, 38% 100%)';
};

//Functions that apply MouseOver styles
const addHomeMouseOver = ()=>{
    homeLight.addEventListener('mouseover', setHomeLightMouseOverStyles);
    homeLight.addEventListener('mouseover', HoverOverLightBlock);

    homeDark.addEventListener('mouseover', setHomeDarkMouseOverStyles);
    homeDark.addEventListener('mouseover', HoverOverDarkBlock);
};
const removeHomeMouseOver = ()=>{
    homeLight.removeEventListener('mouseover', setHomeLightMouseOverStyles);
    homeDark.removeEventListener('mouseover', setHomeDarkMouseOverStyles);
};

//Initial call
addHomeMouseOver()



//About animation
const aboutButton = document.querySelector('.about_btn');
const aboutCanvas = document.querySelector('.about_canvas');
const aboutContent = document.querySelector('.about_content_background'); 

var isAboutActive, isAboutCanvasAnimation, isAboutContentAnimation  = false;

aboutCanvas.addEventListener('transitionstart',()=>{
    isAboutCanvasAnimation = true;
});
aboutCanvas.addEventListener('transitionend',()=>{
    isAboutCanvasAnimation = false;
});
aboutContent.addEventListener('transitionstart',()=>{
    isAboutContentAnimation = true;
});
aboutContent.addEventListener('transitionend',()=>{
    isAboutContentAnimation = false;
});

aboutButton.addEventListener('click', ()=>{
    if(!isAboutCanvasAnimation && !isAboutContentAnimation){
        isAboutActive = !isAboutActive;
        if(isAboutActive){
            aboutButton.childNodes[1].innerHTML = 'CLOSE';
            aboutButton.childNodes[1].style.color = '#000';
            aboutButton.childNodes[3].style.backgroundColor = '#000';
            aboutCanvas.style.left = '0';
            setTimeout(()=>{
                aboutContent.style.right = '-8%';
            },500);
        }else{
            aboutButton.childNodes[1].innerHTML = 'ABOUT';
            aboutButton.childNodes[1].style.color = '#fff';
            aboutButton.childNodes[3].style.backgroundColor = '#fff';
            aboutContent.style.right = '-108%';
            setTimeout(()=>{
                aboutCanvas.style.left = '-100%';
            },500);
        };
    }
});


//Artist animation
const home_black_btn_Arr = document.getElementsByClassName('home_black_btn');
const home_black_btn_hover_Arr = document.getElementsByClassName('home_btn_hover');
const home_black_btn_hover_background_Arr = document.getElementsByClassName('home_btn_hover_background');
homeDark.addEventListener('click',()=>{
    isDarkBlockClicked = true
    removeHomeMouseOver();
    homeDark.style.transition = `clip-path ${developerAnimTiming}s cubic-bezier(.72,.01,.12,.99)`;
    homeDark.style.clipPath = 'polygon(12% 0, 100% 0, 100% 100%, 8% 100%)';

    //Home Developer btn
        home_black_btn_Arr[0].style.transition = `transform ${developerAnimTiming}s cubic-bezier(.72,.01,.12,.99), width ${developerAnimTiming}s cubic-bezier(.72,.01,.12,.99)`;
        home_black_btn_Arr[0].style.transform = 'translateX(-175px)';
        home_black_btn_Arr[0].style.width = '47px';
        home_black_btn_hover_Arr[0].style.width = '47px';
        setTimeout(()=>{
            home_black_btn_Arr[0].style.clipPath = 'polygon(12% 0, 100% 0, 88% 100%, 0% 100%)';
        },800)
});