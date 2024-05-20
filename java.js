function changeContent(page) {
    var mainContent = document.getElementById("maincontent");

        mainContent.classList.add("hidden");
    
    setTimeout(function() {
        mainContent.innerHTML = "";
    
        switch (page) {
            case "produtos":
                mainContent.innerHTML = "<img src='bald18P.png' class='material' id='materialif' style='display: block; margin: 0 auto;'><h3>Todos os nossos produtos são feitos com materiais altamente resistêntes,fazemos baldes de 18 Litros sobre encomenda!</h3>";
                break;
            case "quem-somos":
                mainContent.innerHTML = "<table><tr><td><img src='mvv.png' class='missao'><td><td><h2>Nossão missão vai desde fornecer soluções em embalagens (recipientes) por meio do envolvimento com a reciclagem e sustentabilidade</h2><h2>Ser uma empresa reconhecida como referência pela qualidade e valores agregados aos seus produtos, tornando-se uma opção preferencial para seus parceiros, com integridade, respeito compromisso com o ser humano e claro com o meio ambiente.</h2><td></tr></table>";
            break;
            }

            mainContent.classList.remove("hidden");
            mainContent.classList.add("visible");
    }, 500);
        
}

document.addEventListener("DOMContentLoaded", function() {
        var mainContent = document.getElementById("maincontent");
            mainContent.classList.add("visible");
});


function enviarEmail(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var mensagem = document.getElementById('mensagem').value;
    

    if (nome && email && telefone && mensagem) {
        document.getElementById('mensagemSucesso').style.display = 'block';
        document.getElementById('formContato').reset();
    } else {
        document.getElementById('mensagemErro').style.display = 'block'; 
    }
}


