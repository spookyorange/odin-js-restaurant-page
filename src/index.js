import { buildIndex, returnIndex } from './indexContent'
import { buildMenu, returnMenu } from './menu'
import { buildContact, returnContact } from './contact'

navbar = document.querySelector("#navbar");

content = document.querySelector("#content");

buildMenu();
buildContact();

content.appendChild(buildIndex());

const navbarGenerator = (() => {
  const generateHeads = () => {
    const list = document.createElement('ul');
    list.id = 'navbarList'
    const index = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');
    
    index.textContent = 'index';
    menu.textContent = 'menu';
    contact.textContent = 'contact';

    list.appendChild(index);
    list.appendChild(menu);
    list.appendChild(contact);

    arrangeButton(index);
    arrangeButton(menu);
    arrangeButton(contact);

    return list;
  };

  const arrangeButton = (button) => {
    button.addEventListener('click', () => {
      if (button.textContent == 'index') {
        wipeContent(content);
        content.appendChild(returnIndex())
      }
      else if (button.textContent == 'menu') {
        wipeContent(content);
        content.appendChild(returnMenu())
      }
      else if (button.textContent == 'contact') {
        wipeContent(content);
        content.appendChild(returnContact())
      }
    })
  };

  const wipeContent = (content) => {
    while (content.lastChild) {
      content.removeChild(content.lastChild)
    }
  }

  const generateNavbar = () => {
    return generateHeads()
  };

  return { generateNavbar };

})()

navbar.appendChild(navbarGenerator.generateNavbar());



