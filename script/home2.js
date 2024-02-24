let url = window.location.href.split("#"); 
const herotitle  = document.querySelector('.hero.hero3 h1'); 
const heroimage  = document.querySelector('.hero.hero3 img');
const ourmissionimg = document.querySelector('.our-mission.our-mission2 img');
const ourmissionh1 = document.querySelector('.our-mission.our-mission2 .mission-box h1');
const ourmissionp = document.querySelector('.our-mission.our-mission2 .mission-box p');
const statistic = document.querySelector('.statistic');
console.log("Helo")
url = url[url.length-1];
switch(url) {
    case "mobile": 
        herotitle.innerText = "Mobile Development";
        heroimage.setAttribute("src", "./assets/mobile1.webp");
        heroimage.classList.add('mobile');
        ourmissionh1.innerText = "Whatever you need, we can create!"
        ourmissionp.innerText = "We create customized mobile applications for iOS and Android platforms that meet the unique needs of your business.";
        ourmissionimg.setAttribute("src", "./assets/mobile2.webp");
        statistic.style.backgroundImage = 'url("./assets/mobile3.webp")';
        break;
    case "backend":
        herotitle.innerText = "Backend Development";
        heroimage.setAttribute("src", "./assets/backend1.webp");
        heroimage.classList.add('backend');
        ourmissionh1.innerText = "Your application is in good hands"
        ourmissionp.innerText = "Our expert developers design and build robust, scalable, and secure back-end systems to power your applications.";
        ourmissionimg.setAttribute("src", "./assets/backend2.webp");
        statistic.style.backgroundImage = 'url("./assets/backend3.webp")';
        break;
    case "frontend":
        herotitle.innerText = "Frontend Development";
        heroimage.setAttribute("src", "./assets/frontend1.webp");
        heroimage.classList.add('frontend');
        ourmissionh1.innerText = "Consistency is key"
        ourmissionp.innerText = "We create sleek and responsive user interfaces that provide a seamless user experience across all devices and platforms.";
        ourmissionimg.setAttribute("src", "./assets/frontend2.webp");
        statistic.style.backgroundImage = 'url("./assets/frontend3.webp")';
        break;
    case "ui":
         herotitle.innerText = "UI Design";
        heroimage.setAttribute("src", "./assets/ui1.webp");
        heroimage.classList.add('ui');
        ourmissionh1.innerText = "Design is more than our passion"
        ourmissionp.innerText = "Our designers create visually appealing and intuitive user interfaces that enhance the usability and overall experience of your applications.";
        ourmissionimg.setAttribute("src", "./assets/ui2.webp");
        statistic.style.backgroundImage = 'url("./assets/ui3.webp")';
        break;
}


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

const left     = document.querySelector('.arrow-left'); 
const right    = document.querySelector('.arrow-right'); 
const comment  = document.querySelectorAll('.comments .comment'); 
const comments = comment[0].parentElement; 
const time     = '500';

function GetWidthOfCards() {
    // Scroll into normal position 
    var width = getStyle(comment[0], 'flex').split(' ');
    var width = width[width.length - 1].split('px')[0];
    var width = parseInt(width);
    return width; 
}

let typeScroll = "px";

window.onload = function() {
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
      const process = document.querySelectorAll('.theprocess .dotted-process span');
      process.forEach(item => item.addEventListener('click', function() {
          process.forEach(item => item.classList.remove('active'));
          this.classList.add('active');
        clearInterval(processint)
          let turn = this.dataset.turn; 
          const box = document.querySelectorAll('.theprocess .box');    
          if(turn == '1') box.forEach(item => item.style.transform = 'translate(0,0)');
          if(turn == '2') box.forEach(item => item.style.transform = 'translate(-100%,0)');
          if(turn == '3') box.forEach(item => item.style.transform = 'translate(-200%,0)');
      }))
      typeScroll = "%";

      let index = 0; 
const processdot = document.querySelectorAll('.theprocess .dotted-process span'); 
const processbox = document.querySelectorAll('.theprocess .box'); 
const processint = setInterval(() => {

  if(index == processbox.length - 1) {
    index = -1; 
  }

  index++;
  processdot.forEach(item => item.classList.remove('active'));
  processdot[index].classList.add('active');
  processbox.forEach(item => item.style.transform = `translate(-${100*index}%,0)`);
 
}, 2000)
  } else {
    typeScroll = "px";
  }

   // Insert Last Element to First Element
   let lastCards = comment[comment.length - 1]; 
   comments.insertAdjacentElement('afterbegin', lastCards); 
   
   var width = GetWidthOfCards();
   comment.forEach(item => item.style.transform = `translate(-${width}${typeScroll}, 0)`);

   // Give transition 
   setTimeout(() => comment.forEach(item => item.style.transition = `all ${time}ms ease 0s`) ,0);

}

window.onresize = function() {
  if(window.innerWidth <= 767) {
    typeScroll = "%";
  } else {
    typeScroll = "px";
  }
}
//  1      2      3       4     
//       curr

//  2      3       4      1
//        curr


let current = 1; 



right.addEventListener('click', function() {    
    current++;
    var width  = GetWidthOfCards();
    var result = current*width; 
    comment.forEach(item => {
        item.style.transition = `all ${time}ms ease 0s`;
        item.style.transform  = `translate(-${result}${typeScroll},0)`;
    });
    this.setAttribute('disabled', true);
    
    // Insert First Element Into Last Element 
    setTimeout(() => {
        comment.forEach(item => {
            item.style.transition = 'unset';
            item.style.transform  = `translate(-${width}${typeScroll},0)`;
        });
        const firstElement = document.querySelectorAll('.comments .comment')[0];
        comments.insertAdjacentElement('beforeend', firstElement); 
        current = 1; 
        this.removeAttribute('disabled');
    },time);  
})


left.addEventListener('click', function() {    
  var width  = GetWidthOfCards();
  comment.forEach(item => {
      item.style.transition = `all ${time}ms ease 0s`;
      item.style.transform  = `translate(0${typeScroll},0)`;
  });
  this.setAttribute('disabled', true);
  setTimeout(() => {
    const lastElement = document.querySelectorAll('.comments .comment')[comment.length - 1]; 
    comments.insertAdjacentElement('afterbegin', lastElement); 
    
    comment.forEach(item => {
        item.style.transition = 'unset';
        item.style.transform  = `translate(-${width}${typeScroll},0)`;
    });
    this.removeAttribute('disabled');

  }, time);
})




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



const chatbox = document.querySelector('.chatbox'); 
const chatbot = document.querySelector('.chatbot'); 
chatbot.addEventListener('click', function() {
    chatbox.classList.toggle('active');
})


