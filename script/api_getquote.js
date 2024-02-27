// API 
let vname = document.getElementById("name");
let project = document.getElementById("project")
let email = document.getElementById("email")
let description = document.querySelector("textarea#about")
let number = document.getElementById("number")
let budget = document.getElementById("budget")
let date = document.querySelector(".inputs input.date")
let month = document.querySelector(".inputs input.month")
let years = document.querySelector(".inputs input.years")
const successformh1 = document.querySelector('.success-form h1');


date.addEventListener('input', function(e) {
  if (this.value.length >= 2) 
    this.value = this.value.slice(0,2)
})

month.addEventListener('input', function(e) {
  if (this.value.length >= 2) 
    this.value = this.value.slice(0,2)
})

years.addEventListener('input', function(e) {
  if (this.value.length >= 4) 
    this.value = this.value.slice(0,4)
})


// Production
// let base_url  = "https://api.plairstudio.com";

// Development
let base_url  = "http://localhost:5000";

let end_point = "/get_quote";
let url_fetch = base_url + end_point; 

const submitbtn = document.querySelector('form button');
submitbtn.addEventListener('click', function() {
    let resultDate = ''; 
    if(date.value.length == 2 && month.value.length == 2 && years.value.length == 4) resultDate = `${date.value}-${month.value}-${years.value}`
    if(vname.value && project.value && email.value && description.value && number.value && budget.value && resultDate) {
        let data = {
          name: vname.value,
          project_name: project.value,
          email: email.value,
          project_desc: description.value,
          phone: number.value,
          budget: budget.value,
          deadline: resultDate
        };
        fetch(url_fetch, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data), // Ubah objek datax  menjadi string JSON sebelum mengirimkannya
            mode: 'cors'
        })
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error))
    } else {
      alert("Please check / fill all the fields!")
    }     
})
