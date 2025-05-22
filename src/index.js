// import 'normalize.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './styles/main.scss';
// import './index.html';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


const swiper = new Swiper('.slider-teacher', {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    modules: [Navigation, Pagination],

});

var acc = document.getElementsByClassName("accordion__btn");
var i;


for (i = 0; i < acc.length; i++) {
 acc[i].addEventListener("click", function() {
   this.classList.toggle("active");
   var panel = this.nextElementSibling;
   if (panel.style.maxHeight) {
     panel.style.maxHeight = null;
   } else {
     panel.style.maxHeight = panel.scrollHeight + "px";
   }
 });
}