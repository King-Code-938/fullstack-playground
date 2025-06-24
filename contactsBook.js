const contacts = [];

function addContact(name, number) {
  const exists = contacts.some(c => c.name === name);
  if (exists) return console.log('Contact already exists.');
  contacts.push({ name, number });
}

function listContacts() {
  console.log('Contact List:');
  contacts.forEach(c => {
    console.log`${c.name}: ${c.number}`;
  });
}

function searchContact(name) {
  const found = contacts.find(c => c.name.toLowerCase() === name.toLowerCase());
  if (found) console.log(`${found.name}'s number is ${found.number}`);
  else console.log('Contact not found.');
}

function deletContact(name, number) {
  contacts.shift({ name, number });
}

addContact('Daniel', '08123456789');
addContact('Kemi', '08087654321');
listContacts();
searchContact('Daniel');
