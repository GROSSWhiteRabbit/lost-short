(function(){
const sizeList = document.querySelectorAll(".product-size__item--stock")
const sizeActive = 'product-size__item--active'

sizeList.forEach(function(size){
    size.addEventListener('click', function(){
        sizeList.forEach(function(stock){
            stock.classList.remove(sizeActive)
        })
        size.classList.add(sizeActive)
    })
})
}())