function getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
      // sanitize property name to css notation
      // (hypen separated words eg. font-Size)
      styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
      return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
      // sanitize property name to camelCase
      styleProp = styleProp.replace(/\-(\w)/g, function(str, letter) {
        return letter.toUpperCase();
      });
      value = el.currentStyle[styleProp];
      // convert other units to pixels on IE
      if (/^\d+(em|pt|%|ex)?$/i.test(value)) { 
        return (function(value) {
          var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
          el.runtimeStyle.left = el.currentStyle.left;
          el.style.left = value || 0;
          value = el.style.pixelLeft + "px";
          el.style.left = oldLeft;
          el.runtimeStyle.left = oldRsLeft;
          return value;
        })(value);
      }
      return value;
    }
}

const chatbox = document.querySelector('.chatbox'); 
const chatbot = document.querySelector('.chatbot'); 






const arrowchat = document.querySelector('.chatbox .arrow'); 

console.log(arrowchat);
arrowchat.addEventListener('click', function() {
    console.log('sini');
    console.log(chatbox);
    chatbox.classList.remove('active');
})



chatbot.addEventListener('click', function() {
    chatbox.classList.toggle('active');
})




window.onload = function(e) {
    document.querySelector('body').classList.add('show');
    document.querySelector('.hero').classList.add('show');
    document.querySelector('.our-mission').classList.add('show');
    document.querySelector('.our-services').classList.add('show');
    document.querySelector('.statistic').classList.add('show');
    document.querySelector('.theprocess').classList.add('show');
    document.querySelector('.consultation').classList.add('show');
    document.querySelector('.stayuptodate').classList.add('show');
    document.querySelector('.footer-menu').classList.add('show');


    if(window.innerWidth <= 767) {
        const process = document.querySelectorAll('.dotted-process span');
        process.forEach(item => item.addEventListener('click', function() {
            process.forEach(item => item.classList.remove('active'));
            this.classList.add('active');

            let turn = this.dataset.turn; 
            const box = document.querySelectorAll('.theprocess .box');    
            if(turn == '1') box.forEach(item => item.style.transform = 'translate(0,0)');
            if(turn == '2') box.forEach(item => item.style.transform = 'translate(-100%,0)');
            if(turn == '3') box.forEach(item => item.style.transform = 'translate(-200%,0)');
        }))
    }
    
}



let min = `<svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.79492 2C1.51159 2 1.27409 1.90417 1.08242 1.7125C0.890755 1.52083 0.794922 1.28333 0.794922 1C0.794922 0.716667 0.890755 0.479167 1.08242 0.2875C1.27409 0.0958333 1.51159 0 1.79492 0H13.7949C14.0783 0 14.3158 0.0958333 14.5074 0.2875C14.6991 0.479167 14.7949 0.716667 14.7949 1C14.7949 1.28333 14.6991 1.52083 14.5074 1.7125C14.3158 1.90417 14.0783 2 13.7949 2H1.79492Z" fill="#542AAD"/>
</svg>`;

let plus = `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 8H1.5C1.21667 8 0.979167 7.90417 0.7875 7.7125C0.595833 7.52083 0.5 7.28333 0.5 7C0.5 6.71667 0.595833 6.47917 0.7875 6.2875C0.979167 6.09583 1.21667 6 1.5 6H6.5V1C6.5 0.716667 6.59583 0.479167 6.7875 0.2875C6.97917 0.0958333 7.21667 0 7.5 0C7.78333 0 8.02083 0.0958333 8.2125 0.2875C8.40417 0.479167 8.5 0.716667 8.5 1V6H13.5C13.7833 6 14.0208 6.09583 14.2125 6.2875C14.4042 6.47917 14.5 6.71667 14.5 7C14.5 7.28333 14.4042 7.52083 14.2125 7.7125C14.0208 7.90417 13.7833 8 13.5 8H8.5V13C8.5 13.2833 8.40417 13.5208 8.2125 13.7125C8.02083 13.9042 7.78333 14 7.5 14C7.21667 14 6.97917 13.9042 6.7875 13.7125C6.59583 13.5208 6.5 13.2833 6.5 13V8Z" fill="#542AAD"/>
</svg>`;

const questionsitems = document.querySelectorAll('.questions-item'); 
questionsitems.forEach(item => item.addEventListener('click', function() {
    this.classList.toggle('active');
    if(this.classList.contains('active')) {
        this.querySelector('.open-question').innerHTML = min;
    } else {
        this.querySelector('.open-question').innerHTML = plus;
    }

}))




