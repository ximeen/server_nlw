# BACKEND
----------------------------------
### Essa foi um dos primeiros contato que tive com o back_end de uma grande aplicação!
### Utilizei o EXPRESS para conseguir trabalhar com rotas!
### Utilizei o PRISMA que é um ORM pra trabalhar com banco de dados!
-----------------------------------

## Express
Alguns dos conceitos básicos do express é a parte de roteamento. O Roteamento refere-se à definição de terminais do aplicativo (URIs) e como eles respondem às solicitações do cliente.
Esse é um exemplo básico de uma rota no express!
![image](https://user-images.githubusercontent.com/82242762/192648086-7e890eb1-8585-4ac9-a26d-8190ae6bcfbb.png)

No Express temos dois tipos de métodos de roteamento, que são os métodos GET e POST.

## GET
O método GET, um dos verbos mais comuns do HTTP é o GET. Quando utilizamos o GET, os parâmetros são passados no cabeçalho da requisição. Por isso, podem ser vistos pela URI, ideais para dados que não são sensiveis!
Um bom exemplo é a página que você acessa, não é um dado sensivel!
https://www.meusite.com.br/artigos/slug...
Esse é um exemplo /artigos é uma rota /slug seria de fato um artigo que você esta acessando!

## POST
O método POST, ao contrário do GET, envia os parâmetros no corpo da requisição HTTP. Escondendo eles da URI, o que é ideal para dados sensiveis como senhas, nome, cpf etc...

------------------------------------------------------

