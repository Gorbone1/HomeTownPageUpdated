let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.setAttribute("href", 'http://www.codeyourfuture.io');
new_a.innerText = 'codeyourfuture';

new_li.appendChild(new_a);

element_list.appendChild(new_li);
let element_list2 = document.getElementById('list');
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'https://www.google.com');
new_a2.innerText = 'youtube';

new_li2.appendChild(new_a2);

element_list2.appendChild(new_li2);
let element_list3 = document.getElementById('list');
let new_li3 = document.createElement('li');
let new_a3 = document.createElement('a');
new_a3.setAttribute("href", 'https://www.google.com');
new_a3.innerText = 'google';

new_li3.appendChild(new_a3);

element_list3.appendChild(new_li3);
