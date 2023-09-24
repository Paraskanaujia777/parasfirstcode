let bar = document.getElementById('bar');
let  nav = document.getElementById('navbar');
let close =document.querySelector('#close');

if(bar){
    bar.addEventListener('click',()=>{ 
        nav.classList.add('present')
        // console.log('paras clicked');
     })
        
}
if(close){
    close.addEventListener('click',()=>{ 
        nav.classList.remove('present')
        // console.log('paras clicked');
     })
        
}


// let MainImg= document.querySelector('#mainimg');
// let smallimg = document.querySelectorAll('.small-img')

// // console.log(smallimg)

// smallimg[0].addEventListener('click',function(e){
//     const click=e.target
//     MainImg.src=click.src;
//     // console.log('paras clicked')
// })
// smallimg[1].addEventListener('click',function(e){
//     const click=e.target
//     MainImg.src=click.src;
//     // console.log('paras clicked')
// })
// smallimg[2].addEventListener('click',function(e){
//     const click=e.target
//     MainImg.src=click.src;
//     // console.log('paras clicked')
// })
// smallimg[3].addEventListener('click',function(e){
//     const click=e.target
//     MainImg.src=click.src;
//     // console.log('paras clicked')
// })




// let allimg=  document.querySelectorAll('img');
// console.log(allimg);

// allimg.addEventListener('click',function(){
//     console.log('paras clicked')
// })

























// let x=document.querySelectorAll('.pro')
// // let y=document.x.querySelectorAll('img')

// x.addEventListener('click',function(){
//     window.location.href='sproduct.html'
// })   










