const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.main-nav');


const handleClick = () => {
  hamburger.classList.toggle('hamburger-active');
  navigation.classList.toggle('slide');
};

hamburger.addEventListener('click', handleClick);