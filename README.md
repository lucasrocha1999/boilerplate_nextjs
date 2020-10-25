# boilerplate_nextjs
Curso de Next.js Rocketseat

## Criar nova aplicação
Para criar uma nova aplicação com Next.js, basta rodar o seguinte comando no seu terminal ou prompt:


`npx create-next-app meu-app`

ou

`yarn create next-app meu-app`

Para abrir e iniciar sua nova aplicação, use os seguintes comandos:

`cd meu-app`

`npm run dev`

## Next.js numa aplicação React Existente:
Se você tem uma aplicação feita com React e quer adicionar o Next.js ao projeto, é bastante simples, basta seguir as instruções abaixo:

Instale next, react and react-dom projeto com o seguinte comando:

`npm install next react react-dom`

ou

`yarn add next react react-dom`

Agora abra seu package.json e adicione os seguintes comandos:

```
"scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
}
```

Esses scripts se referem aos diferentes estágios do desenvolvimento de um aplicativo:

- **dev** - Roda o Next.js em modo de desenvolvimento;
- **build** - Comando para criar a aplicação para uso em produção;
- **start** - Roda o Next.js ao lado do servidor para uso em produção;

## Adicionando TypeScript na aplicação

Basta adicionar o seguinte comando:

`npm install typescript @types/react @types/node -D`

ou

`yarn add typescript @types/react @types/node -D`

