# Desafio Técnico - Frontend

O propósito desse desafio é a criação de frontend usando Javascript + REACT para um quadro de kanban. Esse quadro possui listas, que contém cards.


![](https://github.com/angela-oliveira/files/blob/master/kanban1.png?raw=true)

Com o card em modo de edição:

![](https://github.com/angela-oliveira/files/blob/master/kanban2.png?raw=true)

Mensagem de erro: 

![](https://github.com/angela-oliveira/files/blob/master/kanban3.png?raw=true)

Tooltip:

![](https://github.com/angela-oliveira/files/blob/master/kanban.png?raw=true)


## Rodando a API

Para rodá-la, faça:

```console
> cd BACK
> npm install
> npm run server
```

Ela responderá na porta 5000.


## Rodando o FRON

Para rodá-l, faça:

```console
> cd FRONT
> npm install
> npm start
```

Ela responderá na porta 3000.

## Requisitos

**Utilização da API**

A API que provemos nesse projeto utiliza JWT para autenticação, você deve fazer a seguinte requisição antes qualquer outra:

```
(POST) http://0.0.0.0:5000/login/

{ "login":"letscode", "senha":"lets@123"}
```

Feita a requisição você receberá um token em formato json. Esse token deve ser enviado em todas as requisições subsequentes pelo header Authorization de acordo com o padrão JWT.

```
Authorization : 'Bearer <token>'
```

Lembre-se de setar os headers Accept e ContentType para json em todas as requisições...

---

A API tem os seguintes entrypoints:

```
(GET)       http://0.0.0.0:5000/cards/
(POST)      http://0.0.0.0:5000/cards/
(PUT)       http://0.0.0.0:5000/cards/{id}
(DELETE)    http://0.0.0.0:5000/cards/{id}
```

---

**GET** obtém uma lista de cards.

A API retorna um array com o seguinte formato:

```
[
    {
        id:uuid
        titulo : string, 
        conteudo: string, 
        lista: string
    },
    ...
]
```

---

**POST** adiciona um novo card, passe-o pelo corpo da requisição com o seguinte formato:

```
{
    titulo : string, 
    conteudo: string, 
    lista: string
}
```

A api retornará o card completo como o id atribuído.

---

**PUT** altera um card existente, passe o id na URL e o card completo pelo corpo da requisição de acordo com o formato:

```
{
    id: uuid (o mesmo passado na URL)
    titulo : string, 
    conteudo: string, 
    lista: string
}
```

A api retornará o card completo que foi salvo.

---

**DELETE** remove um card existente, passe o id na URL.

A api retornará a lista dos cards que sobraram (igual ao GET).

```
[
    {
        id:uuid
        titulo : string, 
        conteudo: string, 
        lista: string
    },
    ...
]
```

---
