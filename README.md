# :construction: README em construção ! :construction:

<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você;
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->

## O que foi desenvolvido

**Nessa aplicação, o grupo foi responsável por criar e integrar tanto o back-end quanto o front-end, criando uma plataforma de delivery de cerveja.** 🍻

O projeto não é só codar, mas também é trabalhar em equipe, aprender e se divertir muito!

  <details>
   <summary>
    <strong>Distribuidora de Cervejas - veja mais</strong>
  </summary><br>
  A distribuidora de cervejas da dona Tereza está se informatizando! 🚀 Seu negócio, antes focado em um local específico da cidade, passou a receber uma quantidade massiva de encomendas de outros pontos, expandindo sua atuação via delivery. Isso tudo graças ao excelente preço das bebidas e atendimento da equipe de vendas.

Agora a distribuidora possui alguns pontos de venda na cidade para agilizar no atendimento dessas áreas. Cada ponto de venda, por sua vez, possui uma pessoa vendedora responsável.

Como seu antigo sistema, que era um conjunto de planilhas, já não atende a necessidade do negócio por gerar muita manutenção, dona Tereza procurou a sua equipe de pessoas desenvolvedoras com uma ideia de aplicativo que pudesse agilizar a vida de sua equipe e das pessoas que compram seus produtos. O aplicativo precisa:

- Ter acesso via login: tanto clientes como pessoas vendedoras, assim como a própria dona Tereza, que administra o sistema, devem ter acesso ao aplicativo via login, porém para funções diferentes: (1) A pessoa cliente, que compra da lista de produtos; (2) A pessoa vendedora, que aprova, prepara e entrega; (3) A pessoa administradora, que gerencia quem usa o aplicativo;
- Fazer a comunicação entre clientes e pessoas vendedoras: a pessoa cliente faz o pedido via "carrinho de compras" e a pessoa vendedora aprova, prepara e envia esse pedido. Quando o produto é recebido por quem comprou, essa pessoa marca o pedido como "recebido". Ambos devem possuir detalhes sobre seus pedidos;
- Se a pessoa cliente faz o pedido, o mesmo deve aparecer para a pessoa vendedora em seu dash de pedidos após a atualização da página. A pessoa cliente, por sua vez, deve ter as informações sobre seu pedido quando sua página for atualizada, ou seja, ter informações se o pedido está sendo preparado ou se já saiu pra entrega;

A ideia da sua equipe já pressupõe alguma escalabilidade, dado que foram estabelecidas algumas entidades genéricas no banco de dados e componentização no front-end, para que, caso o sistema cresça, não seja muito difícil mudar e ampliar essa estrutura.

**A proposta encantou, mas dona Tereza quer ver o negócio em ação! Ela está disposta a pagar por um MVP do projeto e vocês fecharam o negócio com um prazo combinado para entrega.**

Agora é mãos à obra! Vamos começar?

</details>

## Requisitos para rodar localmente

- ⚠️ Versão 16 do `node` - para evitar conflitos de versão caso não tenha essa versão instalada você pode usar o [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) para fazer o gerenciamento de versões.

- Banco de dados - MySQL

<details>
  <summary>
    <strong>Rodar Localmente</strong>
  </summary><br>
Certifique-se de ter o MySQL instalado e rodando.

- ⚠️ **Inicie o projeto pela raiz, utilizando o comando `npm i`**.

## Back-End

Na pasta back-end

- `npm install` (instala as dependências)
- `npm start` (inicia o servidor back-end)

## Front-end

Na pasta front-end

- `npm install`
- `npm start`
</details>
<br>

## Requisitos para rodar com Docker

- ⚠️ `Docker` && `Docker Compose`. Precisa das portas: 3000 / 3001 e 3306 livres.

<details>
  <summary>
    <strong>Rodando através do Docker</strong>
  </summary><br>

Na raiz do projeto:

- `npm run compose:up` (Para iniciar o projeto. Front-end estará em `localhost:3000`)
- `npm compose:down` (Para parar o projeto)

</details><br>

## Composição do projeto

- **Fluxo Comum**

  - Tela de Login
    - Para acompanhar as rotas de adm e vendedor pode usar os seguintes emails/senha:
      - admin: `adm@deliveryapp.com` senha: `--adm2@21!!--`
      - vendedor: `fulana@deliveryapp.com` senha: `fulana@123`
    - Para acompanhar rota de cliente é só fazer seu registro
  - Tela de Registro

- **Fluxo do Cliente**

  - Tela de Produtos
  - Tela de Checkout
  - Tela de Pedidos
  - Tela de Detalhes do pedido

- **Fluxo da Pessoa Vendedora**

  - Tela de Pedidos
  - Tela de Detalhes/Controle do Pedido

- **Fluxo da Pessoa Administradora**
  - Tela de gerenciamento de usuários

## ✒️ Autores

<a href="https://github.com/brunotomaz-dev" target="_blank">
  <img align="center" alt="Dev" src="https://img.shields.io/badge/Bruno Tomaz-Github-informational?style=for-the-badge&logo=dev.to" />
</a>
<br/>
<br/>
<a href="https://github.com/DanSmaR" target="_blank">
  <img align="center" alt="Dev" src="https://img.shields.io/badge/Danilo Martins-Github-gree?style=for-the-badge&logo=dev.to" />
</a>
<br/>
<br/> 
<a href="https://github.com/Eder-Ferreira-Chargobito" target="_blank">
  <img align="center" alt="Dev" src="https://img.shields.io/badge/Eder Ferreira-Github-orange?style=for-the-badge&logo=dev.to" />
</a>
<br/>
<br/> 
<a href="https://github.com/BrenoOPrado" target="_blank">
  <img align="center" alt="Dev" src="https://img.shields.io/badge/Breno Prado-Github-blueviolet?style=for-the-badge&logo=dev.to" />
</a>
<br/>
<br/> 
<a href="https://github.com/emilylmenezes" target="_blank">
  <img align="center" alt="Dev" src="https://img.shields.io/badge/Emily Menezes-Github-ff69b4?style=for-the-badge&logo=dev.to" />
</a>
<br/>
<br/>

Você também pode ver a lista de todos os [colaboradores](https://github.com/brunotomaz-dev/project-delivery-app/graphs/contributors) que participaram deste projeto.
