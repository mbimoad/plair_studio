// API 
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let comment = document.getElementById("comment")
let phone = document.getElementById("phone")
let subject = document.getElementById("about")
let phonecode = document.querySelector(".numbers select")

// Production
// let base_url  = "https://api.plairstudio.com";

// Development
let base_url  = "http://localhost:5000";

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
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error))
    } else {
      alert("Please check / fill all the fields!")
    }     
})
