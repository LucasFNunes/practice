#  Tutorial Insomnia

Ao Abrir o aquivo no Insomnia o usuario verá três pastas: Usuario, Empresas e Produtos respectivamente. O arquivo para acessar no Insomnia estara atrelado ao projeto.
Começaremos nosso tutorial pela pasta de UsuariosPara executar o programa utilize:
```npm start```

### Usuarios

Dentro da pasta de usuarios encontraremos todos os get, post, pitch e del do programa. Antes de digitar qual seja o comando no programa iniciaremos com um **_.url**
simulando a porta **localhost:3000/** do programa. 

```CreateNewUser```
:Ferramenta para criação de novos usuarios, onde passaremos o caminho **users/create** como parametro do post e no corpo JSON passaremos name, age, email e password 
do novo usuarios a ser criado. Também pode-se passar o parametro isAdmin como True caso queira que o usuario seja admin e possa interagir com todo o programa sem
nenhum tipo de limitação ou restrição.

```Login```
:Ferramente para iniciar o login no banco, passaremos o caminho **authenticate** como parametro do post e no corpo JSON passaremos email e password do usuarios
a ser logado. Assim gerando um token de login que será necesario para utilizar praticamente qualquer outra aplicação a partir daqui, onde será aplicada na aba **auth->**
**BearerToken** do Insomnia, exceto para as duas proximas que virão a seguir.

```ForgotPassword ```
:Ferramente para caso tenha esquecido sua senha, passaremos o caminho **users/forgotPassword** como parametro do post e no corpo JSON passaremos email e do usuarios que 
esqueceu sua senha. Assim o aplicativo enviara um email, para o email solicitado, com um token que será usado em nossa proxima aplicação.

```ResetPassword ```
:Ferramente para resetar sua senha, passaremos o caminho **users/resetPassword** como parametro do post e no corpo JSON passaremos email, a nova senha password 
e o token que recebemos no email. Assim alterando a senha do usuario e podendo efetuar o login novamente.

```FindAllUsers ```
:Ferramente simples para encontrar todos os usuarios cadastrados, passaremos o caminho **users/findAll** como parametro do get. A partir daqui precisaram da autenticação
do Bearer token para caso o usuario logado seja admin podera ver todos os usuarios cadastrados, caso não, verá apenas os criados por ele, será a norma a partir daqui.

```FindAge```
:Ferramente simples para encontrar todos os usuarios acima de determinada idade, passaremos o caminho **users/findFilter/** como parametro do get.

```UpdateUser```
:Ferramente para alterar as informações do usuario, passaremos o caminho **users/update** como parametro do patch e no corpo JSON passaremos o novo email, age, email e id do
usuario.

```DeleteUser ```
:Ferramente para deletar um usuario, passaremos o caminho **users/delete/IDdoUsuario** como parametro do del e no corpo JSON passaremos email, a nova senha password 
e o token que recebemos no email. Assim alterando a senha do usuario e podendo efetuar o login novamente.

### Empresas

```FindAllEmpresas ```
:Ferramente simples para encontrar todas as empresas, passaremos o caminho **produtos/findall** como parametro do get.

```CreateNewEmpresa ```
:Ferramente criar nova empresa, passaremos o caminho **empresas/create** como parametro do post e no corpo JSON passaremos nameEmpresa, cnpj e userID e assim criar 
a nova empresa.

```UpdateEmpresa ```
:Ferramente para modificar as informações da sua empresa, passaremos o caminho **empresas/update** como parametro do patch e no corpo JSON passaremos id, cnpje e nameEmpresa 
e assim modificando as informações da empresa.

```DeleteEmpresa ```
:Ferramente para deletar uma empresa, passaremos o caminho **empresa/delete/IDdoEmpresa** como parametro do del, e assim apagando a empresa.

### Produtos


```FindAllProdutos ```
:Ferramente simples para encontrar todas as empresas, passaremos o caminho **produtos/findall** como parametro do get.

```CreateNewProduto ```
:Ferramente criar nova empresa, passaremos o caminho **produtos/create** como parametro do post e no corpo JSON passaremos nameProduto, empresaid e assim criar 
o novo produto.

```UpdateProduto ```
:Ferramente para modificar as informações da sua empresa, passaremos o caminho **produtos/update** como parametro do patch e no corpo JSON passaremos nameProduto e id 
e assim modificando as informações do produto.

```DeleteProduto ```
:Ferramente para deletar um produto, passaremos o caminho **produtos/delete/IDdoProduto** como parametro do del, e assim apagando a empresa.

##### Serviços

```CreateNewServicos ```
:Ferramente criar nova empresa, passaremos o caminho **servicos/create** como parametro do post e no corpo JSON passaremos nameServico, qtdServico e produtoid e assim criar 
o novo serviço.

```DeleteServicos ```
:Ferramente para deletar um serviço, passaremos o caminho **servicos/delete/IDdoServiço** como parametro do del, e assim apagando a empresa.

