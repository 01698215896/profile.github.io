let success = document.querySelector('#thanhcong');
let khongthanhcong = document.querySelector('#khongthanhcong');
let loi = document.querySelector('#loi');

success.addEventListener('click',()=>{
    let success1 = document.querySelector('.success');
    success1.style.display = 'block';
    setTimeout(() => {
        success1.style.display = 'none';
    }, 3000);
})
khongthanhcong.addEventListener('click',()=>{
    let success1 = document.querySelector('.tt');
    success1.style.display = 'block';
    setTimeout(() => {
        success1.style.display = 'none';
    }, 3000);
})
loi.addEventListener('click',()=>{
    let success1 = document.querySelector('.uu');
    success1.style.display = 'block';
    setTimeout(() => {
        success1.style.display = 'none';
    }, 3000);
})