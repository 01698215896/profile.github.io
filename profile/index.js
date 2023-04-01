let lable = document.querySelector('label');
console.log(lable);
lable.addEventListener('click', () => {
    let body = document.querySelector('body');
    body.classList.toggle('drak')

})