
# REST API - Conversor de moedas

## Sobre
Conversor de moedas é uma API fácil de usar. Com ela você pode fazer uma conversão de moedas, salvar sua transação em um banco de dados embutido e buscar todas suas transações através de um ID de usuário.

## Proposito
Demosntrar certo domínio e conceitos relevantes em uma aplicação API - REST como:

- Estrutura organizada de uma aplicação API REST.
- Tipagen bem estruturada com o uso de TypeScript evitando problemas no ambiente desenvolvimento.
- Testes unitários utilizando Vitest e Supertest.
- Gerenciamento do banco de dados imbutido na aplicação.
- Tratamento de erros.
- Conceito de paradigma funcional e paradigma orientado a objeto.
- Deploy
- Documentação organizada.


# Referencias da API

### End point base da API

```
  https://conversor-de-moedas.herokuapp.com/api/
```


### Fazer uma conversão

```
  GET https://conversor-de-moedas.herokuapp.com/api/convert/{user_id}/{source_currency}/{source_amount}/{destination_currency}
```

| Parâmetro | Tipo     | Descrição                |
| :-------- | :------- | :------------------------- |
| `user_id` | `string` | **Requirido**. Seu ID de usuário |
| `source_currency` | `string` | **Requirido**. Moeda que será convertida  |
| `source_amount` | `number` | **Requirido**. Valor a ser convertido |
| `destination_currency` | `string` | **Requirido**. Moeda para qual será convertida |

##### Exemplo:
``
    GET https://conversor-de-moedas.herokuapp.com/api/convert/12151902/brl/10/jpy
``
```
{
  "transaction_id": "2fb25525-2c41-4c57-baac-ddb41d24b827",
  "user_id": "12151902",
  "source_currency": "BRL",
  "source_amount": 1.5,
  "destination_currency": "JPY",
  "destination_amount": 39.260331,
  "conversion_used": "BRL/JPY",
  "date": "Fri, 03 Mar 2023 12:57:29 GMT"
}
```

### Checar transações de um usuário

```
  GET https://conversor-de-moedas.herokuapp.com/api/transactions/{user_id}
```

| Parâmetro | Tipo     | Descrição                       |
| :-------- | :------- | :-------------------------------- |
| `user_id`      | `string` | **Requirido**. ID de usuário a ser verificado |


##### Exemplo:
``
    GET https://conversor-de-moedas.herokuapp.com/api/transactions/12151902
``
```
{
 [
  {
    "user_id": 12151902,
    "source_currency": "BRL",
    "source_amount": 1.5,
    "destination_currency": "JPY",
    "conversion_used": "BRL/JPY",
    "date": "Fri, 03 Mar 2023 12:57:29 GMT"
  },
  {
    "user_id": 12151902,
    "source_currency": "USD",
    "source_amount": 10,
    "destination_currency": "BRL",
    "conversion_used": "USD/BRL",
    "date": "Fri, 03 Mar 2023 13:26:58 GMT"
  }
]
}
```
