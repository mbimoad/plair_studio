
const eye = document.querySelectorAll('.eye');
const backtofirststep = document.querySelector('.backtofirststep');
const processstep = document.querySelector('.process-step');
const confirmemailbox = document.querySelector('.confirmemailbox');
const customizebox = document.querySelector('.customizebox');
const registerbox = document.querySelector('.registerbox');
const forgotpassword = document.querySelector('.forgotpassword'); 
const backtologin = document.querySelectorAll('.backtologin'); 
const layer1   = document.querySelector('.main .layer:first-child');
const layer2   = document.querySelector('.main .layer:last-child');
const register = layer2.querySelector('.register'); 
const forgotpassbox = layer2.querySelector('.forgotpassbox'); 
const login    = layer1.querySelector('.login'); 
const circles  = document.querySelectorAll('.circle');
console.log(register);
forgotpassword.addEventListener('click', function() {
    layer1.classList.add('forgotpass');
    layer2.classList.add('forgotpass');
    register.classList.add('forgotpass');
    login.classList.add('forgotpass');
    forgotpassbox.classList.add('active');
})






const resetbtn = document.querySelectorAll(".resetbtn");
const forgotpassnotif = document.querySelector('.forgotpass-notif');
resetbtn.forEach(item => item.addEventListener('click', function() {
    forgotpassbox.classList.remove('active');
    forgotpassnotif.classList.add('sended');
    forgotpassbox.classList.add('sended');
}))


backtologin.forEach(item => item.addEventListener('click', function() {
    layer1.classList.remove('forgotpass');
    layer2.classList.remove('forgotpass');
    register.classList.remove('forgotpass');
    login.classList.remove('forgotpass');
    forgotpassbox.classList.remove('active');
    forgotpassnotif.classList.remove('sended');
    registerbox.classList.remove('active');
    processstep.classList.remove('active');
}))


const registerbtn  = document.querySelector('.registerbtn');
const registernext = document.querySelector('.registernext');
const process      = document.querySelector('progress');

registerbtn.addEventListener('click', function() {
    layer1.classList.add('forgotpass');
    layer2.classList.add('forgotpass');
    login.classList.add('forgotpass');
    register.classList.add('forgotpass');
    registerbox.classList.add('active');
    processstep.classList.add('active');
})
const confirmbtnspan = document.querySelector('.confirmbtn span');


// SEtup for interval and timeout
let runprocess1 = null;
let runprocess2 = null;
let runprocess3 = null;
let timeout1    = null;


registernext.addEventListener('click' , function() {
  let nilai = 0; 
  runprocess1 = setInterval(() => {
      nilai++; 
      process.value = nilai; 
      if(nilai == 50) {
        circles[0].classList.add('finish');
        circles[1].classList.add('active');
        clearInterval(runprocess1);
      }
  }, 0)  

  timeout1 = setTimeout(() => {
      let value = 0; 
      let message = "";
      runprocess2 = setInterval(() => {

          if(value == 3) {
            clearInterval(runprocess2);
            // if the runprocess2 success
            let nilai = process.value; 
            runprocess3 = setInterval(() => {
                nilai++; 
                process.value = nilai; 
                if(nilai == 100) {
                  circles[0].classList.add('finish');
                  circles[1].classList.add('finish');
                  circles[2].classList.add('active');
                  clearInterval(runprocess3);
                  customizebox.classList.add('active');
                  confirmemailbox.classList.add('move');
                }
            }, 0)  

          }
          if(message == "....") message = "";
          value++; 
          confirmbtnspan.innerHTML = message; 
          message += ".";
      }, 500);
  }, 500);

  registerbox.classList.add('move');
  confirmemailbox.classList.add('active');
})




const passwd      = document.querySelectorAll('.passwd'); 
const confirmpass = document.querySelectorAll('.confirmpass'); 
const line        = document.querySelectorAll('.line'); 


passwd.forEach(item => item.addEventListener('input', function(e) {    
    // if value not null
    if(this.value != "") {
        line[0].classList.add('active');
        // if panjangnya lebih dari 5
        if(this.value.length > 5) {
            line[1].classList.add('active');
            // if berisi nomor
            if(this.value.includes('1') || this.value.includes('2') || this.value.includes('3') || this.value.includes('4') || this.value.includes('5') || this.value.includes('6') || this.value.includes('7') || this.value.includes('8') || this.value.includes('9')) {
                line[2].classList.add('active');
                // if berisi huruf besar
                if(e.data == e.data.toUpperCase()) {
                    line[3].classList.add('active');
                    // if berisi specialchars
                    if(this.value.includes('|') || this.value.includes('!') || this.value.includes('"') || this.value.includes("'")) {
                        line[4].classList.add('active');
                    } else {
                        line[4].classList.remove('active');
                    }
                } else {
                    line[3].classList.remove('active');
                    line[4].classList.remove('active');
                }
            } else {
                line[2].classList.remove('active');
                line[3].classList.remove('active');
                line[4].classList.remove('active');
            }
        } else {
            line[1].classList.remove('active');
            line[2].classList.remove('active');
            line[3].classList.remove('active');
            line[4].classList.remove('active');
        }
    } else {
        line[0].classList.remove('active');
        line[1].classList.remove('active');
        line[2].classList.remove('active');
        line[3].classList.remove('active');
        line[4].classList.remove('active');

    }       
}))


const continuebtn = document.querySelector('.continuebtn');
console.log(continuebtn);
const welcomebox  = document.querySelector('.welcomebox');
continuebtn.addEventListener('click', function() {
    welcomebox.classList.add('active');
    customizebox.classList.add('move'); 
    processstep.classList.add('move');
})


// preview image 
const fileupload = document.getElementById("file-upload"); 
const previewImage = document.querySelector('.previewImage');

fileupload.addEventListener('change', function(event) {
    console.log(event.target.files.length);
    if (event.target.files.length > 0) {
        previewImage.src = URL.createObjectURL(event.target.files[0])
        // previewImage.style.display = 'block';
      }
      // 👇️ reset file input once you're done
      fileupload.value = null;
})


backtofirststep.addEventListener('click', function() {
    clearInterval(runprocess1);
    clearInterval(runprocess2);
    clearInterval(runprocess3);
    clearTimeout(timeout1);
    let nilai = process.value; 
    runprocess1 = setInterval(() => {
        nilai--;
        process.value = nilai--; 
        if(nilai == 0) {
          circles[0].classList.remove('finish');
          circles[1].classList.remove('active');
          clearInterval(runprocess1);
        }
    }, 0)  

    registerbox.classList.remove('move');
    confirmemailbox.classList.remove('active');
})

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