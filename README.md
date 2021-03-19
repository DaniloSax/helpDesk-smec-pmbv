# HelpDesk Ponto Eletrônico
## _Desenvolvido Com Laravel API + VueJS no front_

[![N|Solid](./front/public/img/icons/android-chrome-192x192.png)](http://131.255.233.6:8000/login)

## Visão Geral
Este HelpDesk é focado em administrar serviços de manutenção de ponto eletrônico de toda uma rede municipal com mais de 11k usuários. Desenvolvido com laravel no back e vue no front, é uma aplicação SPA que atualmente está hospedada em um servidor local e permite acessos via extranet.

## Demonstração

### Abrindo um chamado:

![N|Solid](./front/src/assets/images/component_chat.png)

### Chat versão alfa:

#### Chat exclusivo para usuários adminitradores

![N|Solid](./front/src/assets/images/page_chat.png)

#### Chat para todos

![N|Solid](./front/src/assets/images/component_chat.png)


## Techs

HelpDesk é desenvolvido em duas estruturas distintas (front e back), abaixo estão alguams das bibliotecas utilizadas que auxiliaram no desenvolvimento:

- [Vuejs](https://vuejs.org/) - v2.x e todo seu ecosistema (vue-router, vuex,.. ) + libs externas
- [Laravel] (https://laravel.com/docs/7.x) - v7.x usando seus recursos de API como Passport (Oauth2) + libs externas
- [Laravel-websockets] (https://beyondco.de/docs/laravel-websockets/getting-started/introduction) - lib que gerencia o pusher.
- [laravel-echo] (https://github.com/laravel/echo) - real-time cliente
- [vuetify] (https://vuetifyjs.com/en/) - framework css
- [moment] (https://momentjs.com/) - lib para manipulação de dados do tipo data
- [firebase] (https://firebase.google.com/?gclid=Cj0KCQjwl9GCBhDvARIsAFunhskKHbvsUU9nfW8BaIscCWD0eikzWRXvfmLpke_Bd8HB3OnhkShwSYYaAgRzEALw_wcB&gclsrc=aw.ds) - utilizado para gerenciamento da imagem de perfil

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

## Autor

<a href="https://github.com/DaniloSax.png">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/50502834?v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Danilo Veloso</b></sub></a> <a href="https://github.com/DaniloSax" title="Rocketseat">🚀</a>


Feito com ❤️ por Danilo Veloso 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Danilo-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/danilo-veloso/) 
[![Gmail Badge](https://img.shields.io/badge/-danilovsdanilo@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:danilovsdanilo@gmail.com)](mailto:danilovsdanilo@gmail.com)


## License

MIT

**Free Software, Hell Yeah!**
