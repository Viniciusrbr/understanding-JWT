# understanding-JWT

Este é um projeto de estudos criado com o objetivo de entender a estrutura e funcionamento dos tokens JWT (JSON Web Token) através da implementação própria do mecanismo.

## Objetivo

O principal objetivo deste projeto é aprofundar o conhecimento sobre como os tokens JWT são compostos, assinados e validados. Para isso, foi desenvolvida uma implementação do zero, sem depender de bibliotecas externas específicas para JWT, permitindo assim compreender cada etapa do processo.

## O que é JWT?

JWT (JSON Web Token) é um padrão aberto (RFC 7519) que define um método compacto e seguro para transmitir informações como um objeto JSON entre diferentes partes. Os tokens JWT são amplamente usados em autenticação e troca de informações seguras em aplicações web.

Um token JWT é composto por três partes:

1. **Header** – Identifica o tipo do token e o algoritmo de assinatura.
2. **Payload** – Contém as informações (claims) que serão transmitidas.
3. **Signature** – Garante que o token não foi alterado.

## O que foi implementado

- Criação manual do header, payload e assinatura.
- Codificação e decodificação Base64Url.
- Geração e verificação da assinatura usando algoritmos padrão (ex: HMAC SHA256).
- Validação do token JWT.

## Aprendizados

- Entendimento prático da estrutura do JWT.
- Como funciona a assinatura e validação dos tokens.

## Observações

> **Atenção:** Esta implementação tem fins exclusivamente didáticos. Para aplicações reais, utilize bibliotecas consolidadas e testadas para lidar com JWT, como [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken).


---

Projeto desenvolvido por [Viniciusrbr](https://github.com/Viniciusrbr) para fins de aprendizado.
