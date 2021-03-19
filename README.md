# HelpDesk Ponto Eletrônico
## _Desenvolvido Com Laravel API + VueJS no front_

[![N|Solid](./front/public/img/icons/android-chrome-192x192.png)](http://131.255.233.6:8000/login)

## Visão Geral
Este HelpDesk é focado em administrar serviços de manutenção de ponto eletrônico de toda uma rede municipal com mais de 11k usuários. Desenvolvido com laravel no back e vue no front, é uma aplicação SPA que atualmente está hospedada em um servidor local que permite acessos via extranet.

## Demonstração

### Abrindo um chamado:

[![N|Solid](./front/src/assets/images/component_chat.png)]

### Chat versão alfa:

![N|Solid](./front/src/assets/images/page_chat.png)
![N|Solid](./front/src/assets/images/component_chat.png)


## Techs

HelpDesk é desenvolvido em duas estruturas distantas (front e back), abaixo estão alguams das bibliotecas utilizadas que auxiliaram no desenvolvimento:

- [Vuejs] - v2.x e todo seu ecosistema (vue-router, vuex,.. ) + libs externas
- [Laravel] - v7.x usando seus recursos de API como Passport (Oauth2) + libs externas
- [pusher-php-server] - lib para comunicação em real-time
- [Laravel-websockets] - lib que gerencia o pusher.
- [laravel-echo] - real-time cliente
- [vuetify] - framework css
- [moment] - lib para manipulação de dados do tipo data
- [firebase] - utilizado para gerenciamento da imagem de perfil

E claro, o próprio HelpDesk é um código aberto com um repositório público
no GitHub.

## Instalação

HelpDesk requer [Node.js](https://nodejs.org/) v12+ para rodar.

Siga as orientações para ambientes de desenvolvimento.
front-end:
```sh
npm i
npm run serve
```
back-end: 
```sh
composer install
php artisan migrate
php artisan db:seed
php artisan passport:install
php artisan serve
php artisan websockets:serve
```

## Docker

Atualmente estou trabalhando em algumas atualizações, nesta, pretendo implantar docker para melhor manutenção e deploy.

## License

MIT

**Free Software, Hell Yeah!**
