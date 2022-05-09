import image from './brick-wall-1834784_1920.jpg'
import './style.css'

const indexContentBuilder = (() => {
  const content = document.createElement('div');
  content.id = 'index'

  const makeHeader = () => {
    const header = document.createElement('header');
    const headerHeader = document.createElement('h1');
    header.appendChild(headerHeader);
    headerHeader.textContent = 'My Restaurant';
    headerHeader.classList.add('center')
  
    return headerHeader;
  };
  
  const addImage = () => {
    const img = new Image();
    const imgWrapper = document.createElement('div')
    img.src = image;
    img.width = 800;
    imgWrapper.appendChild(img)
    imgWrapper.classList.add('center')
  
    return imgWrapper;
  };
  
  const addText = () => {
    const main = document.createElement('main');
    const paragraph = document.createElement('p');
    paragraph.textContent = "My Restaurant is so nice and everyone loves it except some person who doesn't know who they are or who doesn't know their place. I will burn em to the ground";
  
    main.appendChild(paragraph);
    main.classList.add('center')
  
    return main;
  };

  const buildIndex = () => {
    content.appendChild(makeHeader());
    content.appendChild(addImage());
    content.appendChild(addText());

    return content;
  };

  const index = content;

  return { buildIndex, index }
  
})();

export function buildIndex() {
  return indexContentBuilder.buildIndex();
}
export function returnIndex() {
  return indexContentBuilder.index;
}