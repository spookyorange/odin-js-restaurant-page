import './style.css'

const menuContentBuilder = (() => {
  const content = document.createElement('div');
  content.id = 'menu'

  const makeHeader = () => {
    const header = document.createElement('header');
    const headerHeader = document.createElement('h1');
    header.appendChild(headerHeader);
    headerHeader.textContent = 'Menu';
    headerHeader.classList.add('center')
  
    return headerHeader
  };

  const makeMenuList = () => {
    const menuList = document.createElement('ul');
    menuList.id = 'menuList'
    const lasagna = menuItemCreator(menuList, 'lasagna');
    const cake = menuItemCreator(menuList, 'cake');
    const friedPhone = menuItemCreator(menuList, 'fried phone');
    const burger = menuItemCreator(menuList, 'burger');
    const pizza = menuItemCreator(menuList, 'pizza');

    menuList.classList.add('center');

    return menuList
  };

  const menuItemCreator = (listToBeAdded, nameOfFood) => {
    const food = document.createElement('li');
    food.textContent = nameOfFood;
    listToBeAdded.appendChild(food);

    return food
  };

  const buildMenu = () => {
    content.appendChild(makeHeader());
    content.appendChild(makeMenuList());

    return content
  };

  const menu = content;

  return { buildMenu, menu }
})()

export function buildMenu() {
  return menuContentBuilder.buildMenu();
}
export function returnMenu() {
  return menuContentBuilder.menu;
}