// Header hamburger
const headerul  = document.querySelector('header ul');
const hamburger  = document.querySelector('header .hamburger');
const hambspans  = document.querySelectorAll('header .hamburger span');
hamburger.addEventListener('click', function() {
  hambspans.forEach(item => item.classList.add('active'))
  headerul.classList.add('active')
})

const linavigator = document.querySelector('header ul li.navigator');

linavigator.addEventListener('click', function() {
  hambspans.forEach(item => item.classList.remove('active'))
  headerul.classList.remove('active')
})


const header = document.querySelector('header .logo');
header.addEventListener('click', function() {
  window.location = './index.html';
})


// redirect link 
const about = document.querySelector('header ul li:nth-child(3) a');
const services = document.querySelector('header ul li:nth-child(4) a');
const careers = document.querySelector('header ul li:nth-child(5) a');
const blog = document.querySelector('header ul li:nth-child(6) a');
const contactus = document.querySelector('header ul li:nth-child(7) a');
const meeting = document.querySelector('header ul li:nth-child(8) a');
const quote = document.querySelector('header ul li:nth-child(9) a:first-child');
const llogin = document.querySelector('header ul li:nth-child(9) a:last-child');
const privacy = document.querySelector('footer .links a:first-child');
const cookie = document.querySelector('footer .links a:nth-child(2)');
const term = document.querySelector('footer .links a:last-child');
const mobilequote = document.querySelector('.mobile-menu button.quotebtn')
mobilequote.addEventListener('click', function() {
  window.location = "./get-quote.html"
})

about.setAttribute("href", "./about.html");
privacy.setAttribute("href", "./about.html");
cookie.setAttribute("href", "./about.html");
term.setAttribute("href", "./about.html");
services.setAttribute("href", "./services.html");
careers.setAttribute("href", "./careers.html");
blog.setAttribute("href", "./blog.html");
contactus.setAttribute("href", "./contact.html");
meeting.setAttribute("href", "./schedule-meeting.html");
llogin.setAttribute("href", "./login.html");
quote.setAttribute("href", "./get-quote.html");


// faq
const faqmenu = document.querySelectorAll('.footer-menu .menu-data:first-child a');

if(faqmenu.length != 0) {
  console.log(faqmenu)
  faqmenu.forEach(item => item.setAttribute("href", "./faq.html"));
}

// index 
const indexmenu = document.querySelectorAll('.footer-menu .menu-data:nth-child(2) ul li a');
if(indexmenu.length != 0) {
  indexmenu[0].setAttribute("href", "./about.html");
  indexmenu[1].setAttribute("href", "./services.html");
  indexmenu[2].setAttribute("href", "./careers.html");
  indexmenu[3].setAttribute("href", "./contact.html");
  indexmenu[4].setAttribute("href", "./schedule-meeting.html");
}


// tools 
const toolsmenu = document.querySelectorAll('.footer-menu .menu-data:nth-child(3) .buttons a');
if(toolsmenu.length != 0) {
  toolsmenu[0].setAttribute("href", "./get-quote.html");
  if(toolsmenu[1]) toolsmenu[1].setAttribute("href", "./login.html");
}


// sosmed 
const sosmedmenu = document.querySelectorAll('.footer-menu .menu-data:nth-child(2) svg');
if(sosmedmenu.length != 0) {
  sosmedmenu.forEach((item, index) => item.addEventListener('click', function() {
    switch(index) {
      case 0: 
        window.location = 'https://www.facebook.com';
        break;
      case 1: 
        window.location = 'https://www.twitter.com';
        break;
      case 2: 
        window.location = 'https://www.instagram.com';
        break;
      case 3: 
        window.location = 'https://www.dribble.com';
        break;
    }
  }))
}


let notifform2 = document.querySelector('.notif-form')
let notifclose2 = document.querySelector('.notif-form svg')
let notifoverlay2 = document.querySelector('.notif-overlay')
notifoverlay2.addEventListener('click', function() {
  this.classList.remove('active'); 
  notifform2.classList.remove('active');

})
notifclose2.addEventListener('click', function() {
  this.classList.remove('active'); 
  notifform2.classList.remove('active');

})

// Api Newslatter 
const emailInput   = document.querySelector('.stayuptodate input');
if(emailInput) {
  
emailInput.setAttribute('type', 'email')
const btnSubscribe = document.querySelector('.stayuptodate button');
// Production
let base_url  = "https://api.plairstudio.com";

// Development
// let base_url  = "http://localhost:5000";
let end_point = "/newsletter";
let url_fetch = base_url + end_point; 

btnSubscribe.addEventListener('click', function() {
  if(emailInput.value && emailInput.value.includes('@')) {
    let data = {email: emailInput.value}
    fetch(url_fetch, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data), 
        mode: 'cors'
    })
    .then(response => {
      if(response.ok) {
        notifform2.classList.add('active')
        notifoverlay2.classList.add('active')
        return response.json(); 
      }
     
    })
    .then(response => {
      console.log(response)
      notifform2.querySelector('h1').innerText = response.message;
    })
    .catch(error => console.log(error))
  } else {
    alert("Please fill / fix the email!")
  }
})
}
