
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