class strategyGamer{
    constructor(g){
        if(g == "RussiaBoy"){
            this.strategy = new RussiaBoy();
        }
        if(g == "Master"){
            this.strategy = new Master();
        }
        if(g == "FatBoy"){
            this.strategy = new FatBoy();
        }
        if(g == "ItalianBoy"){
            this.strategy = new ItalianBoy();
        }
        if(g == "default"){
            this.strategy = new defaultt();
        }
    }

    addSymbol(tab,i,j,id,totT){
        var gg = this.strategy.addSymbols(tab,i,j,id,totT);
        return gg;
    }
    addSymbolD(tab,isX,i,j,id,totT){
        var gg = this.strategy.addSymbols(tab,isX,i,j,id,totT);
        return gg;
    }
}