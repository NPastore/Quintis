//implementa il metodo riki
//implementa il metodo sergio
class FatBoy{
    constructor(){}
    addSymbols(tab,i,j,id,totT){
        if(totT > 1){
            if(tab[i*5+j]==undefined || tab[i*5+j]=="-" ){
                tab[i*5+j] = "R";
                id.innerHTML = tab[i*5+j];
            }else{
                return false;
            }
            return true;
        }else if(totT == 1){
            tab[i*5+j] = "-";
            id.innerHTML = tab[i*5+j];
            return true;
        }else{
            alert("hai finito le mosse");
            return false;
        }
    }
}
