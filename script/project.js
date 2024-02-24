const projectForm = document.querySelector('.project-form-container');
const successForm = document.querySelector('.success-form');


setTimeout(() => {
    projectForm.classList.toggle('active');
    if(projectForm.classList.contains('active')) {
        setTimeout(() => {
            successForm.classList.toggle('active')
        }, 2000);
    }
}, 1000);




const submitProject = document.querySelector('.project-form button');
console.log(submitProject)
submitProject.addEventListener('click', function() {
    projectForm.classList.add('finished');

    setTimeout(() => {
        window.location = '/index.html'
    }, 3000);
})