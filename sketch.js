//variaveis da bolinha

 seja xBolinha = 300;

seja yBolinha = 200;

seja diâmetro = 13;

 deixe raio = diametro / 2;



 //velocidade da bolinha

deixe velocidadeXBolinha = 6;

 deixe velocidadeYBolinha = 6;

deixe raqueteComprimento = 10;

 deixe raqueteAltura = 90;



 //variaveis da raquete

 seja xRaquete = 5;

 seja yRaquete = 150;



 //variáveis do adversário

 deixe xRaqueteOponente = 585;

 deixe yRaqueteOponente = 150;

 deixe velocidadeYOponente;



 deixe colidiu = falso;

 //placar do jogo

 deixe meusPontos = 0;

 deixe pontos DoOponente = 0;



 // filhos do jogo

 deixe raquetada;

 deixe ponto;

 deixe trilha;

 função pré-carregamento (){

     trilha = loadSound ( "trilha.mp3" );

     ponto = carregarSom ("ponto.mp3");

     raquetada = loadSound (

    "raquetada.mp3" );

     }

    

     configuração de função () {

     criarCanvas (600 400); ,

     trilha laço ();

     }

    

     função desenhar () {

     fundo (0);

     mostraBolinha ();

     movimentosBolinha ();

     verificaColisaoBorda ();

     mostraRaquete (xRaquete, yRaquete );

    

    movimentosMinhaRaquete ();

     // verificaColisaoRaquete();

     verificaColisaoRaquete (xRaquete yRaquete );

     mostraRaquete (xRaqueteOponente yRaqueteOponente );

     movimentosRaqueteOponente ();

     verificaColisaoRaquete (

    xRaqueteOponente, yRaqueteOponente);

     incluiPlacar ();

    

     marcaPonto ();
 }

}



 function mostraBolinha (){

 círculo (xBolinha );} yBolinha diametro



 function movimentaBolinha (){

 xBolinha += velocidadeXBolinha ;

 }

 yBolinha += velocidadeYBolinha ;



 function verificaColisaoBorda (){

 if (xBolinha + raio > largura ||





xBolinha raio < 0){

velocidadeXBolinha *= 1;

 }



if (yBolinha + raio > altura ||



yBolinha raio < 0){



velocidadeYBolinha 1;

 }

 }

 function mostra Raquete ( x, y ){
rect ( x , у, raqueteAltura) raqueteComprimento

 }











 function movimentos MinhaRaquete (){



 if (keyIsDown (UP_ARROW )){

 yRaquete -= 10;

 }



 if (keyIsDown (DOWN_ARROW )){

 yRaquete += 10;

 }

 }



 function verificaColisaoRaquete (){ 99 if (xBolinha raio < xRaquete +

raqueteComprimento 100 && yBolinha raio < yRaquete raqueteAltura && yBolinha yRaquete ){ + raio + >

 velocidadeXBolinha *= 1;

 }

 raquetada jogar ();

 }

function verificaColisaoRaquete ( x ){ y

     colidio =

     collideRectCircle (x, y, raqueteComprimento, raqueteAltura, xBolinha yBolinha , raio );

    
 if (colidiu ){

     velocidadeXBolinha *= 1;

     raquetada jogar ();

     }

     }

    

     function movimentosRaqueteOponente (){

     if (keyIsDown ( 87 )){

     yRaqueteOponente -= 10;

     }

     if (keyIsDown (83)){

     yRaqueteOponente += 10;

     }

     }

    

     function incluiPlacar (){

    

    acidente vascular cerebral (255);

    

    textAlign (CENTRO );

    

    tamanhodotexto (16);

    preencher (cor (255 140 , 0));

    

    reto (150 10 40 , 20);

    

    preencher (255);

    

    texto (meusPontos , 170 26);

    

    preencher (cor (255 140 , 0));

    

    reto (450 10 40 20);

    

    

    preencher (255);

    

    texto (pontosDoOponente , 470

     }
}

function marcaPonto (){

    

    if (xBolinha > 590 ){

    

    meus Pontos += 1;

    

    ponto jogar ();

     }

    

    if (xBolinha < 10){

    

    pontos DoOponente += 1;

    

    ponto jogar ();

     }

     }
}