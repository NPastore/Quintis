//implementa il metodo fabio
class Master{
    constructor(){}

    addSymbols(tab,i,j,id,totT){
        if(totT > 0){
            if(tab[i*5+j]==undefined || tab[i*5+j]=="-"){
                tab[i*5+j] = "F";
                id.innerHTML = tab[i*5+j];
                return true;
            }else{
                return false;
            }
        }else{
            alert("hai finito le mosse");
            return false;
        }
    }
}

