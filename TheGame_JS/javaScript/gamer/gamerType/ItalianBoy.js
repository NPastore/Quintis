//implementa il metodo gianluca
class ItalianBoy{
    constructor(){}
    addSymbols(tab,i,j,id,totT){
        if(totT > 1){
            var ran = Math.round(Math.random() * (25 - 0) + 0);
            tab[ran] = "G";
            var x = document.getElementById(ran.toString());
            x.innerHTML = "G";
            return true;
        }else if(totT == 1){
            if(tab[i*5+j]==undefined || tab[i*5+j]=="-" ){
                tab[i*5+j] = "G";
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
