  'use strict';

 ///////////////////////////////////////
 // Modal window

// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.btn--close-modal');
// const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
// const section1 = document.querySelector('#section--1');

// const openModal = function (e) {
//   e.preventDefault();
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// };

// const closeModal = function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// };

// btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));



// btnCloseModal.addEventListener('click', closeModal);
// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//   if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
//     closeModal();
//   }
// });



//  //Navigation method
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(ele){
//     ele.preventDefault();
//     const id =this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     })
//   })
// })


//  //1. Add event listener to common parent element
//  //2. Determine what element originated the event

// document.querySelector('.nav__links').addEventListener('click', function(el){
// el.preventDefault();

//    //Matching stratergy
//   if(el.target.classList.contains('nav__link')){
//     const id =el.target.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth'
//     })
//   }
// } 
// )




//  //Tabbed component
// const tabs = document.querySelectorAll('.operations__tab');
// const tabsContainer = document.querySelector('.operations__tab-container');
// const tabsContent = document.querySelectorAll('.operations__content');

// tabs.forEach(tabs => tabs.addEventListener('click', () => console.log('TAB')));

// tabsContainer.addEventListener('click', function(el){
//   const clicked = el.target.parentElement;
//   console.log(clicked);
// })


// tabsContainer.addEventListener('click', function(el){
//   const clicked = el.target.closest('.operations__tab');
//   console.log(clicked);



// //Guard clause
//   if(!clicked) return;


// // Remove tab
//   tabs.forEach(t => t.classList.remove('operations__tab--active'));
//   tabsContent.forEach(con => con.classList.remove('operations__content--active'));

//   // Activate tab
//   clicked.classList.add('operations__tab--active');
  
//   document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
//   //console.log(clicked.dataset.tab);
// });


//  //Menu fade animation
// const over = function(el){
//   if(el.target.classList.contains('nav__link')){
//     const link = el.target;
//     const Siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
    

//   Siblings.forEach(e => {
//     if(e !== link) e.style.opacity = this;
//   });

//   logo.style.opacity = this;
//   }
// }


// const nav = document.querySelector('.nav');

//  //Passing an "arguement" into handler
// nav.addEventListener('mouseover', over.bind(0.5))
// nav.addEventListener('mouseout', over.bind(1));


//  //Sticky Navigator

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener('scroll',  function(){
//   console.log(window.scrollY);

//   if(window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// })


//  //STICKY NAVIGATION : INTERSECTION API






//  //REVEALING SECTIONS
// const allSection = document.querySelectorAll('.section');

// const revealSection =  function(entries, observer){
//   const [entry] = entries;
//   console.log(entry)

//   if(!entry.isIntersecting) return

//   entry.target.classList.remove('section--hidden');
//   observer.unobserve(entry);
// }


// const sectionObserver = new IntersectionObserver(revealSection,{
//   root : null,
//   threshold : 0.15,


// });

// allSection.forEach(function(section){

//   sectionObserver.observe(section);
//   section.classList.add('section--hidden');
// })


//  //LOAD IMAGES
// const imgTarget = document.querySelectorAll('img[data-src]');


// const loadImg = function(entries, observer){
// const [entry] = entries;
// console.log(entry);

// if(!entry.isIntersecting) return;

// //REPLACE SRC WITH DATA SRC 
// entry.target.src = entry.target.dataset.src;


// entry.target.addEventListener('load', function() {
//   entry.target.classList.remove('lazy-img');
// })
// }

// const imgObserver = new IntersectionObserver(loadImg, {
//   root : null,
//   threshold : 0,
//   rootMargin : '-200px',
// })
// imgTarget.forEach(img => imgObserver.observe(img));





//  // SLIDES
// const slides = document.querySelectorAll('.slide');
// const btnRight = document.querySelector('.slider__btn--right');
// const btnLeft = document.querySelector('.slider__btn--left');
// const dotContainer = document.querySelector('.dots')

// let curSlide = 0;
// const maxSlide = slides.length;


//   const slider = document.querySelector('.slider');
//   slider.style.transform = 'scale(0.3) translateX(-500px)';
//   slider.style.overflow = 'visible';


// const createDots = function(){
//   slides.forEach(function( _, i){
//     dotContainer.insertAdjacentHTML(
//       'beforeend', `<button class="dots__dot" data-slide="${i}"></button>`
//     )
//   })
// }


//createDots(0);


// const activateDot = function(slide) {
//   document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active') );

//   document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
// }

// activateDot(0);




// const goToSlide = function(slide){
//   slides.forEach((s,i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
//   //0%, 100%, 200%, 300%
// };
// goToSlide(0);


//  //Next slide
// const nextSlide = function(){
//   if(curSlide === maxSlide-1){
//     curSlide = 0
//   }else{
//     curSlide++;
//   }

//   goToSlide(curSlide);
//   activateDot(curSlide);
// }

// const prevSlide = function(){
//   if(curSlide === 0){
//     curSlide = maxSlide-1;
//   }else{
//     curSlide--;
//   }

//   goToSlide(curSlide)
//   activateDot(curSlide)
// }

// btnRight.addEventListener('click', nextSlide);
// btnLeft.addEventListener('click',  prevSlide);

// document.addEventListener('keydown', function(e){
//   console.log(e);
//   if(e.key === 'ArrowLeft') prevSlide();
//   e.key === 'ArrowRight' && nextSlide();
// })


// dotContainer.addEventListener('click', function(e){
//   if(e.target.classList.contains('dots__dot')){
//     const {slide} = e.target.dataset;
//     goToSlide(slide);
//      activateDot(slide)
   
//    }
// })


///////////////////////////////////////////////////////////////////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));



btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



//Navigation method
document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click',function(ele){
    ele.preventDefault();
    const id =this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    })
  })
})


//1. Add event listener to common parent element
//2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(el){
el.preventDefault();


  //Matching stratergy
  if(el.target.classList.contains('nav__link')){
    const id =el.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    })
  }
} 
)

const Tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')


Tabs.forEach(tab => tab.addEventListener('click', () => console.log('TAB')))

tabsContainer.addEventListener('click', function(el){
  const clicked = el.target.parentElement;
  console.log(clicked)
})

// Tabbed 
tabsContainer.addEventListener('click', function(el){
  const clicked = el.target.closest('.operations__tab')
  console.log(clicked);


   if(!clicked) return;


    //Tabs removed
    Tabs.forEach(t => t.classList.remove('operations__tab--active'))
    tabsContent.forEach(con => con.classList.remove('operations__content--active'));


  // Activate tabs
    clicked.classList.add('operations__tab--active')
    

    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')

})


//Fade navigation


const over = function(el){
  if(el.target.classList.contains('nav__link')){
    const link = el.target;
    const Siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')
  

    Siblings.forEach(e =>{
      if(e !== link) e.style.opacity = this;
    })

    logo.style.opacity = this;

  }
}

const nav = document.querySelector('.nav')

// passing an argument to hndler

nav.addEventListener('mouseover', over.bind(0.5))
nav.addEventListener('mouseout', over.bind(1))


// Sticky navigator
const initialCoords = section1.getBoundingClientRect()
console.log(initialCoords);

window.addEventListener('scroll', function(){
  console.log(this.window.scrollY)
  if(window.scrollY > initialCoords.top) nav.classList.add('sticky')
    else(nav.classList.remove('sticky'))
})


// Load images
const imgTarget = document.querySelectorAll('img[data-src]')


const loadImg = function(entries,observer){
  const[entry] = entries
  console.log(entry)



  if(!entry.isIntersecting) return;
  
  // Replace src to data src
  entry.target.src = entry.target.dataset.src

  entry.target.addEventListener('load',function(){
    entry.target.classList.remove('lazy-img')
  })
}

const imgObserver = new IntersectionObserver(loadImg,{
  root: null,
  threshold : 0,
  rootMargin: '-200px',
})

imgTarget.forEach(img => imgObserver.observe(img))


// Revealing Section
const allSection = document.querySelectorAll('.section');

const revealSection  = function(entries,observer){
  const [entry] = entries
  console.log(entry)

if(!entry.isIntersecting) return

  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry)
}


const sectionObserver = new IntersectionObserver(revealSection,{
  root: null,
  threshold: 0.15,
})
allSection.forEach(function(section){
  sectionObserver.observe(section)
  section.classList.add('section--hidden');
})


// Slides
const allSlides = document.querySelectorAll('.slide')
const btnRight = document.querySelector('.slider__btn--right')
const btnLeft  = document.querySelector('.slider__btn--left')
const dotContainer = document.querySelector('.dots')


let curSlide = 0
const maxSlide = allSlides.length


 const slider  = document.querySelector('.slider')
// slider.style.transform = 'scale(0.3) translateX(-500px)'
// slider.style.overflow = 'visible'

const createDots = function(){
  allSlides.forEach(function( _ , i){
    dotContainer.insertAdjacentHTML(
      'beforeend',`<button class="dots__dot" data-slide="${i}"></button>`
    )
  })
}
createDots(0);

const activateDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'))

  document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add('dots__dot--active')
}
activateDot(0);

const goToSlide = function(slide){
  allSlides.forEach((s,i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`))
  // 0%, 100%, 200%, 300%
}
goToSlide(0);

// Next slide 
const nextSlide = function(){
  if(curSlide === maxSlide - 1){
    curSlide = 0
  }
  else{
    curSlide++
    // cur = cur + 1
  }
  goToSlide(curSlide);
  activateDot(curSlide);
}

// Previous slide
const prevSlide = function(){
  if(curSlide === 0){
    curSlide = maxSlide - 1
  }else{
    curSlide--
    // cur = cur - 1

  }
  goToSlide(curSlide);
  activateDot(curSlide)
}

btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)

document.addEventListener('keydown', function(e){
  if(e.key === 'ArrowLeft') prevSlide()
    e.key === 'ArrowRight' && nextSlide();
})

dotContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    const {slide} = e.target.dataset
    goToSlide(slide)
    activateDot(slide)
  }
})