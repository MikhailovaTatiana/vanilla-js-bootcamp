// #56
console.log(document.querySelector('h2').textContent);

// #57
console.log(document.querySelector('ul li:nth-child(3)').textContent);

// #58
let list = document.querySelectorAll('ul li');
list.forEach(li => li.textContent = li.textContent.toUpperCase());

// #59
let inputRef = document.querySelector('#email');
inputRef.addEventListener('change', e => {
    console.log(e.target.value);
});

// #60
let optionRef = document.querySelector('#options');
optionRef.addEventListener('change', e => console.log(e.target.value));

// #61
console.log(document.querySelector('img').src);

// #62
// console.log(document.querySelector('#gdpr-ok').checked);
let checkboxRef = document.querySelector('#gdpr-ok');
checkboxRef.addEventListener('click', e => console.log(e.target.checked));

// #63
document.querySelector('#main-nav').classList.add('show');

// #64
document.querySelector('#home').classList.toggle('active');

// #65
let gallery = document.querySelectorAll('.gallery img');
gallery.forEach(e => e.classList.add('shadow'));

// #66
let header = document.createElement('h1');
header.innerHTML = 'Vanilla JS';
document.querySelector('body').append(header);

// #67
const url = `https://api.chucknorris.io/jokes/random`;
let response = fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        let sect = document.createElement('section');
        let jokeIcon = document.createElement('img');
        let jokeText = document.createElement('h2');
        let jokeLink = document.createElement('a');
        document.querySelector('body').append(sect);
        sect.append(jokeIcon);
        sect.append(jokeText);
        sect.append(jokeLink);
        jokeIcon.innerHTML = data.icon_url;
        jokeText.innerHTML = data.value;
        jokeLink.innerHTML = data.url;
    })
    .catch(error => {
        console.error('Error:', error);
    });

// #68
let btnRef = document.querySelector('button');
btnRef.addEventListener('click', e => console.log('go go go!'));

// #69
let list2 = document.querySelectorAll('ol li');
for (const el of list2) {
    el.addEventListener('click', e => e = alert(`Jag älskar ${e.target.innerHTML}`));
};

// #70
let input2Ref = document.querySelector('#password');
input2Ref.addEventListener('keyup', e => console.log(e.target.value));