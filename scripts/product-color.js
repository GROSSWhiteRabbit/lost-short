(function () {
    
    const productList = document.querySelectorAll(".product__item")
    const colorList = document.querySelectorAll(".product-color__item");
    const colorActive = "product-color__item--active";

    colorList.forEach(function (color) {
        color.addEventListener('click', function () {
            colorList.forEach(function (color__item) {
                color__item.classList.remove(colorActive)
            });
            color.classList.add(colorActive);

            const nameColor = color.getAttribute("data-color")
            productList.forEach(function(product){
                product.classList.remove("product__item--active")
            })
            const productActive = document.querySelector(`.product__item--color--${nameColor}`)
            
            productActive.classList.add("product__item--active")
        });
    });
}())