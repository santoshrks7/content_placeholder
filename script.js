const header = document.getElementById('header')
const title = document.getElementById('title')
const except = document.getElementById('except')
const profile_img = document.getElementById('profile-img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData,2500)

function getData(){
    header.innerHTML = 
    '<img src= "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="imageOne" />'
    title.innerHTML = 'Content Placeholder Animation';
    except.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
    profile_img.innerHTML=
    '<img src= "https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="imageOne" />'
    name.innerHTML = 'santosh'
    date.innerHTML = '24-05-1999'


    animated_bgs.forEach((bg)=>{bg.classList.remove('animated-bg')})
    animated_bgs_texts.forEach((bg)=>{bg.classList.remove('animated-bg-text')})
}