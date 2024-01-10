# Buscador de CEP com React

## Descrição

Este projeto é um buscador de CEP (Código de Endereçamento Postal) desenvolvido em React. A aplicação permite que os usuários insiram um CEP e obtenham informações relacionadas a esse endereço.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **API de CEP**: Utilizada para buscar informações de endereços a partir do CEP inserido pelo usuário.
- **CSS**: Estilização básica aplicada para melhorar a interface do usuário.

## Componentes

- **App**: Componente principal que gerencia a lógica de busca e exibição das informações do CEP.

## Funcionalidades

### Busca de CEP

1. O usuário insere um CEP no campo de entrada.
2. Ao clicar no botão "Pesquisar CEP", uma requisição é enviada à API para buscar informações do CEP.
3. As informações do endereço são exibidas abaixo do campo de entrada.

### Validação

- Verifica se o campo de entrada não está vazio antes de realizar a busca.
- Exibe uma mensagem de alerta se o CEP retornado pela API estiver vazio.
