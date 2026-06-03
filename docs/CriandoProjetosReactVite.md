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

Por que usar o vite?
Atualizaçoes lentas do servidor

Ediçao de um arquivo do projeto de codigo
    - Reconstruçao de todo o pacote(Bundle) do zero e demorado
    - Quanto maior o tamanho do projeto, mais demorado e a atualizaçao do servidor de desenvolvimento
    - Impacta na produtividade dos desenvolvedores que estao trabalhando nos projetos

Hot Module Replacement(HMR)  
    Permite que os modulos sejam atualizados em tempo real(durante a execuçao) sem afetar o restante da pagina e sem a necessidade de recarregar a pagina no navegador, aumentando significamente a experiencia do desenvolvedor

 Editor de codigo|-------Ediçao do arquivo------> Servidor HMR|---------Detecçao de mudanças------>Modulo especifico|--------Atualizaçao parcial do navegador------->Navegador

Ediçao do Arquivo: Voce edita um modulo
Detecçao de Mudanças: HMR detecta a mudança
Atualizaçao Parcial: Somente o modulo editado (e seus dependentes diretos) e atualizado

Atraves do vite temos atualizaçoes mais rapidas do servidor
No vite, a substituiçao de modulo em tempo real(HMR) e realizada por meio de ESM nativo 

Antes da atualizaçao do codigo
Modulo A|-------->Modulo B|-------->Modulo C|

Depois da atualizaçao do codigo sem HMR
Modulo A|------>Modulo B------>Modulo c|

O vite utiliza cabecalhos HTTP para acelerar recarregamentos completos da pagina nos servidores de desenvolvimento
Mais uma vez, permitindo que o navegador faça mais trabalho por nos

Em produçao, o vite realiza o empacotamento dos arquivos assim como outras ferramentas
Mesmo que os modulos ECMAScript nativos sejam amplamente suportados agora, enviar ESM desagrupados para produçao ainda e ineficiente;