
// Model Javascript 

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Toast Javascript



var toastBtn = document.getElementsByClassName("toast")[0];

  toastBtn.onclick = function () {
    var x = document.getElementById("toast-message");
    x.className = "show";
    setTimeout(function () {
    x.className = x.className.replace("show", "");
    }, 3000);
  };


// Navigation

var modalNav = document.getElementById("myModal-nav");
var btnNav = document.getElementById("myBtn-nav");
var spanNav = document.getElementsByClassName("closeNav")[0];
var link = document.getElementsByClassName("nav-modal-content")[0];

btnNav.onclick = function () {
  modalNav.style.display = "block";
};

link.onclick = function () {
  modalNav.style.display = "none";
};

spanNav.onclick = function () {
  modalNav.style.display = "none";
};

window.onclick = function (event) {
  if (event.target === modalNav) {
    modalNav.style.display = "none";
  }
};
