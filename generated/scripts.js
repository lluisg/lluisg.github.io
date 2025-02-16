/*!
    * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
      if (
          location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
      ) {
          var target = $(this.hash);
          target = target.length
              ? target
              : $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
              $("html, body").animate(
                  {
                      scrollTop: target.offset().top,
                  },
                  1000,
                  "easeInOutExpo"
              );
              return false;
          }
      }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
      $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
      target: "#sideNav",
  });
})(jQuery); // End of use strict


// --------------------- SCRIPT CONTACT ---------------------
const submit_btn = document.getElementById('btn-contact-submit');

submit_btn.addEventListener('submit', (e)=>{
  e.preventDefault();
  submit_btn.innerHTML = 'Message sent.<br>To send another refresh the page.'
  submit_btn.classList.remove("btn-dark");
  submit_btn.classList.add("btn-success");
  submit_btn.setAttribute('disabled', true);
})


// --------------------- SCRIPT BUTTONS ---------------------
window.onload = function() {
  activateProjectFilter('relevant');
};
function activateProjectFilter(case_activate) {
  activateFilter(case_activate);
  selectButton(case_activate);
};


function activateFilter(case_filter) {
  // HIDE ALL THE PROJECTS EXCEPT THE ONES OF THE SAME TYPE AS THE FILTER
  // IF ALL IS CLICKED, ALL WILL BE SHOWN
  type_filter = "type_".concat(case_filter.toLowerCase());

  var allcases = ["type_relevant", "type_ml", "type_web", "type_data", "type_other", "type_all"];

  if (case_filter != "all"){
    for (var i = 0, ii = allcases.length; i < ii; i++) {
      var myElements = document.getElementsByClassName(allcases[i]);
      for (var j = 0, jj = myElements.length; j < jj; j++) {
        myElements[j].style.display = "none";
      };
    };

    var myElements = document.getElementsByClassName(type_filter);
    for (var j = 0, jj = myElements.length; j < jj; j++) {
      myElements[j].style.display = "block";
    };

  }else{
    for (var i = 0, ii = allcases.length; i < ii; i++) {
      var myElements = document.getElementsByClassName(allcases[i]);
      for (var j = 0, jj = myElements.length; j < jj; j++) {
        myElements[j].style.display = "block";
      };
    };
  };
};

function selectButton(case_button) {
  // CHANGE THE CLASS TO BUTTON FILLED WITH THE COLOR,
  // AND ALL THE OTHER BUTTONS TO ONLI THE OUTLINE
  button_filter = "flt_btn_".concat(case_button.toLowerCase());

  document.getElementById("flt_btn_relevant").classList.remove("btn-primary");
  document.getElementById("flt_btn_relevant").classList.add("btn-outline-primary");
  document.getElementById("flt_btn_ml").classList.remove("btn-success");
  document.getElementById("flt_btn_ml").classList.add("btn-outline-success");
  document.getElementById("flt_btn_web").classList.remove("btn-warning");
  document.getElementById("flt_btn_web").classList.add("btn-outline-warning");
  document.getElementById("flt_btn_data").classList.remove("btn-info");
  document.getElementById("flt_btn_data").classList.add("btn-outline-info");
  document.getElementById("flt_btn_other").classList.remove("btn-secondary");
  document.getElementById("flt_btn_other").classList.add("btn-outline-secondary");
  document.getElementById("flt_btn_all").classList.remove("btn-danger");
  document.getElementById("flt_btn_all").classList.add("btn-outline-danger");
  if (button_filter=="flt_btn_relevant"){
    document.getElementById("flt_btn_relevant").classList.remove("btn-outline-primary");
    document.getElementById("flt_btn_relevant").classList.add("btn-primary");
  }else if (button_filter=="flt_btn_ml"){
    document.getElementById("flt_btn_ml").classList.remove("btn-outline-success");
    document.getElementById("flt_btn_ml").classList.add("btn-success");
  }else if (button_filter=="flt_btn_web"){
    document.getElementById("flt_btn_web").classList.remove("btn-outline-warning");
    document.getElementById("flt_btn_web").classList.add("btn-warning");
  }else if (button_filter=="flt_btn_data"){
    document.getElementById("flt_btn_data").classList.remove("btn-outline-info");
    document.getElementById("flt_btn_data").classList.add("btn-info");
  }else if (button_filter=="flt_btn_other"){
    document.getElementById("flt_btn_other").classList.remove("btn-outline-secondary");
    document.getElementById("flt_btn_other").classList.add("btn-secondary");
  }else if (button_filter=="flt_btn_all"){
    document.getElementById("flt_btn_all").classList.remove("btn-outline-danger");
    document.getElementById("flt_btn_all").classList.add("btn-danger");
  }
};


// --------------------- GO TO TOP SCRIPT ---------------------
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});