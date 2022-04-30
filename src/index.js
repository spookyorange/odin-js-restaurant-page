import image from './brick-wall-1834784_1920.jpg'

content = document.querySelector("#content");

function makeHeader() {
  const header = document.createElement('header');
  const headerHeader = document.createElement('h1');
  header.appendChild(headerHeader);
  headerHeader.textContent = 'My Restaurant';
  content.append(header);

  return headerHeader;
}

function addImage () {
  const img = new Image();
  img.src = image;
  img.width = 800;

  return img;
}

function addText() {
  const main = document.createElement('main');
  const paragraph = document.createElement('p');
  paragraph.textContent = "My Restaurant is so nice and everyone loves it except some person who doesn't know who they are or who doesn't know their place. I will burn em to the ground";

  main.appendChild(paragraph);

  return main;
}

content.appendChild(makeHeader());
content.appendChild(addImage());
content.appendChild(addText());