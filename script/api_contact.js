// API 
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let comment = document.getElementById("comment")
let phone = document.getElementById("phone")
let subject = document.getElementById("about")
let phonecode = document.querySelector(".numbers select")
let notifform = document.querySelector('.notif-form')
let notifclose = document.querySelector('.notif-form svg')
let notifoverlay = document.querySelector('.notif-overlay')
notifoverlay.addEventListener('click', function() {
  this.classList.remove('active'); 
  notifform.classList.remove('active');

})
notifclose.addEventListener('click', function() {
  this.classList.remove('active'); 
  notifform.classList.remove('active');

})


// Production
let base_url  = "https://api.plairstudio.com";

// Development
// let base_url  = "http://localhost:5000";

let end_point = "/contact_us";
let url_fetch = base_url + end_point; 

const submitbtn = document.querySelector('form button');
submitbtn.addEventListener('click', function() {
    if(firstname.value && lastname.value && email.value && comment.value && phone.value && subject.value && phonecode.value) {
        let phoneNumber = `(${phonecode.value})${phone.value}`;

        let data = {
          first_name: firstname.value,
          last_name: lastname.value,
          email: email.value,
          message: comment.value,
          phone: phoneNumber,
          subject: subject.value,
        };


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
      alert("Please check / fill all the fields!")
    }     
})


