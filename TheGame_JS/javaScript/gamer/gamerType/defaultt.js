//deafult class
class defaultt{
    constructor(){}

    addSymbols(tab,isX,i,j,id,totT){
        if(totT>2 && (tab[i*5+j]==undefined || tab[i*5+j]=="-")){
            if(isX){
                tab[i*5+j] = "X";
            }
            else{
                tab[i*5+j]= "O";
            }
            id.innerHTML = tab[i*5+j];
            return true;
        }else{
            alert("nope");
        }
    }
}