import 'normalize.css';
import './styles/style.scss';

let homepage = document.getElementById('homepage');
let gogoroPage = document.getElementById('gogoro-page');
const introEl = document.querySelector('.oh-hey');
let workPage = document.querySelector('.work-page');
let presoPage = document.querySelector('.preso-page');
let backgroundPage = document.querySelector('.background-page');
let job = document.querySelectorAll('.job');
let jobEvents = [];
let currentSlideCount = [];
let currentSlide;
let slideCount;
let projects = document.querySelectorAll('.projects');
let secondaryNav = document.querySelectorAll('.secondary-nav');
let closeSecondaryNav = document.querySelector('.close-secondary-nav');
let date = document.querySelector('.date');
var d = new Date();

// HOMEPAGE
import mags from '../src/img/mags.png';
import clouds from "../src/img/sky_2.mp4";
import hank from "../src/img/hank.mp4";
import cinco from "../src/img/cinco.mp4";

import cinco0 from "../src/img/cinco_0.jpg";
import cinco1 from "../src/img/cinco_1.jpg";
import cinco2 from "../src/img/cinco_2.jpg";

import gogoro0 from "../src/img/gogoro_0.jpg";
import gogoro2 from "../src/img/gogoro_dtl_2.jpg";
import gogoro3 from "../src/img/gogoro_dtl_3.png";
import gogoro4 from "../src/img/gogoro_dtl_4.jpg";
import gogoro5 from "../src/img/gogoro_dtl_5.jpg";
import gogoro6 from "../src/img/gogoro_dtl_6.jpg";
import gogoro7 from "../src/img/gogoro_dtl_7.mp4";
import gogoro8 from "../src/img/gogoro_dtl_8.jpg";
import gogoro9 from "../src/img/gogoro_dtl_9.jpg";
import gogoro10 from "../src/img/gogoro_dtl_10.jpg";
import gogoro11 from "../src/img/gogoro_dtl_11.jpg";
import gogoro12 from "../src/img/gogoro_dtl_12.jpg";
import gogoro13 from "../src/img/gogoro_dtl_13.jpg";

import indigo1 from "../src/img/indigo_1.jpg";
import indigo2 from "../src/img/indigo_2.jpg";
import indigo3 from "../src/img/indigo_3.jpg";
import indigo4 from "../src/img/indigo_4.jpg";
import indigo5 from "../src/img/indigo_5.jpg";
import indigo6 from "../src/img/indigo_6.jpg";
import indigo7 from "../src/img/indigo_7.jpg";
import indigo8 from "../src/img/indigo_8.jpg";
import indigo9 from "../src/img/indigo_9.jpg";
import indigo10 from "../src/img/indigo_10.jpg";

import hank1 from "../src/img/hank_1.jpg";
import hank2 from "../src/img/hank_2.jpg";
import hank3 from "../src/img/hank.mp4";
let hank4 = "https://player.vimeo.com/external/365626808.hd.mp4?s=54344f281ab2ee21649e5a62d05f78ceee4dcee3&profile_id=175"
let hank5 = "https://player.vimeo.com/external/365111331.hd.mp4?s=8824d0e9b078367a7c4d30ca9ebc594585b2f6cc&profile_id=174"


let tjb0 = "https://player.vimeo.com/external/165183648.hd.mp4?s=4fd0a6759a63a06b250ce6f821e96fc491520051&profile_id=119";
import tjb1 from "../src/img/tjb_1.jpg";
import tjb2 from "../src/img/tjb_2.jpg";
import tjb3 from "../src/img/tjb_3.jpg";
import tjb4 from "../src/img/tjb_0.jpg";

import hanour1 from "../src/img/hanour_1.jpg";
let hanour2 = "https://player.vimeo.com/external/232087024.sd.mp4?s=ebcdc83df4851bdc81ce8ba07320dd7db7bfa22b&profile_id=165";
let hanour3 = "https://player.vimeo.com/external/258123440.hd.mp4?s=78db6a34ee1f185ef44094973107d931b6e8e3a9&profile_id=174";
let hanour4 = "https://player.vimeo.com/external/288994448.sd.mp4?s=a8cf4f50df6992db4d18c5e58ee2c8b6e332480c&profile_id=165";
import hanour5 from "../src/img/hanour_2.jpg";
import hanour6 from "../src/img/hanour_3.jpg";

import nextbit1 from "../src/img/nextbit_1.jpg";
import nextbit2 from "../src/img/nextbit_2.mp4";
import nextbit3 from "../src/img/nextbit_3.jpg";
import nextbit4 from "../src/img/nextbit_4.jpg";
import nextbit5 from "../src/img/nextbit_5.png";
import nextbit6 from "../src/img/nextbit_6.jpg";
import nextbit7 from "../src/img/nextbit_7.jpg";
import nextbit8 from "../src/img/nextbit_8.jpg";
import nextbit9 from "../src/img/nextbit_9.jpg";
import nextbit10 from "../src/img/nextbit_10.jpg";
import nextbit11 from "../src/img/nextbit_11.jpg";
import nextbit12 from "../src/img/nextbit_12.jpg";
import nextbit13 from "../src/img/nextbit_13.mp4";
import nextbit14 from "../src/img/nextbit_14.jpg";
import nextbit15 from "../src/img/nextbit_15.jpg";
import nextbit16 from "../src/img/nextbit_16.jpg";
import nextbit17 from "../src/img/nextbit_17.jpg";
import nextbit18 from "../src/img/nextbit_18.jpg";

import quik1 from "../src/img/quik1.jpg";
import quik2 from "../src/img/quik2.jpg";
import quik3 from "../src/img/quik3.png";

import bg1 from "../src/img/bg1.jpg";
import bg2 from "../src/img/bg2.jpg";
import bg3 from "../src/img/bg3.jpg";

document.addEventListener("DOMContentLoaded", () => {

  if (workPage) {

    let workImages = document.querySelectorAll('.work-images');
    let caseStudy = workPage.id;

    let cincoWork = [cinco1, cinco0, cinco2, cinco];
    let gogoroWork = [gogoro2,  gogoro10, gogoro11, gogoro12, gogoro3, gogoro13, gogoro4, gogoro5, gogoro6, gogoro7, gogoro8, gogoro9 ];
    let indigoWork = [indigo1, indigo10, indigo2, indigo3, indigo4, indigo5, indigo6, indigo7, indigo8, indigo9];
    let hanourWork = [hanour5, hanour6, hanour2, hanour3, hanour4, hanour1];
    let tjbWork = [tjb0, tjb3, tjb1, tjb4, tjb2];
    let hankWork = [hank1, hank4, hank3, hank5, hank2,];
    let nextbitWork = [nextbit2, nextbit3, nextbit4, nextbit5, nextbit6, nextbit7, nextbit8, nextbit9, nextbit10, nextbit11, nextbit12, nextbit13, nextbit14 ];

    setTimeout(function() {
      introEl.style.display = 'none';
    }, 3000);

    const injectWork = (client) => {
        for (var i = 0; i < client.length; i++) {
          if (client[i].endsWith(".jpg") | client[i].endsWith(".png")) {
            let img = document.createElement("img");
            img.src = client[i];
            img.setAttribute('class','work-dtl');
            workImages[0].appendChild(img);
          } else {
            let video = document.createElement("video");
            video.src = client[i];
            video.setAttribute('playsinline', '');
            video.muted = true;
            video.autoplay = true;
            video.loop = true;
            video.setAttribute('class','work-dtl');
            workImages[0].appendChild(video);
          }
        }
    }

    if (caseStudy == 'gogoro-page') {
      injectWork(gogoroWork);
    } else if (caseStudy == 'indigo-page') {
      injectWork(indigoWork);
    } else if (caseStudy == 'hanour-page') {
      injectWork(hanourWork);
    } else if (caseStudy == 'tjb-page') {
      injectWork(tjbWork);
    } else if (caseStudy == 'hank-pdx-page') {
      injectWork(hankWork);
    } else if (caseStudy == 'cinco-design-page') {
      injectWork(cincoWork);
    } else if (caseStudy == 'nextbit-page') {
      injectWork(nextbitWork);
    }

  };

  // FIX SAFARI BACK SWIPE BUG
  window.onpageshow = function(event) {
    if (event.persisted) {
      window.location.reload();
    }
  };

  if (homepage) {

    if (window.location.search == '?back=true') {
      introEl.style.display = 'none';

      setTimeout(function() {
        window.history.replaceState({}, document.title, "/");
      }, 500);
    } else {
      // Initial starting place
      location.hash = "hi";
      setTimeout(function() {
        introEl.style.display = 'none';
      }, 3000);
    }

    let workLink = document.querySelectorAll('.link-to-work');

    for (var i = 0; i < workLink.length; i++) {
      workLink[i].addEventListener('click',function(e) {
        e.preventDefault();
        homepage.classList.add('out');
        let destination = this.href;
        setTimeout(function() {
          window.location = destination;
        }, 400);
      });
    }

    // IMAGES AND VIDEOS
    // var cloudsBlock = document.getElementById('clouds');
    // cloudsBlock.src = clouds;

    var hankBlock = document.getElementById('hank');
    hankBlock.src = hank;

    var cincoBlock = document.getElementById('cinco');
    cincoBlock.src = cinco;

    var nextbitBlock = document.getElementById('nextbit-fist');
    nextbitBlock.src = nextbit1;



    const portfolioSection = document.querySelectorAll('.portfolio-section');

    // display portfolio link
    const portfolioSectionHover = () => {
      Array.prototype.forEach.call(portfolioSection, (el, i) => {
        portfolioSection[i].addEventListener('mouseover', () => {
          const activeCursor = el.querySelector('.cursor-follow');
          activeCursor.classList.add('active');
        });
        portfolioSection[i].addEventListener('mouseout', () => {
          const activeCursor = el.querySelector('.cursor-follow');
          activeCursor.classList.remove('active');
        });
      });
    };

    // portfolio link follow cursor
    document.addEventListener('mousemove', (e) => {
      const activePortfolioHover = document.querySelectorAll('.cursor-follow.active');
      Array.prototype.forEach.call(activePortfolioHover, (el) => {
        let offsetRight =  window.innerWidth - e.screenX;
        if (offsetRight > el.offsetWidth + 100) {
          el.setAttribute('style', `left: ${e.pageX + 30}px; top: ${e.pageY - el.parentElement.offsetTop - 20}px;`);
        } else {
          el.setAttribute('style', `left: ${e.pageX - el.offsetWidth - 100}px; top: ${e.pageY - el.parentElement.offsetTop - 20}px;`);
        }
      });
    });

    const me = document.querySelector('.me');
    const hoverFamily = document.querySelector('.bio-images');

    // show family on ae hover
    const meHover = () => {
      me.addEventListener('mouseover', () => {
        hoverFamily.classList.add('active');
      });
      me.addEventListener('mouseout', () => {
        hoverFamily.classList.remove('active');
      });
    };

    meHover();
    portfolioSectionHover();

  }



  if (presoPage || backgroundPage) {
    // setTimeout(function() {
    //   introEl.style.display = 'none';
    // }, 3000);

    date.innerHTML = d.getFullYear();

    projects[0].addEventListener('click', e => {
      e.preventDefault();
      if (! secondaryNav[0].classList.contains('active')) {
        secondaryNav[0].classList.add('active');
      }
    });
    closeSecondaryNav.addEventListener('click', e => {
      secondaryNav[0].classList.remove('active');
    });



  }







  if (backgroundPage) {
    for (var i = 0; i < job.length; i++) {

      slideCount = job[i].querySelectorAll('.grid-item');
      jobEvents.push(job[i].querySelectorAll('.image-slide'));

      currentSlideCount.push(0);
      let currentSlide = i;

      job[i].addEventListener('click', e => {
           e.preventDefault();
           if (currentSlideCount[currentSlide] < jobEvents[currentSlide].length) {
             jobEvents[currentSlide][
               currentSlideCount[currentSlide]
             ].classList.add('active');
             currentSlideCount[currentSlide]++;
           } else {
             let i = jobEvents[currentSlide].length - 1;
             function resetSlides() {
               setTimeout(function() {
                 jobEvents[currentSlide][i].classList.remove('active');
                 i--;
                 if (i >= 0) {
                   resetSlides();
                 }
               }, 90);
             }
             resetSlides();
             currentSlideCount[currentSlide] = 0;
           }
       });
    }
  }


});
