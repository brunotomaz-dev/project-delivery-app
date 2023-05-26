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

## Requisitos

- ⚠️ Versão 16 do `node` - para evitar conflitos de versão caso não tenha essa versão instalada você pode usar o [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) para fazer o gerenciamento de versões.

- Banco de dados - MySQL

### Rodar Localmente

Certifique-se de ter o MySQL instalado e rodando.

- ⚠️ **Inicie o projeto pela raiz, utilizando o comando `npm i`**. Após isso, é possível fazer a instalação de ambos os aplicativos (back e front) através da raiz do projeto, utilizando o comando `npm run dev:prestart` (esse comando também restaurará o banco de dados, caso o `.env` esteja configurado corretamente).

#### Back-End

Na pasta back-end

- `npm start` (inicia o servidor back-end)

### Front-end

Na pasta front-end

- `npm start`

<details>
  <summary>
    <strong>🪛 Scripts relevantes do <code>package.json</code> principal</strong>
  </summary><br>

**Observação:** nesse projeto, utilizamos o gerenciador de processos `pm2`. Caso você queira entender melhor o que são gerenciadores de processos Node, dê uma conferida [nesse link](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/c2647acd-7619-4c8a-a7d8-13b452281c35/lesson/99c92a3a-8b45-4428-8ed6-c1c8a7ffdeac).

**São os scripts da raiz do projeto (`./package.json`) e não das aplicações individuais `./front-end/package.json` e `./back-end/package.json`**:

- `start`: Limpa as portas `3000` e `3001` e simula a inicialização no avaliador. Também prepara o campo rodando o `Sequelize` para restaurar o **banco de dados de testes** (final `-test`) e sobe a aplicação com `pm2` em modo `fork` (uma instância para cada aplicação). Nesse modo, as alterações não são assistidas;

  - _uso (na raiz do projeto): `npm start`_

- `stop`: Para e deleta as aplicações rodando no `pm2`;

  - _uso (na raiz do projeto): `npm stop`_

- `dev`: Limpa as portas `3000` e `3001` e sobe a aplicação com `pm2` em modo `fork` (uma instância pra cada aplicação). Nesse modo, as atualizações são assistidas (modo `watch`);

  - _uso (na raiz do projeto): `npm run dev`_

- `dev:prestart`: A partir da raiz, esse comando faz o processo de instalação de dependências (`npm i`) nos dois projetos (`./front-end` e `./back-end`) e roda o `Sequelize` no `./back-end` (lembrar de configurar o `.env` no mesmo);

  - _uso (na raiz do projeto): `npm run dev:prestart`_

- `db:reset`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local;

  - _uso (na raiz do projeto): `npm run db:reset`_

- `db:reset:debug`: Roda os scripts do `Sequelize` restaurando o **banco de dados de desenvolvimento** (final `-dev`). Utilize esse script caso ocorra algum problema no seu banco local. Esse comando também é capaz de retornar informações detalhadas de erros (quando ocorrerem no processo);

  - _uso (na raiz do projeto): `npm run db:reset:debug`_

- `test <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de testes** (final `-test`);

  - _uso (na raiz do projeto): `npm test`, `npm test 01login 02register` ou ainda `npm run test 01 02`_

- `test:dev <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`);

  - _uso (na raiz do projeto): `npm run test:dev`, `npm run test:dev 01login 02register` ou ainda `npm test:dev 01 02`_;

- `test:dev:open <nomes-dos-arquivos>`: Roda todos os testes (ou uma parte deles caso `<nomes-dos-arquivos>` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`), exemplo `npm test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`. Esse teste deve abrir uma janela mostrando o comportamento das páginas;

  - _uso (na raiz do projeto): `npm run test:dev:open`, `npm run test:dev:open 01login 02register` ou ainda `npm test:dev:open 01 02`_;

- `test:dev:report "<nomes-dos-arquivos>"`: Roda todos os testes (ou uma parte deles caso `"<nomes-dos-arquivos>"` seja definido) utilizando o **banco de dados de desenvolvimento** (final `-dev`). Esse teste devolve um output em texto com o resultado de todos os testes. Os `logs` são gerados em `./__tests__/reports`.
  - _uso (na raiz do projeto): `npm run test:dev:report`, `npm run test:dev:report "01login 02register"` ou ainda `npm run test:dev:report "01 02"`_;

</details>

## Composição do projeto

- **Fluxo Comum**

  - Tela de Login
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
