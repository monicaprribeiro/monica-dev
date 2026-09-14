# monica.dev.br

Portfólio pessoal de Monica Ribeiro.

## Estrutura

- `index.html`
- `styles.css`
- `script.js`
- `Dockerfile`
- `assets/favicon.svg`

## Deploy com Docker / Easypanel

O `Dockerfile` usa Nginx Alpine e copia todo o conteúdo do projeto para `/usr/share/nginx/html/`.

```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html/
EXPOSE 80
```

Após enviar os arquivos ao GitHub, faça o rebuild/redeploy da aplicação no Easypanel.

## Contato

- E-mail: contato@monica.dev.br
- LinkedIn: https://www.linkedin.com/in/monicaprribeiro
- WhatsApp: +55 11 99893-9919
