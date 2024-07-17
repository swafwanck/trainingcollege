$(".owl-carousel").owlCarousel({
  items: 1,
  loop: true,
  autoplay: true,
  autoplaySpeed: 1000,
  autoplayTimeout: 5000,
  dots: false,
  touchDrag: false,
  mouseDrag: false,
  smartSpeed: 500,
  animateIn: "fadeInUp",
  animateOut: "fadeOut",
});
// animation-revealing
new WOW().init();

// scrolling-animation
AOS.init();

// sticky-header
window.onscroll = function () {
  headerFunction();
};

var body = document.body;
var sticky = body.offsetTop;

function headerFunction() {
  if (window.pageYOffset > 150) {
    body.classList.add("sticky");
  } else {
    body.classList.remove("sticky");
  }
}

function MobileMenu() {
  let menuIcon = document.querySelector(".hamburger");
  let body = document.querySelector("body");
  let overlay = document.querySelector(".overlay");
  menuIcon.addEventListener("click", function () {
    body.classList.toggle("active");
  });
  overlay.addEventListener("click", function () {
    body.classList.remove("active");
  });
  $(".mobile-container .mobile-menu li").click(() => {
    body.classList.remove("active");
  });
}
MobileMenu();

//   activating-main-header-elements
$("header .nav-bar li a").click(function () {
  console.log("helooo");
  $("header .wrapper .nav-bar li a.active").removeClass("active");
  $(this).addClass("active");
});

//   activating-elements-mobile-menu
$(".mobile-container .mobile-menu li").click(function () {
  $(".mobile-container .mobile-menu li.active").removeClass("active");
  $(this).addClass("active");
});

$(".center").slick({
  centerMode: true,
  lazyLoad: "ondemand",
  autoplay: true,
  autoplaySpeed: 2000,
  centerPadding: "60px",
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

// course.html
function tabs(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("description");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(".subject ul li").click(function () {
  $(".subject ul li").addClass("active");
  $(".subject ul li.active").removeClass("active");
  $(this).addClass("active");
});
