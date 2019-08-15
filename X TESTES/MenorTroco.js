var MenorTroco = function(troco) {
    var fraseRetorno = "";
    
    var moedas1 = parseInt(troco / 1.00);
    troco = troco - 1.00;
    if(troco <= 0){fraseRetorno += "\nNenhuma moeda de R$1,00"}
    else{
        fraseRetorno += "\nMoeda de R$1,00 - " + moedas1}
    //fraseRetorno += "\nRestou = " + troco;
    
    var moedas050 = parseInt(troco / 0.50);
    troco = troco - 0.50;
    if(troco <= 0){fraseRetorno += "\nNenhuma moeda de R$0,50"}
    else{
        fraseRetorno += "\nMoedas de R$0.50 - " + moedas050;}
    //fraseRetorno += "\nRestou = " + troco;
    
    var moedas025 = parseInt(troco / 0.25);
    troco = troco - 0.25;
    if(troco <= 0){fraseRetorno += "\nNenhuma moeda de R$0,25"}
    else{
        fraseRetorno += "\nMoedas de R$0,25 - " + moedas025;}
    //fraseRetorno += "\nRestou = " + troco;
    
    var moedas010 = parseInt(troco / 0.10);
    troco = troco - 0.10;
    if(troco <= 0){fraseRetorno += "\nNenhuma moeda de R$0,10"}
    else{
        fraseRetorno += "\nMoedas de R$0,10 - " + moedas010;}
    //fraseRetorno += "\nRestou = " + troco;
    
    var moedas005 = parseInt(troco / 0.05);
    troco = troco - 0.05;
    if(troco <= 0){fraseRetorno += "\nNenhuma moeda de R$0,05"}
    else{
        fraseRetorno += "\nMoedas de R$0,05 - " + moedas005;}
    fraseRetorno += "\nRestou = " + troco;

    var moedas001 = parseInt(troco / 100);
    troco = troco;
    fraseRetorno += "\nMoedas de R$0,01 - " + moedas001;
    fraseRetorno += "\nRestou = " + troco
    
    return fraseRetorno;
    };
    //document.write(MenorTroco(1.90));
    console.log(MenorTroco(1.93))