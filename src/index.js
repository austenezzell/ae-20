import 'normalize.css';
import './styles/style.scss';

let homepage = document.getElementById('homepage');
let gogoroPage = document.getElementById('gogoro-page');

let workPage = document.querySelector('.work-page');
import mags from '../src/img/mags.png';
import clouds from "../src/img/sky_2.mp4";
import hank from "../src/img/hank.mp4";
import cinco from "../src/img/cinco.mp4";

import gogoro2 from "../src/img/gogoro_dtl_2.jpg";
import gogoro3 from "../src/img/gogoro_dtl_3.png";
import gogoro4 from "../src/img/gogoro_dtl_4.jpg";
import gogoro5 from "../src/img/gogoro_dtl_5.jpg";
import gogoro6 from "../src/img/gogoro_dtl_6.jpg";
import gogoro7 from "../src/img/gogoro_dtl_7.mp4";
import gogoro8 from "../src/img/gogoro_dtl_8.jpg";
import gogoro9 from "../src/img/gogoro_dtl_9.jpg";

import indigo1 from "../src/img/indigo_1.jpg";
import indigo2 from "../src/img/indigo_2.jpg";
import indigo3 from "../src/img/indigo_3.jpg";
import indigo4 from "../src/img/indigo_4.jpg";
import indigo5 from "../src/img/indigo_5.jpg";
import indigo6 from "../src/img/indigo_6.jpg";
import indigo7 from "../src/img/indigo_7.jpg";
import indigo8 from "../src/img/indigo_8.jpg";
import indigo9 from "../src/img/indigo_9.jpg";

import hank1 from "../src/img/hank_1.jpg";
import hank2 from "../src/img/hank_2.jpg";
import hank3 from "../src/img/hank.mp4";

let tjb1 = "https://player.vimeo.com/external/165183648.hd.mp4?s=4fd0a6759a63a06b250ce6f821e96fc491520051&profile_id=119";

import hanour1 from "../src/img/hanour_1.jpg";
let hanour2 = "https://player.vimeo.com/external/232087024.sd.mp4?s=ebcdc83df4851bdc81ce8ba07320dd7db7bfa22b&profile_id=165";
let hanour3 = "https://player.vimeo.com/external/258123440.hd.mp4?s=78db6a34ee1f185ef44094973107d931b6e8e3a9&profile_id=174";
let hanour4 = "https://player.vimeo.com/external/288994448.sd.mp4?s=a8cf4f50df6992db4d18c5e58ee2c8b6e332480c&profile_id=165";





document.addEventListener("DOMContentLoaded", () => {

  if (workPage) {
    let workImages = document.querySelectorAll('.work-images');
    let caseStudy = workPage.id;

    let gogoroWork = [gogoro2, gogoro3, gogoro4, gogoro5, gogoro6, gogoro7, gogoro8, gogoro9];
    let indigoWork = [indigo1, indigo2, indigo3, indigo4, indigo5, indigo6, indigo7, indigo8, indigo9];
    let hanourWork = [hanour1, hanour2, hanour3, hanour4];
    let tjbWork = [tjb1];
    let hankWork = [hank1, hank2, hank3];

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
            video.autoplay = true;
            video.muted = true;
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
    }

  };


  if (homepage) {

    const introEl = document.querySelector('.oh-hey');

    if (window.location.search == '?back=true') {
      introEl.style.display = 'none';
    } else {
      // Initial starting place
      location.hash = "hi";
      setTimeout(function() {
        introEl.style.display = 'none';
      }, 3000);
    }

    // IMAGES AND VIDEOS
    var cloudsBlock = document.getElementById('clouds');
    cloudsBlock.src = clouds;

    var hankBlock = document.getElementById('hank');
    hankBlock.src = hank;

    var cincoBlock = document.getElementById('cinco');
    cincoBlock.src = cinco;



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



});
