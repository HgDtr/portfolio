function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

let ion = document.getElementById('icon')

ico.onclick = function (){
    menu.classList.toggle("active");
}

// SKILLS
let a = 'null'

function ts(){
   txt2.innerHTML = `
   O TypeScript, desenvolvido pela Microsoft, é uma extensão do JavaScript que oferece recursos como tipagem estática e interfaces para melhorar a robustez e manutenção do código. Com a capacidade de compilar para JavaScript, o TypeScript facilita o desenvolvimento de aplicativos escaláveis, proporcionando benefícios notáveis em projetos grandes. Essa linguagem é amplamente adotada na comunidade de desenvolvimento de software devido à sua capacidade de prevenir erros e melhorar a qualidade do código.`


   /*var a = document.getElementById('b1')
    if (a.style.filter == 'saturate(1)') {
        a.style.filter = 'saturate(0)'
    } else {
        a.style.display == 'saturate(0)'
        a.style.filter = 'saturate(1)'
    }*/
    
}
    


function react (){
    txt2.innerHTML = `React.js é uma biblioteca de JavaScript desenvolvida pelo Facebook para criar interfaces de usuário interativas e reativas em aplicações web. Utiliza um modelo de programação baseado em componentes, emprega o conceito de Virtual DOM para otimizar as atualizações de interface e usa JSX para facilitar a criação de componentes. Com um fluxo de dados unidirecional, reatividade automática e um ecossistema extenso, o React é amplamente utilizado na indústria para o desenvolvimento eficiente de interfaces de usuário em aplicações web modernas.`

    /*var a = document.getElementById('b2')
    if (a.style.filter == 'saturate(1)') {
        a.style.filter = 'saturate(0)'
    } else {
        a.style.display == 'saturate(0)'
        a.style.filter = 'saturate(1)'
    }*/
 }
 

function html (){
    txt2.innerHTML = `HTML (Linguagem de Marcação de Hipertexto) é uma linguagem padrão para criar páginas web. Utilizando tags, o HTML marca diferentes partes do conteúdo, como parágrafos, cabeçalhos e links. Sua estrutura hierárquica organiza os elementos em uma árvore. Atributos fornecem informações adicionais, e elementos semânticos, introduzidos no HTML5, melhoram a descrição do significado do conteúdo. Exemplo simples de HTML inclui cabeçalho, navegação, seções e rodapé, demonstrando a estruturação básica de uma página web.`

 }

function js (){
    txt2.innerHTML = `
    JavaScript é uma linguagem de programação fundamental para o desenvolvimento web, sendo interpretada e executada nos navegadores dos usuários. Sua versatilidade permite criar interatividade, manipular o DOM, responder a eventos e realizar operações assíncronas. Além de atuar no lado do cliente, o Node.js possibilita sua execução no lado do servidor. Padronizada pelo ECMAScript, JavaScript evolui com versões mais recentes. Frameworks como React e Angular ampliam suas capacidades, facilitando o desenvolvimento de aplicações web complexas. Exemplo simples de código ilustra a manipulação dinâmica do conteúdo de um elemento HTML.`
 }

function css (){
    txt2.innerHTML = `CSS, ou Cascading Style Sheets, é uma linguagem essencial para o design e apresentação de páginas web. Permitindo a estilização de elementos HTML ou XML, o CSS utiliza seletores e propriedades para definir aspectos visuais como cores, fontes e layout. Sua natureza cascata facilita a aplicação consistente de estilos, com herança e especificidade. Fundamental para layouts responsivos, o CSS utiliza unidades de medida variadas e oferece recursos avançados, como Flexbox e Grid. Além disso, possibilita transições e animações, contribuindo para uma experiência do usuário mais dinâmica. Exemplos de código demonstram a aplicação prática de estilos, destacando a importância do CSS no desenvolvimento web moderno.`
 }

function sass (){
    txt2.innerHTML = `
    Sass é uma linguagem de estilo que estende o CSS, oferecendo uma sintaxe mais concisa e recursos avançados. Com características como variáveis, aninhamento, mixins e herança, Sass promove uma escrita de código mais eficiente, reutilizável e organizada. Sua sintaxe simplificada facilita a leitura e manutenção do código. Ao compilar para CSS, o Sass permite uma transição suave entre as duas linguagens, tornando-o uma ferramenta valiosa para desenvolvedores front-end que buscam melhorar a eficiência e a legibilidade em seus estilos.`
 }

function node (){
    txt2.innerHTML = `Node.js é um ambiente de execução para JavaScript no lado do servidor, permitindo que os desenvolvedores usem JavaScript em ambientes além do navegador. Construído sobre a engine V8 do Google Chrome, destaca-se por sua eficiência e escalabilidade. Adota uma arquitetura assíncrona e orientada a eventos, adequada para lidar com muitas conexões simultâneas. O sistema de módulos e o NPM facilitam a organização e o compartilhamento de código. Node.js é frequentemente utilizado para construir APIs, aplicações em tempo real e servidores HTTP eficientes. Exemplo de código demonstra a criação simples de um servidor HTTP.`
 }