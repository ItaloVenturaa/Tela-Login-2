const envolta = document.querySelector('.envolta');
const loginlink = document.querySelector('.login-link');
const resgistrarlink = document.querySelector('.resgistrar-link');
const btnLogin = document.querySelector('.btLogin');
const iconfechar = document.querySelector('.icon-fechar');

resgistrarlink.addEventListener('click', ()=> {
    envolta.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    envolta.classList.remove('active');
});

btnLogin.addEventListener('click', ()=> {
    envolta.classList.add('active-popup');
});

iconfechar.addEventListener('click', ()=> {
    envolta.classList.remove('active-popup');
});