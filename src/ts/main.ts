import { accordion, changeColor } from './animation';
import ProyectController from './controller/Proyects.controller';
import HTTPClient from './service/HTTPClient';
import { $, $$ } from './utils';

const menu = $('.menu_content_sm');
const mainWrapper = $('.wrapper');

const client = new HTTPClient('https://rickandmortyapi.com');
const controler = new ProyectController(client);

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

$('.prueba')?.addEventListener('click', ()=>{
  controler.getTestLibrary();
});