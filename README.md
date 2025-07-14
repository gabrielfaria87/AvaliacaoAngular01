Projeto Angular: Cálculo da Área ao Quadrado e Consumo de API
Este projeto foi desenvolvido em Angular 19 para realizar duas funcionalidades principais:

Cálculo da área ao quadrado a partir das dimensões (largura e altura) fornecidas pelo usuário.

Consumo de API para listar dados, como postagens, de um servidor externo.

Funcionalidades
1. Cálculo da Área ao Quadrado
O projeto permite que o usuário insira a largura e a altura de uma superfície e, ao clicar em "Calcular", o sistema exibe a área da superfície ao quadrado.

Input de Largura e Altura: O usuário insere os valores de largura e altura.

Cálculo: Ao clicar no botão "Calcular", a área é calculada e exibida.

2. Consumo de API
A aplicação consome uma API externa (utilizando o serviço AuthApiService) para listar posts de um servidor fictício. Os dados da API são exibidos em uma tabela com os seguintes campos:

ID

Título

Body

Os dados são obtidos utilizando o serviço AuthApiService e exibidos no componente AuthApiComponent.

3. Navegação entre Páginas
O componente Home oferece links para navegar entre as páginas:

Página para calcular a área ao quadrado.

Página para listar dados da API.

Tecnologias Utilizadas
Angular 19: Framework para a construção da aplicação.

TypeScript: Linguagem para o desenvolvimento da aplicação.

HTML e CSS: Para estruturação e estilização da interface.

RxJS: Para o gerenciamento de fluxos assíncronos.

Angular Router: Para a navegação entre as páginas da aplicação.

Estrutura de Diretórios
A estrutura de diretórios do projeto é organizada da seguinte forma:

ruby
Copiar
Editar
src/
├── app/
│   ├── components/               # Componentes da aplicação
│   │   ├── auth-api/             # Componente para consumir a API
│   │   ├── calcular-quadrado/    # Componente para calcular a área ao quadrado
│   │   └── home/                 # Componente de Home
│   ├── service/                  # Serviços para lógica de cálculo e consumo de API
│   │   ├── auth-api.service.ts   # Serviço de consumo da API
│   │   ├── calcular-quadrado.service.ts  # Serviço para calcular área ao quadrado
│   ├── app.routes.ts             # Configuração de rotas
│   ├── app.component.ts          # Componente raiz
│   └── app.module.ts             # Módulo principal
├── assets/                       # Arquivos estáticos
├── environments/                 # Configurações de ambientes (desenvolvimento, produção)
├── index.html                    # Arquivo principal de HTML
├── styles.css                    # Arquivo global de estilos
└── main.ts                       # Ponto de entrada da aplicação
