export function $ (selector: string, node= document.body){
  return node.querySelector(selector);
}

export function $$(selector: string, node= document.body){
  return [...node.querySelectorAll(selector)];
}

export function keyBy(key: string, data:Record<string, any>[]){
  const result = {};
  data
    .forEach(element=> result[element[key]] = element);

  return result;
}