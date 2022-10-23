export function accordion(container?: Element){
  const classList  =  container?.classList;

  if(!classList) return;

  !classList.contains('hidden') &&
    classList.toggle('accordion-out');

  classList.remove('hidden');
  classList.toggle('accordion-in');
}


export function changeColor(container?: Element){
  const classList  =  container?.classList;

  if(!classList) return;

  classList.toggle('dark');
  classList.toggle('light');
}