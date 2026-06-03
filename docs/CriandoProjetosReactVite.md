Criando Projetos de React com vite

Objetivos & Conteudo
Criar,configurar e gerenciar aplicaçoes React utilizando o vite para simplificar o processo de desenvolvimento

Conhecendo o vite e porque usa-lo
Criando Projeto com vite
Estrutura de pastas e arquivos
Variaveis de ambiantes

Pre-Requisitos 
    - HTTP
    - Conhecendo o React
    - Preparaçao do ambiente de desenvolvimento
    - Node.js e gerenciadores de pacotes
    - Compiladores empacotadores

 Vite, ferramenta de construção de projetos de código.Vite é uma palavra francesa que significa "rápido" e é pronunciada como vit.

 Segundo a documentação do Vite, eles optam pelo uso de Rollup como bundler."Apesar de esbuild ser mais rápido, a adoção da API de plugin flexível e da infraestrutura do Rollup pela Vite contribuiu fortemente para seu sucesso no ecossistema. Por enquanto, acreditamos que o Rollup oferece uma melhor compensação entre desempenho e flexibilidade."

Por que usar vite? O vite visa resolver problemas de lentidao no desenvolvimento, aproveitando novas tecnologias, como os modulos ES nativos no navegador

Variaveis de Ambiente
    - import.meta.env.[nome]
    

Como o vite faz a criaçao de servidores de desenvolvimento mais rapido?

Servidores de desenvolvimento criados do zero que utiliza um bundler
    - Examinar -> Mais Lento
    - Construir -> Mais Lento

Servidores de desenvolvimento criados com o vite
    - Dependencias -> Mais Rapido
    - Codigo-fonte -> Mais Rapido  

Por que usar o vite?
Inicio lento do servidor
    Codigo-fonte / Source code
        - Contem codigo que precisa ser transformado e editado frequentemente
        - Nem todo o codigo precisa ser carregado ao mesmo tempo
        - O vite serve o codigo-fonte atraves de modulos nativos do tipo ESM     


Bundle based dev server

Entry -> Route -> Module/Module/Module | -> Bundle -> Server Ready
Entry -> Route -> Module/Module | -> Bundle -> Server Ready
Entry -> . . . -> . . . | -> Bundle -> Server Ready

Native ESM based dev server

Server ready -(HTTP request)> entry - (Dynamic import(code split point))> Route -> Module/Module/Module
                entry -(Dynamic import(code split point))> Route -> Module/Module
                entry -(Dynamic import(code split point))> . . . -> . . . 