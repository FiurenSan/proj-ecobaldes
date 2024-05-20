    document.addEventListener("DOMContentLoaded", function() {
        function loadContent(event) {
            event.preventDefault(); // Previne o comportamento padrão do link

            // Obtém o template e clona seu conteúdo
            const template = document.getElementById('content-template');
            const content = template.content.cloneNode(true);
            
            // Obtém a div principal onde o conteúdo será inserido
            const appDiv = document.getElementById('app');
            appDiv.innerHTML = '';  // Limpa o conteúdo anterior
            appDiv.appendChild(content);

            // Oculta o elemento com o ID 'menu'
            const menu = document.getElementById('menu');
            if (menu) {
                menu.style.display = 'none';
            }
            
            const menunav = document.getElementById('menunav');
            if (menunav) {
                menunav.style.display = 'none';
            }
            
            const maincontent = document.getElementById('maincontent');
            if (maincontent) {
                maincontent.style.display = 'none';
            }
            
            const fot = document.getElementById('fot');
            if (fot) {
                fot.style.display = 'none';
            }
            const bt = document.getElementById('bt');
            if (bt) {
                bt.style.display = 'none';
            }
            const bt2 = document.getElementById('bt2');
            if (bt2) {
                bt2.style.display = 'none';
            }
            const bt3 = document.getElementById('bt3');
            if (bt3) {
                bt3.style.display = 'none';
            }
            const bt4 = document.getElementById('bt4');
            if (bt4) {
                bt4.style.display = 'none';
            }
            const head2 = document.getElementById('head2');
            if (head2) {
                head2.style.display = 'none';
            }

        }

        // Adiciona um evento de clique ao botão
        const loadContentButton = document.getElementById('loadContentButton');
        if (loadContentButton) {
            loadContentButton.addEventListener('click', loadContent);
        }
    });

    document.addEventListener("DOMContentLoaded", function() {
        function loadContent(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
    
            // Oculta os elementos de texto e imagem relacionados ao menu principal
            const principalHeader = document.querySelector('.principal');
            if (principalHeader) {
                principalHeader.style.display = 'none';
            }
            
            const menunav = document.querySelector('.menunav');
            if (menunav) {
                menunav.style.display = 'none';
            }
            
            const maincontent = document.getElementById('maincontent');
            if (maincontent) {
                maincontent.style.display = 'none';
            }
            
            const fot = document.getElementById('fot');
            if (fot) {
                fot.style.display = 'none';
            }
    
            // Exibe o formulário de contato
            const contactForm = document.getElementById('contactFormContainer');
            if (contactForm) {
                contactForm.style.display = 'block';
            }
        }
    
        // Adiciona um evento de clique ao botão "Fale Conosco"
        const loadContentButton = document.getElementById('loadContentButton');
        if (loadContentButton) {
            loadContentButton.addEventListener('click', loadContent);
        }
    });