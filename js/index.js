// Your code goes here

//HEADER IMAGE 

const headerImg = document.querySelector('.intro img');
console.log(headerImg);

headerImg.addEventListener('mouseover', function(){
    event.target.style.opacity='0.5'; 
});

headerImg.addEventListener('mouseout', function() {
    event.target.style.opacity='1'; 
});



//page title Animation 

// const pageTitle = document.querySelector('.logo-heading');

// pageTitle.addEventListener('mouseover', function(event) {
//     window.addEventListener('keydown', function() {
//             event.target.style.color='red';
//     });
//     // TweenMax.to(".logo-heading", 1, {x: 100, ease: Bounce.easeOut});
//     // if(event.key=== 'f') {
//     // console.log("hi");
//     // event.target.style.color='red';
// });


//wheel 
const headerContainer = document.querySelector('.intro');
console.log(headerContainer);

headerContainer.addEventListener('wheel', function(){
    event.target.style.borderColor = 'blue'; 
    event.currentTarget.style.border = "2px solid blue"; 
    event.currentTarget.style.padding = "20px";
});


//