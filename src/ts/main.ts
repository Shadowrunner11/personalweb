import { accordion, changeColor } from './animation';
import { $, $$ } from './utils';
import ProyectController from './controller/Proyects.controller';
import HTTPClient from './service/HTTPClient';

const menu = $('.menu_content_sm');
const mainWrapper = $('.wrapper');

const clientService  = new HTTPClient('https://rickandmortyapi.com');
const controllerGrpahql = new ProyectController(clientService);

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

$('.prueba')
  ?.addEventListener('click', async ()=>{
    const {value} = await controllerGrpahql.getTestLibrary();
    console.log('🚀 ~ file: main.ts ~ line 29 ~ $ ~ value', value);
  });