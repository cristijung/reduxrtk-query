# AS características do recurso Redux Thunk
## Importante: recurso incluso no Redux RTK

### Redux Thunk é um middleware muito popular para Redux.
É uma biblioteca de gerenciamento de estado para aplicativos JavaScript, especialmente com frameworks como React. Ele permite que as actions creators retornem funções em vez de objetos de ação normais. Essas funções têm a capacidade de despachar ações assíncronas, fazer chamadas de API e realizar operações assíncronas antes de despachar uma ação normal para atualizar o estado da aplicação.

A necessidade do Redux Thunk surge quando você deseja realizar operações assíncronas no Redux, como fazer uma solicitação de API para buscar dados. Sem o Redux Thunk, as actions creators só podem retornar objetos de ação simples, o que limita a capacidade de lidar com lógica assíncrona diretamente nas actions creators.

Com o Redux Thunk, as actions creators podem retornar uma função que recebe os métodos dispatch e getState como argumentos. Isso abre a porta para lógica assíncrona dentro das actions creators, permitindo a execução de operações como chamadas de API assíncronas e o despacho de ações baseadas nos resultados dessas operações.

## O RTK e o Thunk

Em um código que usamos o Redux Toolkit com RTK Query, este que possui sua própria camada de middleware para lidar com chamadas de API assíncronas. Essa camada de middleware do RTK Query automatiza a busca de dados de endpoints da API e o gerenciamento do estado na store Redux, tornando mais fácil e direto o processo de integração de APIs em um aplicativo React Redux.

O RTK Query encapsula toda a lógica de interação com a API, incluindo a realização de solicitações HTTP, armazenamento em cache, normalização de dados e atualização automática da store Redux com os dados retornados. Ele faz isso usando a arquitetura Redux e suas convenções de nomenclatura padronizadas.

# Usando Métodos GET, PUT, DELETE e POST com RTK Query
## Mutation

No contexto do Redux Toolkit Query (RTK Query), uma "mutation" é um termo usado para descrever operações que causam efeitos colaterais no servidor, como criar, atualizar ou deletar dados. Diferentemente das "queries", que são usadas para buscar e ler dados sem causar efeitos colaterais, as mutations são projetadas para alterar o estado dos dados no servidor. Elas são equivalentes a operações POST, PUT, PATCH ou DELETE em uma API REST.

### Como Funcionam as Mutations no RTK Query
O RTK Query fornece uma abordagem simplificada e poderosa para definir e utilizar mutations. Ao criar uma API com o RTK Query usando a função createApi, você pode definir endpoints que representam mutations. Cada mutation é definida com uma função query que retorna um objeto descrevendo como realizar a requisição, incluindo a URL, o método HTTP (como POST, PUT, DELETE) e o corpo da requisição (se necessário).

Após definir uma mutation, o RTK Query automaticamente gera hooks que você pode usar em seus componentes React para acionar essas mutations. Esses hooks gerenciam o ciclo de vida da requisição, incluindo o estado de carregamento, o resultado (dados ou erro) e a execução da mutation.

### Exemplo de Mutation
Vamos considerar um exemplo simples com base no serviço de API que criamos anteriormente para tarefas. Se quisermos adicionar uma funcionalidade para criar uma nova tarefa, podemos definir uma mutation da seguinte forma: