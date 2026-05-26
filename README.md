# 🍺 BeerX — Portal Web do Projeto

Este repositório contém o código-fonte do website oficial do **BeerX**, um projeto académico desenvolvido no âmbito da unidade curricular de Ciência e Tecnologia Aplicada I do curso de Engenharia de Computação do Senac Nações Unidas.

O portal funciona como a montra digital do projeto, documentando a jornada da equipa na produção de uma cerveja artesanal automatizada através de IoT, além de centralizar o acesso a todos os relatórios e painéis de dados.

## 🛠️ Tecnologias Utilizadas

A interface web foi desenvolvida utilizando exclusivamente as tecnologias nativas de Front-end (a tríade clássica da Web), garantindo leveza, semântica correta e total responsividade:

* **HTML5:** Estruturação semântica de todas as páginas do portal, garantindo acessibilidade e organização adequada dos blocos de conteúdo.
* **CSS3:** Estilização personalizada e avançada, recorrendo a layouts modernos com CSS Grid e Flexbox, variáveis nativas (`:root`) para a gestão da palete de cores (tons escuros com apontamentos de laranja e verde) e transições suaves nos elementos interativos.
* **JavaScript (ES6+):** Implementação da lógica de interatividade e dinamismo do carrossel de imagens presente na galeria de bastidores.

## 📂 Estrutura de Páginas do Sítio

O website está dividido em três secções principais de navegação:

1.  **Página Inicial (`index.html`):** Apresentação institucional do projeto BeerX, descrição da missão académica, exibição do perfil de todos os integrantes da equipa técnica e a galeria fotográfica dos bastidores.
2.  **História (`historia.html`):** Uma linha cronológica interativa que narra detalhadamente cada etapa do projeto — desde a concepção em sala de aula, a pesquisa da receita, a brassagem laboratorial, até ao processo final de envase e engarrafamento.
3.  **Documentos (`documentos.html`):** Central de recursos do projeto que disponibiliza ligações diretas e descarregamentos de ficheiros vitais, tais como:
    * Termo de Abertura de Projeto (TAP)
    * Atas de Reunião de Alinhamento
    * Relatórios de Especificação Técnica do Sistema de Monitorização IoT (ESP32/LoRaWAN)
    * Lista de Materiais (BOM) do Controlador de Temperatura
    * Acesso aos repositórios de Firmware (Arduino) e ao Dashboard de Dados (Google Data Studio)

## 🚀 Como Executar o Projeto Localmente

Como o projeto foi desenvolvido com tecnologias de Front-end nativas, não é necessária a instalação de dependências ou compiladores.

1.  Clone este repositório para a sua máquina local:
    ```bash
    git clone https://github.com/o-seu-utilizador/beerx-site.git
    ```
2.  Aceda à diretoria do projeto:
    ```bash
    cd beerx-site
    ```
3.  Abra o ficheiro `index.html` diretamente em qualquer navegador web moderno (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, etc.).

---

Animações, estilos visuais e lógicas de componentes desenvolvidos integralmente pela equipa BeerX © 2026.
