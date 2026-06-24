React Manipulação de eventos
Entendo como podemos manipular eventos dos componentes React de uma forma simples e fácil

Objetivo & Conteúdo
Manipulando eventos
Propagação de eventos
Prevenindo o comportamento o padrão
Eventos e efeitos colaterais

Conheceremos uma maneira de trabalharmos com a manipulação de eventos dentro do react e varias técnicas para criamos componentes mais interativos

pré-requisitos
Js/Ts e funções
React & componentes
Propriedades no React

Manipuladores de eventos
Manipuladores de eventos são como pequenos códigos que fazemos o que são ativados quando os usuários interagem, como quando clicam, movem o mouse, selecionam um campo em um formulário, e assim por diante

Na tela de login de um sistema, o usuário clicou no botão "entra" e no sistema disparou o processo de autenticação deste usuário enviando os dados preenchidos no formulário

Pontos de atenção
As funções precisam ser passadas aos manipuladores de eventos, não invocadas

<button onClick={handleClick}> <button onClick={handleClick()}>

Ao escrever o código em linha, o mesmo conceito acontece, mas de uma maneira diferente

<button onClick={() => alert('...')}>  <button onClick={alert('...')}>
