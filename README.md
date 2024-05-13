# API de Blogs

Este projeto consiste na implementação de uma API e um banco de dados para gerenciamento de conteúdo de um blog. A aplicação é desenvolvida em Node.js utilizando o pacote Sequelize para realizar operações CRUD de posts.

## Funcionalidades

- Desenvolvimento de endpoints conectados ao banco de dados, seguindo os princípios do REST.
- Implementação de autenticação de usuário e login para criação de posts.
- Utilização de categorias para os posts, estabelecendo relações entre posts e categorias.

## Requisitos

- Criação de migrations para as tabelas `users`, `categories`, `blog_posts` e `posts_categories`.
- Desenvolvimento do modelo `User` com as propriedades corretas.
- Implementação do endpoint `POST /login` para autenticação de usuários.
- Criação do endpoint `POST /user` para adicionar novos usuários ao banco de dados.
- Desenvolvimento dos endpoints `GET /user` e `GET /user/:id` para visualização de todos os usuários e de um usuário específico, respectivamente.
- Criação do modelo `Category` com as propriedades adequadas.
- Implementação dos endpoints `POST /categories` e `GET /categories` para adicionar novas categorias e visualizar todas as categorias existentes, respectivamente.
- Desenvolvimento do modelo `BlogPost` e `PostCategory` com as associações corretas.
- Implementação dos endpoints `POST /post`, `GET /post`, `GET /post/:id` e `PUT /post/:id` para adicionar, visualizar, visualizar por ID e atualizar posts, respectivamente.

## Execução do Projeto

1. Clone este repositório.
2. Instale as dependências utilizando o comando `npm install`.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Execute as migrations para criar as tabelas no banco de dados utilizando o comando `npx sequelize-cli db:migrate`.
5. Inicie o servidor com o comando `npm start`.

## Considerações

Este projeto visa demonstrar a aplicação de conceitos de desenvolvimento de APIs RESTful utilizando Node.js e Sequelize. Para qualquer dúvida ou sugestão, sinta-se à vontade para entrar em contato.
