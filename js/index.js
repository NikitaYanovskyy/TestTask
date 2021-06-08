const articleAnimationTransition = (action) =>{
    if(action === 'set'){
        //Title text
        article.title.style.transition = `transform 1s cubic-bezier(.07,.99,.36,.99)`;
        article.description.style.transition = `transform 1s cubic-bezier(.07,.99,.36,.99)`;
        //Main image
        article.image.style.transition = `transform 1.5s cubic-bezier(.72,.01,.12,.99)`;
        //Bottom content
        article.bottomContent.style.transition = `transform 1.5s cubic-bezier(.72,.01,.12,.99)`;
    }else if(action === 'remove'){
        //Title text
        article.title.style.transition = `unset`;
        article.description.style.transition = `unset`;
        //Main image
        article.image.style.transition = `unset`;
        //Bottom content
        article.bottomContent.style.transition = `unset`;
    }
}
const articleAnimation = (action) =>{
    if(action === 'start'){
        //Article block
        article.article.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
        //Title text
        setTimeout(()=>{
            article.title.style.transform = `translateY(${0}px)`
        },1400)
        setTimeout(()=>{
            article.description.style.transform = `translateY(${0}px)`
        },2000)
        //Main image
        setTimeout(()=>{
            article.image.style.transform = `scale(1)`
        },2500)
        //Bottom content
        setTimeout(()=>{
            article.bottomContent.style.transform = 'translateY(0)'
        },3500)
    }else if(action === 'reset'){
        //Title text
        article.title.style.transform = `translateY(${article.title.offsetHeight + 20}px)`
        article.description.style.transform = `translateY(${article.description.offsetHeight + 20}px)`
        //Main image
        article.image.style.transform = `scale(1.5)`
        //Bottom content
        article.bottomContent.style.transform = 'translateY(15vh)'
    }
}

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
const blackGalleryAnimation = {

}
const home_black_btn_Arr = document.getElementsByClassName('home_black_btn');
const home_black_btn_hover_Arr = document.getElementsByClassName('home_btn_hover');
const home_black_btn_hover_background_Arr = document.getElementsByClassName('home_btn_hover_background');
const developer_btn_flex_wrapper = document.querySelector('#developer_btn_flex_wrapper');
//Second animation part variables
const artistGallery = document.querySelector('.artist_gallery_wrapper');
const galleryItems = document.getElementsByClassName('gallery_item');

//Set gallery items hover events
for (let item of galleryItems){
    //Set items text bottom value to hide it
    var textHeight = item.children[0].children[0].offsetHeight;
    console.log(textHeight)
    item.children[0].children[0].style.bottom = `-${textHeight + 50}px`;

    //Set events for items
    item.addEventListener('mouseenter',()=>{
        //reset values
        item.children[0].children[0].style.transition = `unset`;
        item.children[0].children[0].style.bottom = `-${textHeight + 50}px`;
        item.children[0].children[0].style.opacity = '1';


        //animate text
        setTimeout(()=>{
            item.children[0].children[0].style.transition = 'bottom 0.3s cubic-bezier(.43,1,.6,.99)';
            item.children[0].children[0].style.bottom = '0';
        },0)
        
    });
    item.addEventListener('mouseleave',()=>{
        item.children[0].children[0].style.transition = 'bottom 0.3s cubic-bezier(.43,1,.6,.99), opacity 0.5s ease-in-out';
        item.children[0].children[0].style.opacity = '0';
    });
};

homeDark.addEventListener('click',()=>{
    removeHomeMouseOver();
    //new animation for dark block
    homeDark.style.transition = `clip-path ${developerAnimTiming}s cubic-bezier(.72,.01,.12,.99)`;

    homeDark.style.clipPath = 'polygon(200px 0, 100% 0, 100% 100%, 130px 100%)';

    //Home Developer btn
    developer_btn_flex_wrapper.style.width = '150px';
    home_black_btn_Arr[0].style.transition = `transform ${developerAnimTiming}s cubic-bezier(.72,.01,.12,.99), width ${developerAnimTiming}s cubic-bezier(.72,.01,.12,.99)`;
    home_black_btn_Arr[0].style.width = '47px';
    home_black_btn_hover_Arr[0].style.width = '48px';
    
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


//Gallery loader
const galleryLoader = {
    galleryLoader: document.querySelector('.gallery_loader_wrapper'),
    innerSquares: document.querySelectorAll('.loader_innerSquare'),
    iterator: 0
}
const galleryLoaderID = setInterval(()=>{
    if(galleryLoader.iterator >= 4){
        galleryLoader.iterator = 0
    }
    for (const iterator of galleryLoader.innerSquares) {
        iterator.style.display = 'block'
    }
    galleryLoader.innerSquares[galleryLoader.iterator].style.display = 'none'
    galleryLoader.iterator++
}, 300)

//Load cards images
const blackGallery = {
    blackGallery: document.querySelector('.gallery_content'),
    imagesLinks: [
        'https://64.media.tumblr.com/a4ca2fbb6712b472be536a60c87e02f7/tumblr_nrfwxudqvh1s933m6o1_500.png',
        'https://64.media.tumblr.com/7ee1c1bf81570b50e9080a4653685373/tumblr_nq6efov0gM1s933m6o1_500.jpg',
        'https://64.media.tumblr.com/8ed43098163c58cbe30d6225e9de3f40/tumblr_ns9jjraZuh1s933m6o1_1280.jpg'
    ],
    images: [],
    items: document.querySelectorAll('.gallery_item'),
    index: 0,
    isShown: false,
    loadedCounter: 0
}
 
homeDark.addEventListener('click',()=>{
    if(blackGallery.isShown){
        //code 
    }else{
        for (const item of blackGallery.items) {
            var image = new Image();
            image.src = blackGallery.imagesLinks[blackGallery.index];
            item.appendChild(image);
            image.className += 'article_title_image'
            blackGallery.images.push(image.cloneNode(false))
            image.addEventListener('load', ()=>{
                blackGallery.loadedCounter++
                if(blackGallery.loadedCounter === 3){
                    galleryLoader.galleryLoader.style.display = 'none'
                    blackGallery.blackGallery.style.display = 'flex'
                    clearInterval(galleryLoaderID)
                }
            })
            blackGallery.index++;
        };
        blackGallery.isShown = true
    }
});

//Cross variables 
const cross = {
    cross: document.querySelector('.article_cross'),
    rotateDegree: 90,
    isMouseOver: false,
    isMouseOut: true
}
//Rotate the cross
cross.cross.addEventListener('mouseenter', (e)=>{
    if(cross.isMouseOut){
        cross.cross.style.transition = `transform 0.4s cubic-bezier(.07,.99,.36,.99)`
        cross.cross.style.transform = `rotate(${cross.rotateDegree}deg)`
        cross.rotateDegree+=90
    }
    cross.isMouseOut = false
})
cross.cross.addEventListener('mouseleave', (e)=>{
    cross.isMouseOut = true
    cross.cross.style.transition = `transform 0.4s cubic-bezier(.07,.99,.36,.99)`
    cross.cross.style.transform = `rotate(${cross.rotateDegree}deg)`
    cross.rotateDegree+=90
})

const blackBlock = document.querySelector('.home_dark_block');
//Article close animation on cross click
cross.cross.addEventListener('click',()=>{
    blackBlock.style.pointerEvents = 'none';
    article.article.style.clipPath = 'polygon(0 0, 0 0, 0 100%, 0% 100%)';
    setTimeout(()=>{
        //Remove article title image
        article.image.removeChild(article.image.children[0])
        //Remove cloned images to bottom content
        while(article.bottomContent.firstChild){
            article.bottomContent.removeChild(article.bottomContent.firstChild)
        }
        //Reset animation
        articleAnimationTransition('remove')
        articleAnimation('reset')
        blackBlock.style.pointerEvents = 'all'
    },1000)
})

//Article variables
const article = {
    article: document.querySelector('.article'),
    title: document.querySelector('.article_text_box h1'),
    description: document.querySelector('.article_text_box p'),
    image: document.querySelector('.article_title_image'),
    bottomContent: document.querySelector('.article_bottom_content'),
    imageText: document.querySelector('.article_image_text'),
    bottomContent: document.querySelector('.article_bottom_content'),
    arrow: document.querySelector('.article_arrow_up')
}

//Animate article on click
const items = document.querySelectorAll('.gallery_item')
for (const [i, item] of items.entries()) {
    item.addEventListener('click', ()=>{
        //Append article title image
        article.image.appendChild(blackGallery.images[i])

        //Append cloned images to bottom content
        for (let index = 0; index < 2; index++) {
            var clonedImg = blackGallery.images[i].cloneNode(false)
            clonedImg.classList.add('article_additional_image')
            article.bottomContent.appendChild(clonedImg)
        }

        //Manipulate with article overflow
        article.article.style.overflow = 'hidden'
        setTimeout(()=>{
            article.article.style.overflow = 'hidden scroll'
        },4800)

        //start animation
        articleAnimationTransition('set')
        articleAnimation('start')
    })
}

//Reset article animation
articleAnimation('reset')
articleAnimationTransition('set')

//Article scroll to top btn
article.arrow.addEventListener('click', ()=>{
    var smoothScroll = () =>{
        var position = 0;
        var progress = article.article.scrollTop;
        // var easing = (progress)=>{
        //     if(progress < 0.5){
        //         return 16 * Math.pow(progress, 5)
        //     }else{
        //         return 1 - Math.pow(-2 * progress + 2, 5) / 2;
        //     }
        // };
        var move = ()=>{
            progress-=3;
            // position = easing(progress);
            // console.log(position)
            article.article.scroll(0, progress);
            if(progress > 0){
                requestAnimationFrame(move);
            };
        };
        requestAnimationFrame(move);
    };

    smoothScroll()
})

var height = window.innerHeight;
var prevHeight = window.innerHeight;

//Manage gallery cards dimentions
window.addEventListener('resize', (e)=>{
    // get the new width
    height = window.screen.height;
    // compare it to the old height
    if(height > prevHeight) {
        console.log(height/1000);
    }else if(height < prevHeight){
        console.log('descreased');
    };
    // update the old height
    prevHeight = height;
});