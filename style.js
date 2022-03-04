var butPrevious = document.querySelector('.button-slide .but-previous'),
    butNext = document.querySelector('.button-slide .but-next'),
    slides = document.querySelectorAll('.slideshow .myslides ._1slide'),
    slideIndex = 0,
    numberSlide = slides.length,
    statusSlide = "pause";


var changeSlideNextButton = function(){
    var currentSlide = slides[slideIndex];
    if (statusSlide == "move") {return false} //neu dung thi return false (cho dung yen), neu sai thi bo qua
    statusSlide = "move";

    var statusAnimations = 0; 
    if(slideIndex < numberSlide -1) {
        slideIndex ++;
    }
    else {
        slideIndex = 0;
    }
    var nextSlide = slides[slideIndex];

    // check chuyen dong ket thuc
    var currentSlideEndMove = function(){
        this.classList.remove("current-slide");
        this.classList.remove("hiddenWhenClickNext");
        statusAnimations++;
        if (statusAnimations = 2) {
            statusSlide = "pause"
        };
    }
    
    var nextSlideEndMove = function(){
        this.classList.remove("showWhenClickNext");
        this.classList.add("current-slide");
        statusAnimations++;
        if (statusAnimations = 2) {
            statusSlide = "pause"
        };
    }
    nextSlide.addEventListener("webkitAnimationEnd", nextSlideEndMove);

    currentSlide.addEventListener("webkitAnimationEnd", currentSlideEndMove);

    currentSlide.classList.add("hiddenWhenClickNext");
    nextSlide.classList.add("showWhenClickNext");
}

var changeSlidePreviousButton = function(){
    var currentSlide = slides[slideIndex];

    if (statusSlide == "move") {return false;}
    statusSlide = "move";

    var statusAnimations = 0;

    if (slideIndex > 0) {
        slideIndex--;
    }
    else{
        slideIndex = numberSlide - 1;
    }
    var previousSlide = slides[slideIndex];

    var currentSlideEndMove = function(){
        this.classList.remove("current-slide");
        this.classList.remove("hiddenWhenClickPrevious");
        statusAnimations++;
        if (statusAnimations = 2) {
            statusSlide = "pause"
        };
    }
    var previousSlideEndMove = function(){
        this.classList.remove("showWhenClickPrevious");
        this.classList.add("current-slide");
        statusAnimations++;
        if (statusAnimations = 2) {
            statusSlide = "pause"
        };
    }
    previousSlide.addEventListener("webkitAnimationEnd",previousSlideEndMove);
    currentSlide.addEventListener("webkitAnimationEnd",currentSlideEndMove);

    currentSlide.classList.add("hiddenWhenClickPrevious");
    previousSlide.classList.add("showWhenClickPrevious");
}   
butNext.addEventListener("click", changeSlideNextButton);
butPrevious.addEventListener("click", changeSlidePreviousButton);





var productSlides = document.querySelector(".main .main-flashsale .slide2 .product-slide ul"),
    butProductNext = document.querySelector(".main .main-flashsale .slide2 .button-product-slide .button-product-next"),
    butProductPrevious = document.querySelector(".main .main-flashsale .slide2 .button-product-slide .button-product-previous");

   butProductNext.addEventListener("click",function(){
       productSlides.classList.add("go-right");
   })
   butProductPrevious.addEventListener("click",function(){
       productSlides.classList.remove("go-right");
   })