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

window.onload = function() {
    // Insert Last Element to First Element
    let lastCards = comment[comment.length - 1]; 
    comments.insertAdjacentElement('afterbegin', lastCards); 
    
    var width = GetWidthOfCards();
    comment.forEach(item => item.style.transform = `translate(-${width}px, 0)`);

    // Give transition 
    setTimeout(() => comment.forEach(item => item.style.transition = `all ${time}ms ease 0s`) ,0);
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
        item.style.transform  = `translate(-${result}px,0)`;
    });
    this.setAttribute('disabled', true);
    
    // Insert First Element Into Last Element 
    setTimeout(() => {
        comment.forEach(item => {
            item.style.transition = 'unset';
            item.style.transform  = `translate(-${width}px,0)`;
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
      item.style.transform  = `translate(0px,0)`;
  });
  this.setAttribute('disabled', true);
  setTimeout(() => {
    const lastElement = document.querySelectorAll('.comments .comment')[comment.length - 1]; 
    comments.insertAdjacentElement('afterbegin', lastElement); 
    
    comment.forEach(item => {
        item.style.transition = 'unset';
        item.style.transform  = `translate(-${width}px,0)`;
    });
    this.removeAttribute('disabled');

  }, time);
})
