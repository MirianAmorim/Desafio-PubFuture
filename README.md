DesafioPubFuture-Mirian Amorim
Projeto para o Desafio PubFuture

API REST utilizando Nest_JS,Prisma e Postgresql
contem 3 rotas que são interligadas entre elas:

Conta.

Receita.

Despesa.

Cada rota contem as opções criar, listar todos, listar por id, editar por id e deletar por id.

Para utilizar a API, é preciso instalar o express, o prisma e utilizar o comando a seguir para linkar os models db do prisma com o banco de dados:

npx prisma db push

Utilizando o comando a seguir, é possivel utilizar uma versão grafica do prisma para manipular os dados do banco:

npx prisma studio