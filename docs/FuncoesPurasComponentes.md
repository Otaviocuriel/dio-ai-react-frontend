Funções puras e componentes

Se aprofundando na criação de componentes React utilizando funções puras

Objetivo & Conteudo
Funçoes Puras
Efeitos Colaterais(Side Effects)
Modo Estrito(Strict Mode)
Mutaçao Local & Componentes

Entender o conceito e uso de funçoes puras dentro da computaçao, alem de aprender como criar e as vantagens de componentes React usando essa abordagem

Funções puras / pure functions
1 Cuida da sua própria vida
    Não altera objetos ou variáveis que já existem antes de ela ser chamada.
2 Mesmas Entradas, Mesmas Saídas
    Passados os mesmos argumentos, mesmos retornos

Exemplos de função pura
    Um exemplo muito comum das funções puras são formulas matemáticas 
    Y = 2x -- X2 Y4, X3 Y6, X4 Y8

function double(number){
    return 2 * number;
}   

Três entradas que um componente pode ler enquanto renderiza:
    Propriedades(props);
    Estados(states);
    Contextos(context);
   
Estrutura de um componente
    P1: Criar função do componente
    P2: Exportar e importar a função criada
    P3: Finalizar a estrutura do componente
    P4: Adicionar interações