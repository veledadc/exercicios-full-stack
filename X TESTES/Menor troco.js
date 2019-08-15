valor=window.prompt("Digite o valor da compra","");

dinheiro=window.prompt("Digite o valor pago","");

troco=dinheiro-valor;

n50=parseInt(troco/50);

n10=parseInt((troco%50)/10);

n05=parseInt(((troco%50)%10)/5);

n01=parseInt(((troco%50)%10)%5);