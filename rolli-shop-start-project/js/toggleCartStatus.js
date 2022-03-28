function toggleCartStatus(){

    const cartWrapper = document.querySelector('.cart-wrapper');
    const carEmptyBage = document.querySelector('[data-cart-empty]')

    const orderForm = document.querySelector('#order-form');

    if (cartWrapper.children.length > 0) {
        console.log('full')
        carEmptyBage.classList.add('none')
        orderForm.classList.remove('none')
    } else {
        console.log('empty')
        carEmptyBage.classList.remove('none')
        orderForm.classList.add('none')
    }
}
    
