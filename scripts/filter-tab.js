(function(){

    const tabList = document.querySelectorAll(".tab__item")
    console.log(tabList)
   const tabAktive = 'tab__item--active'
    
    
    
    const filterItem = document.querySelectorAll(".filter__item");
    const filterLink = document.querySelectorAll(".filter__link");
    
    const filterAtive = "filter__item--active";
    
    filterLink.forEach(function(control) {
        control.addEventListener("click", function(e) {
            e.preventDefault();
            
            filterLink.forEach(function(link){
                link.closest('.filter__item').classList.remove(filterAtive)
            });
            control.closest(".filter__item").classList.add(filterAtive)
            const nametab = control.getAttribute("data-filter")
            tabList.forEach(function(el){
                el.classList.remove(tabAktive)
            });
            const activEl = document.querySelector(`.tab__item--${nametab}`)
            console.log(activEl)
            activEl.classList.add(tabAktive)
            
        });
    });
})()
    