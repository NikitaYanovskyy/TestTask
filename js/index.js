const blackButton = document.querySelector('#black_btn');
const whiteButton = document.querySelector('#white_btn');
const homeDark = document.querySelector('.home_dark_block');
const homeLight = document.querySelector('.home_light_block');

//Home animation
var developerAnimTiming = 0.4;

//Functions that store MouseOver styles
const setHomeLightMouseOverStyles = ()=>{
    whiteButton.style.clipPath = 'polygon(2% 0, 2% 0, 0 100%, 0% 100%)';
    blackButton.style.clipPath = 'polygon(2% 0, 100% 0, 98% 100%, 0% 100%)';
    homeDark.style.clipPath = 'polygon(calc(50% + 150px) 0, 100% 0, 100% 100%, calc(50% + 100px) 100%)';
    
};
const setHomeDarkMouseOverStyles = ()=>{
    whiteButton.style.clipPath = 'polygon(2% 0, 100% 0, 98% 100%, 0% 100%)';
    blackButton.style.clipPath = 'polygon(2% 0, 2% 0, 0 100%, 0% 100%)';
    homeDark.style.clipPath = 'polygon(calc(50% - 100px) 0, 100% 0, 100% 100%, calc(50% - 150px) 100%)';
};

//Functions that apply MouseOver styles
const addHomeMouseOver = ()=>{
    homeLight.addEventListener('mouseover', setHomeLightMouseOverStyles);
    homeDark.addEventListener('mouseover', setHomeDarkMouseOverStyles);
};
const removeHomeMouseOver = ()=>{
    homeLight.removeEventListener('mouseover', setHomeLightMouseOverStyles);
    homeDark.removeEventListener('mouseover', setHomeDarkMouseOverStyles);
};

//Initial call
addHomeMouseOver();



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

//First animation part variables
const home_black_btn_Arr = document.getElementsByClassName('home_black_btn');
const home_black_btn_hover_Arr = document.getElementsByClassName('home_btn_hover');
const home_black_btn_hover_background_Arr = document.getElementsByClassName('home_btn_hover_background');

//Second animation part variables
const artistGallery = document.querySelector('.artist_gallery_wrapper');
const galleryItems = document.getElementsByClassName('gallery_item');

//Set gallery items hover events
for (let item of galleryItems){

    //Set items text bottom value to hide it
    var textHeight = item.children[1].children[0].offsetHeight;
    item.children[1].children[0].style.bottom = `-${textHeight}px`;

    //Set events for items
    item.addEventListener('mouseenter',()=>{
        //reset values
        console.log(textHeight)
        item.children[1].children[0].style.transition = `unset`;
        item.children[1].children[0].style.bottom = `-${textHeight}px`;
        item.children[1].children[0].style.opacity = '1';


        //animate text
        setTimeout(()=>{
            item.children[1].children[0].style.transition = 'bottom 0.3s cubic-bezier(.43,1,.6,.99)';
            item.children[1].children[0].style.bottom = '0';
        },0)
        
    });
    item.addEventListener('mouseleave',()=>{
        item.children[1].children[0].style.transition = 'bottom 0.3s cubic-bezier(.43,1,.6,.99), opacity 0.5s ease-in-out';
        item.children[1].children[0].style.opacity = '0';
    });
};

homeDark.addEventListener('click',()=>{
    removeHomeMouseOver();
    //new animation for dark block
    homeDark.style.transition = `clip-path ${developerAnimTiming}s cubic-bezier(.72,.01,.12,.99)`;
    //homeDark.style.clipPath = 'polygon(calc(50% - 100px) 0, 100% 0, 100% 100%, calc(50% - 150px) 100%)';

    homeDark.style.clipPath = 'polygon(200px 0, 100% 0, 100% 100%, 130px 100%)';

    //Home Developer btn
    home_black_btn_Arr[0].style.transition = `transform ${developerAnimTiming}s cubic-bezier(.72,.01,.12,.99), width ${developerAnimTiming}s cubic-bezier(.72,.01,.12,.99)`;
    home_black_btn_Arr[0].style.right = 'calc(94% - 30px)';
    home_black_btn_Arr[0].style.width = '47px';
    home_black_btn_hover_Arr[0].style.width = '47px';
    
    blackButton.style.clipPath = 'polygon(10% 0, 10% 0, 0 100%, 0 100%)';

    //Light block hover styles
    homeLight.addEventListener('mouseover', ()=>{
        blackButton.style.clipPath = 'polygon(10% 0, 100% 0, 90% 100%, 0 100%)';
    });
    homeLight.addEventListener('mouseout', ()=>{
        blackButton.style.clipPath = 'polygon(10% 0, 10% 0, 0% 100%, 0 100%)';
    });

    artistGallery.style.visibility = `visible`;
    artistGallery.style.opacity = `1`;
});