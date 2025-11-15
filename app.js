function historia(){

    var his = document.getElementById("his");
    
  var content = "O Baralho Cigano, também conhecido como Petit Lenormand, é uma poderosa ferramenta esotérica utilizada para realizar leituras divinatórias, oferecendo insights sobre diversas áreas da vida, como amor, trabalho, saúde e outros aspectos cotidianos. <br><br> Suas origens remontam ao século XIX, associadas à figura da cartomante francesa Marie Anne Lenormand. Este baralho se diferencia do Tarot por sua simplicidade e clareza, sendo composto por 36 cartas, cada uma com símbolos únicos e significados profundos.<br><br> O Baralho Cigano tem suas raízes na cultura dos povos ciganos, embora seu desenvolvimento esteja fortemente ligado à cartomante francesa Marie Anne Lenormand, que viveu no século XIX. Lenormand foi conselheira espiritual de várias figuras importantes da época, como Napoleão Bonaparte, e ficou famosa por suas habilidades em previsões. <br><br> O baralho que leva seu nome, embora muitas vezes seja chamado de Baralho Cigano, foi popularizado pelo povo cigano, que disseminou seu uso por diversas regiões da Europa e do mundo. <br><br> Esse baralho se tornou uma ferramenta essencial para os ciganos em suas leituras divinatórias, ganhando a reputação de ser preciso e acessível. Sua origem é cercada de mistério, com influências que podem ser traçadas tanto ao Tarot quanto às tradições oraculares mais antigas. <br><br> No entanto, ao contrário do Tarot, que pode ser mais complexo e simbólico, o Baralho Cigano apresenta uma abordagem mais direta e prática.  ";

    if (his.dataset.visible === "true"){
        his.innerHTML="";
        his.dataset.visible = "false";
    } else {
        his.innerHTML =content;
        his.dataset.visible="true";
    }

    his.style=textAlign="center";
    his.style.fontSize="17px";
}

 function estrutura(){
  var estrutura =  document.getElementById("estrutura");

    var estru = "O Baralho Cigano é composto por 36 cartas, cada uma associada a um símbolo, um número e um significado específico. Diferente do Tarot, que tem 78 cartas divididas em Arcanos Maiores e Menores, o Baralho Cigano é mais enxuto, com símbolos que refletem aspectos da vida cotidiana.<br><br> As cartas representam situações, pessoas, sentimentos e eventos, e, juntas, proporcionam uma leitura profunda das questões trazidas pelo consulente. <br><br> Cada uma das 36 cartas é rica em simbolismo, com imagens simples, como a Árvore, a Casa, o Coração, o Caixão, o Sol, entre outros. Elas são fáceis de interpretar, o que faz com que o Baralho Cigano seja uma ferramenta acessível tanto para iniciantes quanto para profissionais experientes. <br><br> A combinação dessas cartas durante uma leitura revela mensagens e conselhos práticos sobre o futuro e o presente do consulente."

    if (estrutura.dataset.visible === "true"){
        estrutura.innerHTML="";
        estrutur.dataset.visible = "false";
    } else {
        estrutura.innerHTML =estru;
        estrutura.dataset.visible="true";
    }

    estrutura.style=textAlign="center";
    estrutura.style.fontSize="17px";

 }