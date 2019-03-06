// // Your code goes here

// //HEADER IMAGE 

const headerImg = document.querySelector('.intro img');
console.log(headerImg);
headerImg.addEventListener('mouseover', function(){
    event.target.style.opacity='0.5'; 
});

headerImg.addEventListener('mouseout', function() {
    event.target.style.opacity='1'; 
});

headerImg.addEventListener('click', function(){
    event.stopPropagation();
    event.target.style.border = "thick solid red";
});



// page title Animation 

const pageTitle = document.querySelector('h1.logo-heading');

pageTitle.addEventListener('mouseover', function(event) {
    window.addEventListener('keydown', function() {
          event.target.style.color='red';
        TweenMax.to("h1.logo-heading", .5, {x: 20, ease: Bounce.easeOut});
    });

 });


//wheel 
const headerContainer = document.querySelector('.intro');
console.log(headerContainer);

headerContainer.addEventListener('wheel', function(){
    event.target.style.borderColor = 'blue'; 
    event.currentTarget.style.border = "2px solid blue"; 
    event.currentTarget.style.padding = "90px 20px 20px 20px";
});

headerContainer.addEventListener('click', function(){
    event.target.style.border = "thick solid green";
})


//drag and drop //#endregion

//selector for text 
const adventureText = document.querySelectorAll('.text-content');
const adventureContainer = document.querySelectorAll('.content-section');
const adventureImage = document.querySelectorAll('.img-content');
console.log(adventureImage);

adventureImage[0].addEventListener('drag', function(){
    adventureContainer[0].style.flexDirection = "row-reverse";
});


adventureImage[1].addEventListener('dblclick', function(){
    adventureContainer[1].style.flexDirection = "row-reverse";
});


//select


window.addEventListener('scroll', function() {
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('body').style.color='white';
    pageTitle.style.color= 'black';
});


//nav
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function(navLink){
    navLink.addEventListener('click', function(){
        event.preventDefault();
    });
});



//Alert
  window.addEventListener("load", function(event) {
    alert("All resources finished loading!");
  });

  
  //CONTENT DESTINATION - CLICK EVENT
const destinationParagraph = document.querySelectorAll('.destination p');

destinationParagraph.forEach(function(p){
    p.addEventListener('click', function(){
            event.target.style.color = 'lightblue';
        });
});

const destinationText = document.querySelectorAll('.destination');
console.log(destinationText);


destinationText.forEach(function(text){
    text.addEventListener('click', function(){
            event.target.style.fontStyle = 'italic';
        });
});

