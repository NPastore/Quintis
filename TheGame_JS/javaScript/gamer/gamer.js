//è il giocatore o 1 o 2 di default
//avra un algoritmo di default per mettere le x o
//ha un metodo strategy che implementa i vari tipi di algoritmo
class gamer{
    constructor(){
        this.champ = "default";
        this.strategyGamer = new strategyGamer(this.champ);
    }

    setC(g){
        this.champ = g;
        this.strategyGamer = new strategyGamer(this.champ);
    }

    getC(){
        return this.champ;
    }

    addXO(tab,isX,i,j,id,totT){
        var gx
        if(this.champ == "default"){
            gx = this.strategyGamer.addSymbolD(tab,isX,i,j,id,totT);
        }else{
            gx = this.strategyGamer.addSymbol(tab,i,j,id,totT);
        }
        return gx;
    }
}
