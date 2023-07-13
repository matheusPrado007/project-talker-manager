<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
<!--   <title>README - Projeto Back-end</title> -->
</head>

<body>
  <h1>Boas-vindas ao repositório do projeto Talker Manager!</h1>
  <p>Nesse projeto desenvolvi uma API CRUD (Create, Read, Update e Delete) e alguns endpoints que irão ler e escrever em um arquivo utilizando fs.</p>

  <h2>Requisitos</h2>
  <p>Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:</p>
  <ul>
    <li>Node.js (<a href="https://nodejs.org">https://nodejs.org</a>)</li>
  </ul>

  <h2>Instalação</h2>
  <p>Siga as etapas abaixo para executar o projeto localmente:</p>
  <ol>
    <li>Clone este repositório para o seu diretório local:</li>
    <code>git clone git@github.com:matheusPrado007/project-talker-manager.git;</code>
    <li>Acesse o diretório do projeto:</li>
    <code>cd project-talker-manager/ </code>
    <li>Instale as dependências do projeto:</li>
    <code>npm install</code>
    <li>Configuração do banco de dados:</li>
    <ul>
      <li>Crie um banco de dados MySQL em sua máquina.</li>
      <li>Copie o arquivo <code>.env.example</code> para <code>.env</code>:</li>
      <code>cp .env.example .env</code>
      <li>Abra o arquivo <code>.env</code> e configure as variáveis de ambiente relacionadas ao MySQL com as informações do
        seu banco de dados.</li>
    </ul>
    <li>Execute as migrações do banco de dados:</li>
    <code>npm run migrate</code>
    <li>Inicie o servidor:</li>
    <code>npm start</code>
  </ol>

  <p>Após seguir essas etapas, o servidor deve estar em execução na porta definida no arquivo <code>.env</code>.</p>

  <h2>Uso</h2>
  <h3>Rotas disponíveis</h3>
  <p>A aplicação possui as seguintes rotas:</p>
  <ul>
    <li><strong>GET /users</strong>: Retorna todos os usuários cadastrados.</li>
    <li><strong>GET /users/:id</strong>: Retorna um usuário específico com base no ID fornecido.</li>
    <li><strong>POST /users</strong>: Cria um novo usuário. Os dados devem ser fornecidos no corpo da solicitação.</li>
    <li><strong>PUT /users/:id</strong>: Atualiza um usuário existente com base no ID fornecido. Os dados devem ser
      fornecidos no corpo da solicitação.</li>
    <li><strong>DELETE /users/:id</strong>: Remove um usuário específico com base no ID fornecido.</li>
  </ul>

  <h3>Validações de Dados</h3>
  <p>As validações de dados são realizadas utilizando a biblioteca Joi. Os dados de entrada são validados antes de serem
    processados pelo servidor. Se algum dado inválido for enviado, a API retornará um erro com uma mensagem explicativa.</p>

  <h2>Contribuição</h2>
  <p>Contribuições são bem-vindas! Se você deseja contribuir para este projeto, siga as etapas abaixo:</p>
  <ol>
    <li>Fork este repositório.</li>
    <li>Crie um branch para suas alterações:</li>
    <code>git checkout -b minha-feature</code>
    <li>Faça suas alterações e faça commit delas:</li>
    <code>git commit -m "Minha feature incrível"</code>
    <li>Envie suas alterações para o branch remoto:</li>
    <code>git push origin minha-feature</code>
    <li>Abra uma Pull Request neste repositório.</li>
  </ol>

</body>

</html>
