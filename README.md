
# 📋 Dashboard de Usuários

Um painel moderno e responsivo que lista usuários com paginação e detalhes individuais, feito com **React + Vite** no frontend e **JSON Server** como API simulada.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ React
- ⚡ Vite
- 🔁 React Router DOM
- 🗃️ JSON Server
- 💅 HTML + CSS puro
- 📱 Responsividade com Grid CSS

---

## 🎯 Funcionalidades

- ✅ Listagem de usuários com avatar, nome, email e endereço
- ✅ Paginação com botões de navegação e numeração dinâmica
- ✅ Tela de detalhes com mais informações do usuário
- ✅ Design moderno, limpo e responsivo
- ✅ Navegação suave com React Router

---

## 🛠️ Como Rodar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/miobobi/dashboard-usuarios.git
cd dashboard-usuarios
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o JSON Server

```bash
npx json-server db.json --port 3001
```

> A API estará disponível em: http://localhost:3001/peoples

### 4. Rode o projeto React

```bash
npm run dev
```

> A interface estará acessível em: http://localhost:5173

---

## 🧪 Estrutura do Projeto

```
📦 dashboard-usuarios
├── db.json               # Banco de dados fake (JSON Server)
├── src
│   ├── components
│   │   └── UserCard.jsx
│   ├── pages
│   │   └── UserDetails.jsx
│   ├── App.jsx
│   └── main.jsx
├── public
│   └── index.html
└── README.md
```

---

## ✅ Desafios Atendidos

### 🔹 Desafio 1 – Paginação
- Botões de próxima/anterior desabilitam automaticamente
- Números gerados dinamicamente com base na quantidade de usuários
- Layout responsivo com grid adaptável

### 🔹 Desafio 2 – Detalhes
- Clique no card leva à página com informações completas:
  - Nome, email, endereço, avatar, telefone, nascimento e descrição
- Estilo agradável e intuitivo
- Navegação com React Router

---

## 👤 Autor

Feito com dedicação por [Miobobi](https://github.com/miobobi)

