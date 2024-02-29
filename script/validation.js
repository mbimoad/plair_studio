const password = document.querySelector('.inputpassword input'); 
const matching = document.querySelector('.inputpassword.matchpass input'); 
const p        = document.querySelector('.inputpassword p'); 
const backtologin = document.querySelector('.backtologin'); 
const submitbtn = document.querySelector('form button'); 
const formboxlogin = document.querySelector('.form-box.login');
const formnotif    = document.querySelector('.forgotpass-notif.notif'); 

backtologin.addEventListener('click', function() {
    window.location = './index.html';
})

submitbtn.addEventListener('click', function() {
    if(password.value == "" && matching.value == "") {
        p.classList.add('wrong');
        matching.classList.add('wrong'); 
    } else {
        if(password.value !== matching.value) {
            submitbtn.setAttribute('type', 'button');
            matching.classList.add('wrong'); 
            p.classList.add('wrong');
        } else {
            matching.classList.remove('wrong'); 
            p.classList.remove('wrong');
            formboxlogin.classList.add('sended');
            formnotif.classList.add('sended');
        }
    }
})

const eye = document.querySelectorAll('.eye');
eye.forEach(item => item.addEventListener('click', function() {
    var input = this.previousElementSibling;
    if(this.getAttribute('src') == "./assets/visibility.svg") {
        input.setAttribute('type', 'text');
        this.src = './assets/visibility_off.svg';
    } else {
        input.setAttribute('type', 'password');
        this.src = "./assets/visibility.svg"
    }
}))