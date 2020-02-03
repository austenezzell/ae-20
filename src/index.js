import 'normalize.css';
import './styles/style.scss';

let homepage = document.getElementById('homepage');
let examplePage = document.getElementById('example-page');
import mags from '../src/img/mags.png';
import clouds from "../src/img/sky_2.mp4";
import hank from "../src/img/hank.mp4";
import cinco from "../src/img/cinco.mp4";



document.addEventListener("DOMContentLoaded", () => {


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
