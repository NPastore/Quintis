//deve starci solo gamestart che crea un controller
class gameStart {
    constructor() {
        this.tab = new Array(25);
        this.controller = new controller(this.tab, 1, 2, 3);
    }
    show() {
        var x = document.getElementById("table");
        var y = document.getElementById("selectL");
        if (x.style.display === "none") {
            x.style.display = "block";
            y.style.display = "block";
        }
        else {
            x.style.display = "none";
            y.style.display = "none";
        }
    }
    newGame() {
        location.reload();
    }
}

