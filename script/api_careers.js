// API 
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
let phonecode = document.querySelector(".numbers select")
let country = document.getElementById("country")
let memo = document.getElementById("comment")

// Production
// let base_url  = "https://api.plairstudio.com";

// Development
let base_url  = "http://localhost:5000";

let end_point = "/careers";
let url_fetch = base_url + end_point; 

const submitbtn = document.querySelector('form button');
submitbtn.addEventListener('click', function() {
    if(firstname.value && lastname.value && email.value && memo.value && phone.value && country.value && phonecode.value) {
        let phoneNumber = `(${phonecode.value})${phone.value}`;

        let data = {
          first_name: firstname.value,
          last_name: lastname.value,
          email: email.value,
          phone: phoneNumber,
          country_of_origin: country.value,
          memo: memo.value,
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
