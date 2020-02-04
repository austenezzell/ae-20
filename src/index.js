import 'normalize.css';
import './styles/style.scss';

let homepage = document.getElementById('homepage');
let gogoroPage = document.getElementById('gogoro-page');
let examplePage = document.getElementById('example-page');
import mags from '../src/img/mags.png';
import clouds from "../src/img/sky_2.mp4";
import hank from "../src/img/hank.mp4";
import cinco from "../src/img/cinco.mp4";

import gogoro1 from "../src/img/gogoro_dtl_1.jpg";
import gogoro2 from "../src/img/gogoro_dtl_2.jpg";
import gogoro3 from "../src/img/gogoro_dtl_3.png";
import gogoro4 from "../src/img/gogoro_dtl_4.jpg";
import gogoro5 from "../src/img/gogoro_dtl_5.jpg";
import gogoro6 from "../src/img/gogoro_dtl_6.jpg";
import gogoro7 from "../src/img/gogoro_dtl_7.mp4";
import gogoro8 from "../src/img/gogoro_dtl_8.jpg";
import gogoro9 from "../src/img/gogoro_dtl_9.jpg";




document.addEventListener("DOMContentLoaded", () => {

  if (gogoroPage) {

    let gogoroWork = [gogoro1, gogoro2, gogoro3, gogoro4, gogoro5, gogoro6, gogoro7, gogoro8, gogoro9];
    let workImages = document.querySelectorAll('.work-images');



    for (var i = 0; i < gogoroWork.length; i++) {

      if (gogoroWork[i].endsWith(".mp4")) {
        let video = document.createElement("video");
        video.src = gogoroWork[i];
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.setAttribute('class','work-dtl');
        workImages[0].appendChild(video);
      } else {
        let img = document.createElement("img");
        img.src = gogoroWork[i];
        img.setAttribute('class','work-dtl');
        workImages[0].appendChild(img);
      }

    }


  };


  if (homepage) {

    var cloudsBlock = document.getElementById('clouds');
    cloudsBlock.src = clouds;

    var hankBlock = document.getElementById('hank');
    hankBlock.src = hank;

    var cincoBlock = document.getElementById('cinco');
    cincoBlock.src = cinco;

    // Initial starting place
    location.hash = "hi";

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

  if (examplePage) {
    console.log('example page. dont forget to add page name and template to webpack dev and production.');
  }

});
