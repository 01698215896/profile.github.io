let btnItem = document.querySelectorAll('.product_item')
btnItem.forEach((button) =>{
    button.addEventListener('click',(e)=>{
        let img = e.target.parentNode.querySelector('.img img').src;
        let name = e.target.parentNode.querySelector('.text_product h3').textContent;
        let price = e.target.parentNode.querySelector('.text_product p').textContent;
        let quantity = e.target.parentNode.querySelector('#dulieu').value;

        let LocalStr = {
            img: img,
            name: name,
            price: price,
            quantity: quantity
        };
        localStorage.setItem('product', JSON.stringify(LocalStr));
    })
})