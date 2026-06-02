Criando Projetos React com create react app

Conceitos e vantagens do CRA

Instalaçao e configuraçao de projetos react

Problemas ao utilizar o CRA

Variaveis de Ambientes

Objetivo & Conteudo
Criar, configurar e gerenciar aplicaçoes React utilizando a ferramenta Create React App para simplificar o processo de desenvolvimento

Pre-requisitos
Conhecendo o React
Preparaçao do ambiante de desenvolvimento
Node.js e Gerenciadores de pacotes
Compiladores e Empacotadores

Conceitos e vantagens do CRA

Create React App(CRA):Ferramenta para a criaçao de aplicaçoes React

Simplifica o processo de configuracao inial dos projetos de codigo com React -> Babel e Webpack

Create React app
Beneficios em se utilizar ferramentas como o CRA

Menos para aprender
Recarregamento instataneo
Otimizaçao automatica
Apenas uma dependencia

Criando varaveis de ambiente personalizadas

Variaveis de Ambiente
- As variaveis de ambiente devem comecar com:
    - REACT_APP_*
    - REACT_APP_ORGANIZATION_NAME
    - REACT_APP_API_URL
    - REACT_APP_ENABLE_LOG=1
    - REACT_APP_RELEASE_DATA=2024-01-01
- Ao alterar qualquer variavel de ambiente, e preciso reiniciar o servidor de desenvolvimento, caso ele esteja em execuçao.    

Como criar variaveis de ambiente personalizadas:
1. Criar um arquivo .env para configurar as variaveis de ambiente
2. Adicionar as variaveis de ambiente
3. Reiniciar o servidor de desenvolvimento
4. Acessar os valores das variaveis de ambiente atraves do codigo process.env.REACT_APP_[nome da env]

Create react app
Os problemas em utilizar ferramentas como CRA -> O CRA foi removido da documentaçao oficial do React, tamanho e desempenho podem ser comprometidos
    ° Possui uma serie de dependencias que aumentam o tamanho final do bundle
    ° Lentidao na criaçao de novos projetos
    ° E mais lento e pesado que metodos modernos

Existem soluçoes melhores e mais performaticas no mercado
    ° Vite
    ° Next.js
    ° Remix
    ° Gatsby

