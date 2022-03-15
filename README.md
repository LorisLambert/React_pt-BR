<h1>Introdução ao repositório</h1>

<p>Este repositório contém um resumo que fiz durante meu aprendizado sobre <b> ⚛️  React.js</b>.</p>

<h1>Sumário</h1>

<ol>
    <li><a href="#content1">O que é React.js?</a></li>
    <li><a href="#content2">Criando ou clonando uma aplicação react</a></li>
    <li><a href="#content3">Estrutura de uma aplicação react</a></li>
    <li><a href="#content4">Boas práticas de organização, nomeação e criação de arquivos no React</a></li>
</ol>

<h1>O que é React.js?<a name="content1"></a></h1>

<p>É uma biblioteca criada pelo <i><b>Facebook®</b></i> com o objetivo de criar <i>single-page application (SPA)</i>, uma nova forma de estruturar aplicações web com resultado direto no desempenho e usabilidade. Uma SPA é carregada toda de uma vez do servidor, portanto, ela não recarrega toda vez que há uma interação, ela reage individualmente aonde a ação foi concebida.</p>
<p>A linguagem usada na biblioteca React é uma mistura de <code>html</code>, <code>css</code> e <code>javascript</code>: o <code>JSX</code>. Esse padrão é uma extensão de sintaxe do <code>javaScript</code> responsável por produz “elementos” React. A seguir veja algumas diferenças que teremos do <code>JSX</code> para as demais citadas acima:</p>

<ul>
    <li><code>ClassName</code> é usado em vez de <code>class</code> para adicionar classes CSS, como <code>class</code> é uma palavra-chave reservada em JavaScript</li>
    <li>Propriedades e métodos em JSX são camelCase, ou seja, <code>onclickse</code> tornarão <code>onClick</code></li>
    <li>As tags de autofechamento devem terminar em uma barra, por exemplo, <code>img /</code></li>
</ul>
<p>O React não requer o uso da extensão <code>.jsx</code>, é possível usar a extensão <code>.js</code>. Clique <a href="https://reactjs.org/">aqui</a> para acessar a <b>doumentação completa</b> da biblioteca.</p>

<h1>Criando ou clonando uma aplicação react<a name="content2"></h1>

<h3>Pré-requisitos da máquina</h3>

<p>Para criar e rodar uma aplicação React, é necessário o <a href="https://nodejs.org/en/">node.js</a> e um gerenciador de pacotes como o como o <a href="https://www.npmjs.com/">npm</a> ou o<a href="https://yarnpkg.com/">yarn</a>. O Yarn é um gerenciador de pacotes desenvolvido em 2016 pelo <i><b>Facebook®</b></i> para o ambiente JavaScript Node.js. Consultes os links marcados para baixar as ferramentas.</p>

<h3>Criando ou clonando</h3>

<p>O Facebook criou o <a href='https://github.com/facebook/create-react-app'>Create React App</a>, um ambiente que vem pré-configurado com tudo que você precisa para construir um aplicativo React. Ele criará um servidor de desenvolvimento ao vivo, usará Webpack para compilar automaticamente React, JSX e ES6, prefixará arquivos CSS automaticamente e usará ESLint para testar e alertar sobre erros no código.</p>

<p>Para configurar <code>create-react-app</code>, execute o seguinte código em seu terminal, um diretório acima de onde você deseja que o projeto more:</p>

```shell
npx create-react-app react-aplication
```

<p>Caso clone um rapositório remoto de uma aplicação React em sua máquina, há necessidade de instalar as dependências. Para isso o seguinte comando dentro do diretório da aplicação antes de rodar.</p>

```shell
npm install
```

<p>Se preferir usar outro gerenciador de pacotes, use a seguinte linha de comando:</p>

```shell
yarn install
```

<h3>Geração de um <i>localhost</i></h3>

<p>Durante o desenvolvimento, é necessário iniciar um <i>localhost</i> da aplicação. Isso permite observar como a aplicação está sendo carregada pelo <i>browser</i> e se há erros via <i>console</i>. Para gerar um <i>localhost</i>, verifique se você está no diretório da aplicação e utilize a seguinte linha de comando:</p>

```shell
npm start
```

<p>Se preferir usar outro gerenciador de pacotes, use a seguinte linha de comando:</p>

```shell
yarn start
```

<p>Uma vez gerado o <i>localhost</i>, que é basicamente um endereço de IP, é possível acessar a aplicação pelo navegador padrão de sua máquina, geralmente <code>http://localhost:3000/</code>.</p>

<h1>Estrutura de uma aplicação react<a name="content3"></a></h1>

<h3>package.json</h3>

<p>É um repositório central de configurações de ferramentas e um local onde o <code>npm</code> armazena os nomes e versões dos pacotes instalados.</p>

<p>Veja a seguir algumas propriedades:</p>

<ul>
    <li><code>name</code> Define o nome do pacote; O nome deve ser menor que 214 caracteres, não pode ter espaços e somente pode conter letras minúsculas, hífens (-) ou underscore (_)</li>
</ul>

```json
"name": "project"
```

<ul>
    <li><code>author</code> Exibe o nome do autor do pacote</li>
</ul>

```json
"author": "Loris Lambert &lt;contato@lorislambert.com.br&gt; (https://www.lorislambert.com.br)"
```

<ul>
    <li><code>version</code> Indica a versão atual do pacote</li>
</ul>

```json
"version": "1.0.0"
```

<ul>
    <li><code>private</code> Se definido como true, previne que a aplicação/pacote seja acidentalmente publicada no npm</li>
</ul>

```json
"private": true
```

<h3>Pasta public</h3>

<ul>
    <li><b>index.html</b>: todos os <i>browser</i> requerem páginas em <code>.html</code>, portanto, esse arquivo é responsável por chamar toda a aplicação react. Uma vez carregado toda a aplicação carregada, o que passar a valer é a dinâmica gerada pelo javascript.</li>
</ul>

<p>Por padrão, essa página apenas contém informações de configuração para os <i>browser</i> e uma <code>div</code> com um id root, que é aonde a aplicação é renderizada. Veja o seguinte exemplo:</p>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    <title>title-project</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

<p>Chamamos a <code>div id='root'</code> de nó DOM “raiz” porque tudo dentro dele será gerenciado pelo React DOM.</p>
<h3>Pasta src</h3>

<ul>
    <li><b>index.js</b>: é o arquivo responsável por importar as funcionalidades do arquivo <code>App.jsx</code> e mandar tudo ser renderizado na id root.</li>
</ul>
<p>Sua estrutura é basicamente assim:</p>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
```

<ul>
    <li><b>App.jsx</b>: o arquivo <code>App.jsx</code>  deve somente chamar as páginas da aplicação e containers, conforme a lógica específica da aplicação.</li>
</ul>

<p>Sua estrutura é basicamente assim:</p>

```jsx
import React from 'react';
import './App.scss';

function App() {
  return ();
}

export default App;
```

<ul>
    <li><b>containers</b>: é uma pasta que contém o arquivo <code>App.jsx</code> e várias outras páginas de uma aplicação.</li>
</ul>

<p><i>Containers</i> também são <i>components</i>, o que difere é a proporção: <i>containers</i> contém <i>components</i>, portanto, são mais volumosos.</p>

<ul>
    <li><b>components</b>: é uma pasta que contém os componentes reutilizáveis característicos de uma aplicação react.</li>
</ul>

<p>Os <i>components</i> são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas de “adereços”, usualmente codificada como <code>props</code>) e retornam elementos React que descrevem o que deve aparecer na tela.</p>

<ul>
    <li><b>utils</b>: é uma pasta que possui funções que serão reaproveitadas e utilizadas em várias partes dos códigos</li>
</ul>

<p>É extremamente importante que seu código seja compreensível e limpo. Portanto, concentrar essas funções, ajuda na manutenção e na otimização do código. Aonde for necessário usar, basta importar.</p>

<ul>
    <li><b>constants</b>: armazena valores que são utilizados em vários lugares dos códigos</li>
</ul>

<ul>
    <li><b>providers</b>: é uma pasta que contém toda a parte de integração com as APIs da aplicação</li>
</ul>
<h1>Boas práticas de organização, nomeação e criação de arquivos no React<a name="content4"></h1>

<p>Para criar novas pastas ou arquivos, basta criar um novo arquivo com a extensão que deseja ( <code>.jsx</code>, <code>.js</code>, etc) ou criar uma nova pasta simples com o nome que deseja. É definido como padrão para:</p>

<h5><i>Containers</i></h5>

<ol>
    <li>Nome deve ser o mais direto e específico possível</li>
    <li>Ser uma única palavra</li>
    <li>Não ser palavra reservada de sintaxe das tecnologias usadas</li>
    <li>Começar com a letra maiúscula</li>
    <li>Todos os <i>containers</i> devem ser criados dentro de uma pasta</li>
    <li>Dentro da pasta do <i>container</i> devem existir dois arquivos um <code>.js</code> e um <code>.scss</code></li>
    <li>Pasta, arquivo <code>.js</code> e arquivo <code>.scss</code> devem possuir o mesmo nome</li>
</ol>

<p>São exemplos de <i>containers</i>:</p>

<ul>
    <li>Pasta <i>Home</i>, <code>Home.js</code> e <code>Home.scss</code></li>
    <li>Pasta <i>Login</i>, <code>Login.js</code> e <code>Login.scss</code></li>
    <li>Pasta <i>Chat</i>, <code>Chat.js</code> e <code>Chat.scss</code></li>
</ul>

<h5><i>Components</i></h5>

<ol>
    <li>Nome deve ser o mais direto e específico possível</li>
    <li>Ser uma única palavra</li>
    <li>Não ser palavra reservada de sintaxe das tecnologias usadas</li>
    <li>Começar com a letra maiúscula</li>
    <li>Todos os <i>components</i> devem ser criados dentro de uma pasta</li>
    <li>Dentro da pasta do <i>components</i> devem existir dois arquivos um <code>.js</code> e um <code>.scss</code></li>
    <li>Pasta e o arquivo <code>.scss</code> devem possuir o mesmo nome</li>
    <li>Por padrão, o arquivo <code>.js</code> deve receber o nome de <code>index</code></li>
</ol>

<p>São exemplos de <i>components</i>:</p>

<ul>
    <li>Pasta <i>Balloon</i>, <code>index.js</code> e <code>Balloon.scss</code></li>
    <li>Pasta <i>Button</i>, <code>index.js</code> e <code>Button.scss</code></li>
    <li>Pasta <i>Input</i>, <code>index.js</code> e <code>Input.scss</code></li>
</ul>
<p><b>Nota: Nas funções declaradas nos <i>components</i>, sempre atribua um nome que comece com uma letra maiúscula. O React trata os componentes que começam com letras minúsculas como tags DOM.</b></p>

<p>A seguir veja um exemplo de uma função que cria um <i>component</i>  Welcome corretamente com a primeira letra maiúscula que recebe uma propriedade yourName = ' ' :</p>

```jsx
function Welcome(props) {
  return <h1>Hello, {props.yourName}</h1>;
}
```

<p>A principal vantagem de se ter <i>components</i> é a possibilidade de se reutilizar, como o exemplo do <i>component</i> Welcome criado anteriormente:</p>

```jsx
function App() {
  return (
    <div>
      <Welcome name="Loris" />
      <Welcome name="Lohane" />
    </div>
  );
}
```
