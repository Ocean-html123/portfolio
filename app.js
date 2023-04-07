const toggle = document.querySelector('.toggle');
const bar = document.querySelector('.bar');
const closeBar = document.querySelector('.close')
const pics = document.querySelector('.pics')


toggle.addEventListener('click', function(){
    bar.classList.toggle('show-bar')
    pics.classList.toggle('show-pics')
})

closeBar.addEventListener('click', function(){
    bar.classList.remove('show-bar')
    pics.classList.remove('show-pics')
})
const home = document.getElementById('home')
const cont = document.getElementById('cont')
const serve = document.getElementById('serve')

home.addEventListener('click', function(){
    bar.classList.remove('show-bar')
})
cont.addEventListener('click', function(){
    bar.classList.remove('show-bar')
})
serve.addEventListener('click', function(){
    bar.classList.remove('show-bar')
})
