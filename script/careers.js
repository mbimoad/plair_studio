document.addEventListener('click', function(e) {
    if(e.target.classList.contains('card')) {
        let element = e.target;
        if(element.classList.contains('unboxed')) {
            element.classList.toggle('unboxed'); 
        } else {
            document.querySelectorAll('.card').forEach(item => item.classList.remove('unboxed'));
            element.classList.toggle('unboxed'); 
        }
    }

    if(e.target.classList.contains('btnapply')) {
        let element = e.target; 
        document.querySelector('.box-white').classList.toggle('active'); 
        document.querySelector('.overlay').classList.toggle('active'); 
    }

    if(e.target.classList.contains('overlay')) {
        let element = e.target; 
        document.querySelector('.box-white').classList.toggle('active'); 
        document.querySelector('.overlay').classList.toggle('active'); 
    }
})


