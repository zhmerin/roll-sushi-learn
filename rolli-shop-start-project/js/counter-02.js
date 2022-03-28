window.addEventListener('click', function(event){

    let counter;

    if (event.target.dataset.action === "plus" || event.target.dataset.action === "minus"){
    // Находим обертку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");

    //Находим див с числом счетчика
    counter = counterWrapper.querySelector('[data-counter]')
    }

    //Проверяем являетяс ли элемент по которому был совершен клик кнопкой Плюс
    if (event.target.dataset.action === "plus" ) {
       counter.innerText = ++counter.innerText;
    }

    //Проверяем являетяс ли элемент по которому был совершен клик кнопкой Минус
    if (event.target.dataset.action === "minus") {
      
        //проверяем счётчик больше 1
        if(parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;
        }else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1){
            event.target.closest('.cart-item').remove();
            toggleCartStatus();
            calcCartPriceAndDelievry();
        }
    }    
    if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
        calcCartPriceAndDelievry();
    }
});