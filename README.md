


# GitHub User Dashboard

![GitHub User Dashboard](https://i.imgur.com/DejrtTB.png)

### Visite 
[Github user Dashboard](https://douglasliman.vercel.app/)

## Descrição

O GitHub User Dashboard é uma aplicação web desenvolvida com ReactJS e styled-components, que permite aos usuários buscar informações detalhadas sobre perfis de usuários do GitHub. A aplicação utiliza OAuth para autenticação e FusionCharts para visualização de dados.

## Funcionalidades

- **Busca de Usuários do GitHub**: Permite buscar e visualizar informações de usuários do GitHub.
- **Autenticação OAuth**: Usuários podem se autenticar usando OAuth.
- **Visualização de Dados**: Gráficos interativos utilizando FusionCharts para exibir informações sobre repositórios, linguagens de programação, seguidores, entre outros.
- **Design Responsivo**: Interface amigável e adaptável a diferentes tamanhos de tela.
- **Perfil do Usuário**: Exibe detalhes do perfil do usuário autenticado, incluindo número de repositórios, seguidores, seguindo, e gists.

## Tecnologias Utilizadas

- **ReactJS**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Create React App (CRA)**: Ferramenta para criar e gerenciar projetos React.
- **Styled-Components**: Biblioteca para estilização de componentes em React.
- **FusionCharts**: Biblioteca JavaScript para criação de gráficos interativos.
- **OAuth**: Protocolo de autenticação para acessar APIs de forma segura.

## Componentes Principais
App.js: Componente principal que gerencia as rotas e a estrutura geral da aplicação.
SearchUser: Componente de busca que permite aos usuários procurar por perfis do GitHub.
UserProfile: Exibe informações detalhadas do perfil do usuário autenticado.
FollowersList: Mostra a lista de seguidores do usuário.
Charts: Componente que renderiza gráficos usando FusionCharts.
## Estilização
A estilização é feita usando styled-components para criar componentes de estilo isolados e reutilizáveis. O tema padrão está definido em styles/theme.js.

## Autenticação
A aplicação usa OAuth para autenticação de usuários. O fluxo de autenticação está implementado em services/auth.js.

## Gráficos
Os gráficos são criados usando a biblioteca FusionCharts. Os gráficos incluem:

- **Linguagens Mais Usadas**: Um gráfico de pizza mostrando a distribuição de linguagens de programação usadas pelo usuário.
- **Repositórios Mais Populares**: Um gráfico de barras mostrando os repositórios mais estrelados.
- **Repositórios Mais Forkeadi=o**: Um gráfico de barras mostrando os repositórios mais bifurcados.
