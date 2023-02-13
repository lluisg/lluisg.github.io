function activateProjectFilter(case_activate) {
  activateFilter(case_activate);
  selectButton(case_activate);
};


function activateFilter(case_filter) {
  // HIDE ALL THE PROJECTS EXCEPT THE ONES OF THE SAME TYPE AS THE FILTER
  // IF ALL IS CLICKED, ALL WILL BE SHOWN
  type_filter = "type_".concat(case_filter.toLowerCase());
  var allcases = ["type_web", "type_ml", "type_data", "type_other"];

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

  document.getElementById("flt_btn_all").classList.remove("btn-primary");
  document.getElementById("flt_btn_all").classList.add("btn-outline-primary");
  document.getElementById("flt_btn_web").classList.remove("btn-success");
  document.getElementById("flt_btn_web").classList.add("btn-outline-success");
  document.getElementById("flt_btn_ml").classList.remove("btn-secondary");
  document.getElementById("flt_btn_ml").classList.add("btn-outline-secondary");
  document.getElementById("flt_btn_data").classList.remove("btn-warning");
  document.getElementById("flt_btn_data").classList.add("btn-outline-warning");
  document.getElementById("flt_btn_other").classList.remove("btn-info");
  document.getElementById("flt_btn_other").classList.add("btn-outline-info");

  if (button_filter=="flt_btn_all"){
    document.getElementById("flt_btn_all").classList.remove("btn-outline-primary");
    document.getElementById("flt_btn_all").classList.add("btn-primary");
  }else if (button_filter=="flt_btn_web") {
    document.getElementById("flt_btn_web").classList.remove("btn-outline-success");
    document.getElementById("flt_btn_web").classList.add("btn-success");
  }else if (button_filter=="flt_btn_ml") {
    document.getElementById("flt_btn_ml").classList.remove("btn-outline-secondary");
    document.getElementById("flt_btn_ml").classList.add("btn-secondary");
  }else if (button_filter=="flt_btn_data") {
    document.getElementById("flt_btn_data").classList.remove("btn-outline-warning");
    document.getElementById("flt_btn_data").classList.add("btn-warning");
  }else if (button_filter=="flt_btn_other") {
    document.getElementById("flt_btn_other").classList.remove("btn-outline-info");
    document.getElementById("flt_btn_other").classList.add("btn-info");
  };
};
