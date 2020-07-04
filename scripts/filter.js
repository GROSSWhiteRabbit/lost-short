(function(){

const elem = document.querySelector('.products__list');
const iso = new Isotope( elem, {
  // options
  itemSelector: '.products__item',
  filter: '.new'
});



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
        const nameFilter = control.getAttribute("data-filter")
        
        iso.arrange({
    
            filter: `.${nameFilter}`
          });
    });
});
})()
