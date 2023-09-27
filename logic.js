


// ------------------------------------------------Add/Remove Button -------------

var button = document.querySelectorAll(".btn");

button.forEach(function (btn) {
    var flag = 0;

    btn.addEventListener("click", function () {
        if (flag == 0) {
            btn.innerHTML = "Remove";
            btn.style.backgroundColor = "rgba(255, 47, 47, 0.494)";
            btn.style.left = "120px";
            flag = 1;
        } else {
            btn.innerHTML = "Add";
            btn.style.backgroundColor = "greenyellow";
            btn.style.left = "160px";
            flag = 0;
        }
    });
});



