function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
}
    
ibg();

$(document).ready(function(){
    $('.intro_block').slick({
        speed: 300,
        infinite: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});
