Compiladores e Empacotadores de Código

Objetivos & Conteúdos
Compiladores(Compilers)
Babel
Empacotadores(Bundlers)
Webpack & Esbuild

Entender os funcionamentos de compiladores e empacotadores(mais conhecidos como bundlers) no desenvolvimento das aplicações React

pré-requisitos 
Conhecendo o React
JavaScript
Client vs Server
Node.js e gerenciadores de pacotes

Compiladores
Ferramentas que traduzem codigo de uma linguagem de programaçao para outra. No contexto das aplicaçoes front-end, faz com que seu projetos possam ser acessivies por diferentes versoes de navegadores e dispositivos mais antigos.

Compiladores
Sao ferramentas essencias no desenvolvimento JavaScript por diversas razoes: Compatibilidade com navegadores, Permite o uso de recursos de codigo modernos, Otimizaçao e minificaçao e Preparaçao do projeto para producao

Linguagem de saida do compilador JavaScript

Diferentes compiladores podem transformar o codigo em diferentes linguagens de progrmaçao

Compiladores com saida binaria(0s e 1s)
    Exemplo: Motor V8 do Node.js e Google Chrome

Conversao de codigo em versoes mais antigas da mesma linguagem de programaçao

Compilaçao para a mesma linguagem de programaçao
    Exemplo: TypeScript

O compilador JavaScript opera em estagios
1. Interpreta o codigo JavaScript para executala-lo rapidamente
2. O compilador otimiza partes frwquentes ou repitidas do codigo
3. Partes otimizadas do codigo sao tranformadas em codigo de maquina para melhorar o desempenho    

JavaScript e uma linguagem de programao interpretada. Codigos-fonte sao traduzidos linha a linha para uma representaçao de codigo de maquina antes da execuçao, em tempo real

Codigo fonte------->Codigo compilado-------->Execuçao do codigo

codigo fonte
Linha 1 ----Linha 1----->Codigo compilado-------Linha 1-------->Execuçao do codigo--------Proxima Linha-------->
Linha 2--------Linha 2-------->Codigo Compilado-------Linha 2------->Execuçao do codigo---------Proxima linha>
Linha 3
Linha 4
...

Compilador JIT

Um compilador JIT e responsável por traduzir o código fonte do programa em código de maquina executável
Utiliza informações sobre o contexto de execução para decidir quais partes do código devem ser compiladas e executadas em tempo real
Identifica partes do código que são executadas com frequência e as otimizadas um desempenho máximo

Babel, Compilador JavaScript

Ferramentas usada principalmente para converter código ECMAScript 2015+ em uma versão compatível com versões anteriores do JS em navegadores ou ambientes atuais e mais antigos
Transformar Sintaxe
Preencher Recursos Ausentes
Transformações de Código-fonte
Otimizações de código, plugins e mais...

Babel com jsx e react
O babel possui prestes, que são conjuntos predefinidos de plugins que configuram o Babel para lidar com determinados tipos de transformação de código

Modulos JS
Quando as aplicações JS surgiram, a maioria delas eram pequenos scripts isolados, ou faziam o trabalho de fornecer o mínimo de interatividade para as paginas web. Com o passar dos anos, o JS começou a ser utilizado em vários contextos diferentes, em sistemas mais completos, trazendo scripts muito maiores, mais pesados e complexos

Modulos JS
Com o aumento das aplicações JS, surgiu a necessidade de dividir nossos códigos em módulos que podem ser importados quando necessário. Escopo e responsabilidade única, Os módulos estão presentes no Node.js e Maioria dos navegadores dão suporte aos modulos

CJS(CommomJs)
Especificação para modulos em JS usada principalmente em ambientes de servidor, como Node.js

ESM(ECMAScript Modules)
Mais comumente utilizado em ambientes de navegador modernos e um algumas ferramentas de desenvolvimento front-end


