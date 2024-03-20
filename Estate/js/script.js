
function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
}, // we don't have to define a scrollLeft because we're only scrolling vertically.
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
// LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAnimation();

// function cursorAnimation() {
//   // var realestate=document.querySelector("#main")
//   // var btn=document.querySelector("#estate")
//   // realestate.addEventListener("mouseenter", function() {
//   //   gsap.to(btn,{
//   //     scale:1,
//   //     opacity:1

//   //   })
//   // })
//   // realestate.addEventListener("mouseleave", function() {
//   //   gsap.to(btn,{
//   //     scale:0,
//   //     opacity:0

//   //   })
//   // })
//   // realestate.addEventListener("mousemove", function(dets) {
//   //   gsap.to(btn,{
//   //     left:dets.x-80,
//   //     top:dets.y-80

//   //   })
//   // })

//   /*****************************************page 1*/ 

//   var realestate1=document.querySelector("#page1")
//   var btn1=document.querySelector("#estate1")
//   realestate1.addEventListener("mouseenter", function() {
//     gsap.to(btn1,{
//       scale:1,
//       opacity:1

//     })
//   })
//   realestate1.addEventListener("mouseleave", function() {
//     gsap.to(btn1,{
//       scale:0,
//       opacity:0

//     })
//   })
//   realestate1.addEventListener("mousemove", function(dets) {
//     gsap.to(btn1,{
//       left:dets.x-80,
//       top:dets.y-80

//     })
//   })


//     /*****************************************page 2*/ 

//     var realestate2=document.querySelector("#page2")
//     var btn2=document.querySelector("#estate2")
//     realestate2.addEventListener("mouseenter", function() {
//       gsap.to(btn2,{
//         scale:1,
//         opacity:1
  
//       })
//     })
//     realestate2.addEventListener("mouseleave", function() {
//       gsap.to(btn2,{
//         scale:0,
//         opacity:0
  
//       })
//     })
//     realestate2.addEventListener("mousemove", function(dets) {
//       gsap.to(btn2,{
//         left:dets.x-80,
//         top:dets.y-80
  
//       })
//     })

// }


// cursorAnimation();



function SwiperSliding(){
  document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true // Used for stop slider while hovering
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
  });
}

SwiperSliding();


function SwiperSliding1(){
    document.addEventListener("DOMContentLoaded", function() {
      var swiper = new Swiper(".mySwiper1", {
          slidesPerView: 3,
          spaceBetween: 30,
          autoplay: {
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true // Used for stop slider while hovering
          },
          pagination: {
              el: ".swiper-pagination1",
              clickable: true,
          },
      });
    });
  }
  
  SwiperSliding1();
  
  










function BlobAnimation(){

  document.addEventListener("DOMContentLoaded", function () {
    gsap.to('#my-image', {
      rotate: 360, // Rotate 360 degrees around its own axis
      transformOrigin: 'center center', // Set the transform origin to the center
      ease: 'power1.inOut', // Use a normal easing function
      duration: 12, // Set the duration for one repetition
      repeat: -1, // Repeat the animation for the specified number of repetitions
      // yoyo: true, // Play the animation in reverse after each repetition
      repeatDelay: 0, // Set the delay between repetitions
    });
  });

}

BlobAnimation();

const gym=document.getElementById('gym');
const swim=document.getElementById('swim');
const security=document.getElementById('security');
const club=document.getElementById('club');
const wifi=document.getElementById('wifi');
const reservation=document.getElementById('reservation');
const temple=document.getElementById('temple');
function changeGym(){
    gym.style.background="url('https://images.squarespace-cdn.com/content/v1/5ada11772714e5eb213ab1df/1654290316961-1G3DBLPINKF8KJ4QD2WH/Web_09.jpg?format=1000w')"
    gym.style.backgroundSize="100% 100%"
    gym.innerText=""
    
}
function backGym(){
    gym.style.background=""
    gym.innerHTML='<br><br><img src="images/Gym.png" alt="">  <br> <h4>Gym</h4>'
}
function changeSwim(){
    swim.style.background="url('https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    swim.style.backgroundSize="100% 100%"
    swim.innerHTML=""
}
function backSwim(){
    swim.style.background=""
    swim.innerHTML='<br><br><img src="images/Swim.png" alt="">  <br> <h4>Swimming</h6></div>'
}
function changeSecurity(){
    security.style.background="url('https://images.unsplash.com/photo-1581568736305-49a04e012c13?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    security.style.backgroundSize="100% 100%"
    security.innerHTML=""
}
function backSecurity(){
    security.style.background=""
    security.innerHTML='br><br><img src="images/Sec.png" alt="">  <br> <h4>Security</h4>'
}
function changeReservation(){
    reservation.style.background="url('https://media.istockphoto.com/id/1393093359/photo/search-for-air-travel-information-air-ticket-booking-for-travel.jpg?s=612x612&w=0&k=20&c=vjx4BAdbvsa-6DNt8uO3VkAKsZ2eTyhJA6rBAe4zFig=')"
    reservation.style.backgroundSize="100% 100%"
    reservation.innerHTML=""
}
function backReservation(){
    reservation.style.background=""
    reservation.innerHTML='<br><br><img src="images/reservation.png" alt="">  <br> <h4>Travel Booking</h4>'
}
function changeTemple(){
    temple.style.background="url('https://5.imimg.com/data5/ANDROID/Default/2022/12/OD/FY/PE/97165616/product-jpeg-500x500.jpg')"
    temple.style.backgroundSize="100% 100%"
    temple.innerHTML=""
}
function backTemple(){
    temple.style.background=""
    temple.innerHTML='<br><br><img src="images/Tem.png" alt="">  <br> <h4>Temple</h4>'
}
function changeWifi(){
    wifi.style.background="url('https://plus.unsplash.com/premium_photo-1677486394561-6e660bc9879e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lmaXxlbnwwfHwwfHx8MA%3D%3D')"
    wifi.style.backgroundSize="100% 100%"
    wifi.innerHTML=""
}
function backWifi(){
    wifi.style.background=""
    wifi.innerHTML='<br><br><img src="images/wifi.png" alt=""> <br>  <h4>Free-Wifi</h4>'
}
function changeElectricity(){
    electricity.style.background="url('https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/06/27/Pictures/hindustan-generators-society-gurgaon-housing-wednesday-parveen_a7d711b0-7a00-11e8-8d5f-3f0c905295d2.jpg')"
    electricity.style.backgroundSize="100% 100%"
    electricity.innerHTML=""
}
function backElectricity(){
    electricity.style.background=""
    electricity.innerHTML=' <br><br><img src="images/Elec.png" alt=""> <br>  <h4>Electricity</h4>'
}

function changeClub(){
    club.style.background="url('https://i.pinimg.com/236x/44/b0/9e/44b09e2643e84aa1b464fe5df6ec64e6.jpg')"
    club.style.backgroundSize="100% 100%"
    club.innerHTML=""
}
function backClub(){
    club.style.background=""
    club.innerHTML='<br><br><img src="images/Club.png" alt="">  <br> <h4>Club</h4>'
}




/***text****/



document.addEventListener("DOMContentLoaded", function() {
    const texts = ["UNLOCKING DOORS", "OPENING PATHWAYS", "GUIDING JOURNEYS", "WELCOMING YOU", "LEADING YOU"]; // Array of texts to display
    let index = 0;
    let letterIndex = 0;
    let currentText = "";
    let typingSpeed = 200; // Adjust typing speed as needed

    function type() {
        if (letterIndex < texts[index].length) {
            currentText += texts[index].charAt(letterIndex);
            document.getElementById("typing-text").innerText = currentText;
            letterIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, typingSpeed * 2); // Wait before erasing text
        }
    }

    function erase() {
        if (currentText.length > 0) {
            currentText = currentText.substring(0, currentText.length - 1);
            document.getElementById("typing-text").innerText = currentText;
            setTimeout(erase, typingSpeed / 2);
        } else {
            index = (index + 1) % texts.length; // Move to next text
            letterIndex = 0;
            setTimeout(type, typingSpeed / 2); // Start typing next text
        }
    }

    setTimeout(type, typingSpeed); // Start typing animation
});



const mobile_nav=document.querySelector(".mobile-navbar-btn")
const nav_header=document.querySelector(".header")
mobile_nav.addEventListener('click',()=>{
    toggleNavbar();
});

const toggleNavbar=()=>{
    nav_header.classList.toggle("active")
};

/****end******* */