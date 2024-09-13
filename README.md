# DVD Rental Postgres

Este repositório é destinado a relembrar os conceitos de Node.js e adicionar e treinar os conceitos de Docker para, futuramente, utilizar o GitHub Actions.

## Descrição do Projeto

Este projeto é uma aplicação de gerenciamento de aluguel de DVDs, construída com Node.js e TypeScript. A aplicação utiliza um banco de dados PostgreSQL para armazenar informações sobre filmes, categorias e aluguéis. O projeto também inclui a configuração de contêineres Docker para facilitar o desenvolvimento e a implantação.

## Estrutura do Projeto

- **src/**: Contém o código-fonte da aplicação.
- **docker-compose.yml**: Arquivo de configuração do Docker Compose para orquestrar os contêineres.
- **Dockerfile**: Arquivo de configuração do Docker para construir a imagem da aplicação.
- **.env**: Arquivo de variáveis de ambiente.
- **README.md**: Este arquivo de documentação.

## Tecnologias Utilizadas

- Node.js
- TypeScript
- PostgreSQL
- Docker
- Docker Compose
- GitHub Actions

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js (versão 16 ou superior)
- Docker
- Docker Compose

### Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/dvd-rental-postgres.git
   cd dvd-rental-postgres
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
     ```env
     DB

_HOST

=postgres
     DB_PORT=5432
     DB_USER=your_db_user
     DB_PASS=your_db_password
     DB_NAME=your_db_name
     ```

4. Construa e inicie os contêineres Docker:
   ```sh
   docker-compose up -d
   ```

5. Verifique se os contêineres estão rodando:
   ```sh
   docker-compose ps
   ```

6. Acesse os logs dos contêineres:
   ```sh
   docker-compose logs -f
   ```

## Scripts Disponíveis

- `npm start`: Inicia a aplicação.
- `npm run dev`: Inicia a aplicação em modo de desenvolvimento com hot-reload.
- `npm run build`: Compila o código TypeScript para JavaScript.
- `npm test`: Executa os testes.
- `npm run lint`: Verifica a qualidade do código.

## Deploy no Docker Hub

### Construção e Push da Imagem

1. Faça login no Docker Hub:
   ```sh
   docker login
   ```

2. Construa a imagem Docker:
   ```sh
   docker build -t seu-usuario/my-app:latest .
   ```

3. Tag a imagem:
   ```sh
   docker tag seu-usuario/my-app:latest seu-usuario/my-app:latest
   ```

4. Envie a imagem para o Docker Hub:
   ```sh
   docker push seu-usuario/my-app:latest
   ```

### Executando a Imagem do Docker Hub

1. Atualize o arquivo `docker-compose.yml` para usar a imagem do Docker Hub:
   ```yaml
   services:
     postgres:
       image: bitnami/postgresql:latest
       container_name: postgres-db
       ports:
         - '5432:5432'
       volumes:
         - db-data:/var/lib/postgresql/data
       environment:
         - POSTGRESQL_USERNAME=${DB_USER}
         - POSTGRESQL_PASSWORD=${DB_PASS}
         - POSTGRESQL_DATABASE=${DB_NAME}

     api:
       image: seu-usuario/my-app:latest
       container_name: api-server
       ports:
         - '3000:3000'
       depends_on:
         - postgres
       environment:
         - DB_HOST=${DB_HOST}
         - DB_PORT=${DB_PORT}
         - DB_USER=${DB_USER}
         - DB_PASS=${DB_PASS}
         - DB_NAME=${DB_NAME}

   volumes:
     db-data:
   ```

2. Execute o Docker Compose:
   ```sh
   docker-compose up -d
   ```

## CI/CD com GitHub Actions

Este projeto inclui uma configuração de CI/CD usando GitHub Actions para automatizar a construção, teste e deploy da aplicação.

### Configuração do Workflow

O arquivo de workflow está localizado em `.github/workflows/ci.yml` e inclui os seguintes passos:

- Checkout do repositório
- Configuração do Node.js
- Instalação das dependências
- Construção do projeto
- Execução dos testes
- Lint do código
- Construção e push da imagem Docker para o Docker Hub

### Segredos do GitHub

Para que o GitHub Actions possa acessar suas credenciais do Docker Hub, adicione os seguintes segredos ao seu repositório no GitHub:

- `DOCKER_USERNAME`: Seu nome de usuário do Docker Hub
- `DOCKER_PASSWORD`: Sua senha do Docker Hub

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
```

Este README fornece uma visão geral do projeto, instruções de configuração, detalhes sobre o deploy no Docker Hub e informações sobre a configuração de CI/CD com GitHub Actions. Certifique-se de ajustar os detalhes conforme necessário para refletir com precisão o seu projeto.

