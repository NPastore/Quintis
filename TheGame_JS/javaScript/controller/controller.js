//necessità di 2 gamer
//necessità di swap turno
//chiama changes che cambia le x
//creato da game start
class controller {
    constructor(tab, tr, count, totT) {
        this.tab = tab;
        this.tr = tr;
        this.count = count;
        this.totT = totT;
        this.gamer1 = new gamer();
        this.gamer2 = new gamer();
        this.setAll = false;
    }

    setChamp(p){
        this.count--;
        var x = document.getElementById("swp");
        if(x.innerHTML == "Giocatore 1: default"){
            this.gamer1.setC(p);
            x.innerHTML = "Giocatore 1: "+this.gamer1.getC();
        }else if(x.innerHTML == "Giocatore 2: default"){
            this.gamer2.setC(p);
            x.innerHTML = "Giocatore 2: "+this.gamer2.getC();
        }
        if(this.count == 0 && this.gamer2.getC()!="default" && this.gamer1.getC()!="default"){
            var t = document.getElementById("list");
            t.style.display = "none";
            var h = document.getElementById("stat");
            h.innerHTML = this.gamer1.getC() + " VS " +this.gamer2.getC();
            this.setAll = true;
            if(this.gamer2.getC() == this.gamer1.getC()){
                alert("non si combattere contro la stessa classe");
                location.reload();
            }
        }
    }

    swapPl(){
        var num = 0;
        for(var k = 0; k<25; k++){
            if(this.tab[k] == undefined || this.tab[k] == "-"){
                num++;
            }
        }
        if(num>0){
            var x = document.getElementById("swp");
                if (x.innerHTML === "Giocatore 1: "+this.gamer1.getC()) {
                    if(this.gamer1.getC() == "default" || !this.setAll || this.totT == 3 || this.totT <= 0){
                        x.innerHTML = "Giocatore 2: "+this.gamer2.getC();
                        this.totT=3;
                    }else if(this.totT<3 && this.totT>0 && this.gamer1.getC() != "default"){
                        alert("hai ancora "+this.totT+" mosse...");
                    }
                }else{
                    if(this.gamer2.getC() == "default" || !this.setAll || this.totT == 3 || this.totT <= 0){
                        x.innerHTML = "Giocatore 1: "+this.gamer1.getC();
                        this.totT=3;
                    }else if(this.totT<3 && this.totT>0 && this.gamer1.getC() != "default"){
                        alert("hai ancora "+this.totT+" mosse...");
                    }
                }
            }else{
                alert("partita finita");
            }
    }
    
    changes(posx,i,j){
        var id = document.getElementById(posx);
        var g = document.getElementById("swp");
        
            if(g.innerHTML === "Giocatore 1: "+this.gamer1.getC()){   
                if(this.gamer1.addXO(this.tab,true,i,j,id,this.totT)){
                    console.log(this.totT+"<--tot g1 true");
                    this.totT--;
                    var l = document.getElementById("Mossa");
                    l.innerHTML = "Mossa: "+this.tr;  
                    this.tr++;
                }
                console.log(this.totT+"<--tot g1 false");

            }
            else if(g.innerHTML === "Giocatore 2: "+this.gamer2.getC()){
                if(this.gamer2.addXO(this.tab,false,i,j,id,this.totT)){
                    console.log(this.totT+"<--tot g2 true");
                    this.totT--;
                    var l = document.getElementById("Mossa");
                    l.innerHTML = "Mossa: "+this.tr; 
                    this.tr++; 
                }
                console.log(this.totT+"<--tot g2 false");

            }
            
            console.log(this.tab);
    }

}