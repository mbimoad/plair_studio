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