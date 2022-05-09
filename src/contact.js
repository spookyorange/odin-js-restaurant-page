import './style.css'

const contactContentBuilder = (() => {
  const content = document.createElement('div');
  content.id = 'contact'

  const makeHeader = () => {
    const header = document.createElement('header');
    const headerHeader = document.createElement('h1');
    header.appendChild(headerHeader);
    headerHeader.textContent = 'Contact';
    headerHeader.classList.add('center')
  
    return headerHeader
  };

  const makeMenuList = () => {
    const contactList = document.createElement('ul');
    contactList.id = 'contactList'
    contactItemCreator(contactList, 'call us at: 11111111');
    contactItemCreator(contactList, 'also: 22222222');

    contactList.classList.add('center');

    return contactList
  };

  const contactItemCreator = (listToBeAdded, nameOfContact) => {
    const contact = document.createElement('li');
    contact.textContent = nameOfContact;
    listToBeAdded.appendChild(contact);

    return contact
  };

  const buildContact = () => {
    content.appendChild(makeHeader());
    content.appendChild(makeMenuList());

    return content
  };

  const contact = content

  return { buildContact, contact }
})()

export function buildContact() {
  return contactContentBuilder.buildContact();
}
export function returnContact() {
  return contactContentBuilder.contact;
}