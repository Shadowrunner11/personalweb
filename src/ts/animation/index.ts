export function accordion(container?: Element){
  const classList  =  container?.classList;

  if(!classList) return;

  !classList.contains('hidden') &&
    classList.toggle('accordion-out');

  classList.remove('hidden');
  classList.toggle('accordion-in');
}


export function changeColor(container?: Element){
  console.log('🚀 ~ file: index.ts ~ line 15 ~ changeColor ~ container', container);
  const classList  =  container?.classList;

  if(!classList) return;

  !classList.contains('dark-init') && classList.toggle('dark');

  classList.remove('dark-init');
  classList.toggle('light');
}