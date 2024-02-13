const currentdate = document.querySelector('.current-date'); 
const days        = document.querySelector('.days')

const prev        = document.querySelector('.prev');
const next        = document.querySelector('.next');



let date   = new Date(); 
let year   = date.getFullYear();
let month  = date.getMonth();  
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'Jule', 'August', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
    // Create Date 
    let day = ''; 

    // Get last date of month 
    let firsdate = new Date(year, month,     1).getDay();
    let lastdate = new Date(year, month + 1, 0).getDate();
    let lastdateoflastMOnth = new Date(year, month, 0).getDate();
    let lastdateofmonth     = new Date(year, month,lastdate).getDay();

    // last date of last month 
    for(let i=firsdate; i>0; i--) day += `<li class="active">${lastdateoflastMOnth - i + 1}</li>`;
    for(let i=1; i<=lastdate; i++) {
        let istoday = i === date.getDate() && month === new Date().getMonth() && year === new Date().getFullYear() ? 'today' : '';
        day += `<li class="${istoday}">${i}</li>`;
    }
    for(let i=lastdateofmonth; i<6; i++) day += `<li class="active">${i - lastdateofmonth + 1}</li>`;


    // Fill the date 
    days.innerHTML = day;
    // February 2024
    currentdate.innerHTML = `${months[month]} ${year}`;
}
renderCalendar();


prev.addEventListener('click', function() {
    month--;

    if(month < 0 || month > 11) {
        date = new Date(year, month); 
        year = date.getFullYear();
        month = date.getMonth();
    } else {
        date = new Date(); 
    }

    renderCalendar();
    
})
next.addEventListener('click', function() {
    month++;


    
    if(month < 0 || month > 11) {
        date = new Date(year, month); 
        year = date.getFullYear();
        month = date.getMonth();
    } else {
        date = new Date(); 
    }

    renderCalendar();
})



document.addEventListener('click', function(e) {
    let isday = e.target.parentElement; 
    if(isday.classList.contains('days')) e.target.classList.toggle('active');

    if(e.target.classList.contains('globe-item')) {
        let isi = e.target.innerText; 
        document.querySelector('.globe-current').innerHTML = isi;
    }
})



const globe = document.querySelector('.globe'); 
const globeitems = document.querySelector('.globe-items');
globe.addEventListener('click', function() {
    globe.querySelector('.globe-items').classList.toggle('active'); 
})


let timezonelist = []; 
let list = '';
(async function() {
    const timezone = await fetch('./assets/timezone.json').then(response => response.json()); 
    display_timezone(timezone);
    list += timezonelist.map(item => `<div class="globe-item">${item.timezone} (${item.timelist})</div>`).join(''); 
    globeitems.innerHTML = list; 
}())

    function display_timezone(vtimezone) {
        vtimezone.forEach(item => {
            tz=item.timezone; 
            str = new Date().toLocaleString("en-NZ", {timeZone: tz, timeStyle: 'short'}); 
            str = str.split(' ').join(''); 
            obj = {"timezone": tz,"timelist": str}
            timezonelist.push(obj); 
        });
    }



(async function() {
    const timezone  = await fetch('./assets/timezone.json').then(response => response.json()); 
   
}());

console.log(list);