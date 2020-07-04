(function(){
    const slist = document.querySelectorAll(".fade-slider__item");
    const visual = "fade-slider__item--visible";
    
    let index = 0;
    setInterval(function(){
        slist[index].classList.remove(visual);
       index++;
       if (index + 1 > slist.length) {index = 0;}
       slist[index].classList.add(visual);
    }, 5000 );
}())