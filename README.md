# Order Management API

API REST para gerenciamento de pedidos, com controle de fluxo de status e validações de negócio.

## 🚀 Tecnologias
- Node.js
- TypeScript
- Express
- MongoDB + Mongoose
- Vitest

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- Node.js (versão 18+)
- npm ou yarn

## 🔧 Instalação

Clone o repositório:

```bash
git clone https://github.com/wolfhackd/desafio-tecnico-backend.git
cd desafio-tecnico-backend
```

## ⚙️ Variáveis de ambiente

Muito importante 👇

```md
## ⚙️ Variáveis de ambiente
```

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3000
MONGO_URL= LINK
JWT_SECRET= exemplo(asdadsadasdasdadsasda56w4d96a489d4as4d)
```
```md
Existe um arquivo `.env.example` como referência.
```
## ⚙️ Caso queira usar o mongoose+docker

```bash
docker-compose up --build -d
```
## ▶️ Executando o projeto

Modo desenvolvimento:

```bash
npm run dev
```
---

## 🔄 Endpoints principais

```md

## 🔄 Endpoints
```
### Criar usuário
POST /users/create-user

```json
{
  "email": "teste",
  "password": "123456"
}
```

### Logar usuário
POST /users

```json
{
  "email": "teste",
  "password": "123456"
}
```

### Criar pedido
POST /orders

```json
{
  "lab": "Lab Central",
  "patient": "João Silva",
  "customer": "Maria Silva",
  "services": [
    {
      "name": "Exame de Sangue",
      "value": 150
    }
  ]
}
```
### Listar pedidos
GET /orders?page=1&limit=5&state=CREATED

Parâmetros
- Page (Para controle de número de pagina)
- Limit (Limite de itens por página)
- State (Filtro de avanço de processo)

### Avançar state do pedido

PATCH /orders/:id/advance

## 🧪 Testes

Os testes unitários foram escritos utilizando **Vitest**.

Para executar os testes:

```bash
npm run test
```
