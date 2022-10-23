import { accordion, changeColor } from './animation';
import { $, $$ } from './utils';

const menu = $('.menu_content_sm');
const mainWrapper = $('.wrapper');

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