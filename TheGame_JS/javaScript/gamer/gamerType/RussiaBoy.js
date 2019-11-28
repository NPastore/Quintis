//implementa il metodo sergio
class RussiaBoy{
    constructor(){}
    addSymbols(tab,i,j,id,totT){
        if(totT > 1){
            if(tab[i*5+j]==undefined || tab[i*5+j]=="-" ){
                tab[i*5+j] = "S";
                id.innerHTML = tab[i*5+j];
                return true;
            }else{
                return false;
            }
        }else if(totT == 1){
            var ran = Math.round(Math.random() * (25 - 0) + 0);
            tab[ran] = "S";
            var x = document.getElementById(ran.toString());
            x.innerHTML = "S";
            return true;
        }else{
            alert("hai finito le mosse");
            return false;
        }
    }
}
