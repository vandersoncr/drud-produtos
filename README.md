
# 📦 Lojinha - CRUD com Node.js, Express, TypeScript e Handlebars

Este projeto é um CRUD desenvolvido com Node.js, Express, TypeScript, Bootstrap e Handlebars.. Os dados são persistidos em um arquivo JSON (`db/data.json`), simulando um banco de dados simples.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript
- **Express.js** – Framework web minimalista
- **TypeScript** – Tipagem estática para JavaScript
- **Handlebars** – Template engine para renderização de páginas dinâmicas
- **SCSS** – Pré-processador CSS para estilização
- **JSON File Database** – Persistência de dados simulada em arquivo `.json`

---

## 🗂️ Estrutura de Pastas

```
├── build/               # Arquivos compilados
├── db/                  # Base de dados simulada (data.json)
├── node_modules/        # Dependências do projeto
├── public/              # Arquivos públicos (CSS, JS, imagens)
│   ├── css/
│   ├── img/
│   ├── js/
│   └── scss/
├── src/                 # Código fonte
│   ├── controllers/     # Lógica dos controllers
│   ├── router/          # Rotas da aplicação
│   ├── types/           # Definições de tipos TypeScript
│   ├── utils/           # Funções utilitárias e conexão com o 'db'
│   └── views/           # Templates Handlebars
│       ├── helpers/     # Helpers do Handlebars
│       ├── layouts/     # Layouts base
│       └── main/        # Páginas principais
│       └── products/    # Páginas relacionadas aos produtos
```

---

## 📦 Instalação e Execução

### 🔧 Pré-requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [npm](https://www.npmjs.com/)  
---

### 🚀 Passos para rodar o projeto:

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. **Acesse a pasta do projeto:**

```bash
cd ***pagina***
```

3. **Instale as dependências:**

```bash
npm install
```

4. **Execute em modo desenvolvimento:**

```bash
npm run dev
```

O servidor será iniciado em [http://localhost:3000] 

5. **Build do projeto (opcional):**

```bash
npm run build
```

6. **Rodar em produção:**

```bash
npm start
```

---

## 📜 Scripts disponíveis

| Comando          | Descrição                         |
| ---------------- | --------------------------------- |
| `npm run dev`    | Executa o projeto com Nodemon     |
| `npm run build`  | Compila o projeto para JavaScript |
| `npm start`      | Executa o projeto compilado       |

---

## 🧠 Funcionalidades Implementadas

- [x] Listagem de produtos
- [x] Criação de produtos
- [x] Edição de produtos
- [x] Exclusão de produtos
- [x] Validação de dados no backend
- [x] Estrutura modularizada com Typescript
- [x] Template engine com Handlebars
- [x] Layouts reutilizáveis
- [x] Helpers customizados para templates
- [x] Armazenamento local via JSON

---

## 📑 Estrutura de Dados (db/data.json)

Exemplo de item:

```json
{
  "id": 1,
  "name": "Produto Exemplo",
  "price": 100,
  "description": "Descrição do produto exemplo."
}
```

---

## 🛠️ Futuras melhorias

- 🔧 Migração para banco de dados (SQLite, PostgreSQL ou MongoDB)
- 🔒 Implementação de autenticação e autorização
- 🚀 Deploy na nuvem (Render, Vercel, Railway, etc.)
- 🧪 Testes automatizados
- 🌐 API REST para consumo externo

---

## 🤝 Contribuição

Fique à vontade para abrir issues, enviar pull requests ou sugerir melhorias.

---
