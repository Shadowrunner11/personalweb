import { throttle } from 'throttle-debounce';
import { accordion, changeColor } from './animation';
import ProyectController from './controller/Proyects.controller';
import { $, $$, keyBy } from './utils';

const menu = $('.menu_content_sm');
const mainWrapper = $('.wrapper');

const controler = new ProyectController('https://05g5n4.deta.dev/graphql');

$('.menu_button')
  ?.addEventListener('click', function(){

    (this as Element).classList.toggle('animated-menu');
    menu && accordion(menu);
  });

$('.change-theme')
  ?.addEventListener('click', function(){
    $$('.image-container',this).forEach( e =>{
      e.classList.toggle('hidden');
    });
    mainWrapper && changeColor(mainWrapper);
  });



controler.getLanguageAssets()
  .then((data)=>{
    const dataByLabel = keyBy('label', data);
    $$('.carousel > div > div').forEach((element)=>{
      if(!element.textContent) return;

      const {url} = dataByLabel[element.textContent.toLowerCase()] ?? {};

      (element.parentElement as HTMLElement).style.backgroundImage = `url(${url})`;

    });
  });


$('.carousel')
  ?.addEventListener('mousemove', throttle(500, function(event){
    const  isOutBounds = window.document.body.offsetWidth
      - (this as HTMLElement).offsetWidth < (event as MouseEvent).clientX;

    if(isOutBounds){
      this.classList.add('rotate');
      this.classList.remove('rotate-back');

    }else{

      this.classList.remove('rotate');
      this.classList.add('rotate-back');
    }
  }));