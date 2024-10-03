export const projects = [
  {
    title: "W3 ERP - Gestão Empresarial",
    description:
      "O W3 ERP é um Sistema Integrado de Gestão Empresarial focado em predição de compras, desenvolvido como parte do módulo 4 do curso de programação, que ao ser concluído com sucesso, garantirá a obtenção do certificado de conclusão de estudos de 1 ano. Este projeto tem como objetivo consolidar as habilidades adquiridas ao longo do curso, preparando o desenvolvedor para atuar como um fullstack em ascensão.",
    functions: [
      "Visualização de Clientes e Produtos em Alta e em Baixa: Monitore os produtos e clientes com melhor e pior desempenho.",
      "Predição de Compras: Função avançada que ajuda a prever necessidades de compra com base em dados históricos.",
      "Controle de Produtos e Baixa: Gestão eficiente do estoque e controle de saídas.",
      "Filtragem de Produtos e Clientes: Filtros dinâmicos para uma busca e visualização mais precisa de informações.",
      "Amostra de Produtos em Tabela com Paginação: Exibição organizada dos produtos em tabela, incluindo paginação para facilitar a navegação.",
      "Acesso por Login: Segurança e controle de acesso através de autenticação.",
      "Controle de Acesso de Usuário: Rotas privadas e gerenciamento de permissões de usuário.",
      "Rotas Privadas com React Router Dom: Proteção de rotas e redirecionamento baseado na autenticação do usuário",
      "Estilizações com Styled-Components: Personalização e estilo dos componentes utilizando a biblioteca Styled-Components.",
      "Validações de Formulário com React Hook Form: Validação de dados de entrada nos formulários, garantindo integridade e usabilidade.",
      "Componentes do Material UI: Utilização de componentes do Material UI para melhorar a experiência do usuário e garantir consistência visual.",
    ],
    url: "https://github.com/dev-anderson-rodrigues/w3-ERP",
    tecnologies: [
      "React",
      "TypeScript",
      "Axios",
      "Vite",
      "Styled-Components",
      "Material UI",
      "React Hook Form",
      "React Router Dom",
    ],
    image: ["/assets/images/w3erp1.png", "/assets/images/w3erp2.png"], // Adicione a URL da imagem do projeto
  },
  {
    title: "API - Customers Management",
    description:
      "Esta API foi construída usando o framework NestJS e permite a criação, leitura, atualização e exclusão (CRUD) de clientes. A API também fornece recursos como validação de dados, transformação de objetos, e documentação automática usando Swagger.",
    functions: [
      "GET /customers/hello: Retorna todos os clientes cadastrados.",
      "GET /customers: Lista todos os clientes com filtro opcional por idade.",
      "GET /customers/:id: Retorna os detalhes de um cliente específico com base no id.",
      "POST /customers: Cria um novo cliente.",
      "PATCH /customers/:id: Atualiza os dados de um cliente específico.",
      "DELETE /customers/:id: Remove um cliente específico do sistema com base no id.",
    ],
    url: "https://github.com/dev-anderson-rodrigues/Exercicios---Modulo-3-nestJS",
    tecnologies: [
      "NestJS: Framework Node.js usado para construir a API.",
      "Class Validator: Usado para validação de dados.",
      "Class Transformer: Usado para transformar objetos entre diferentes representações (ex. DTOs).",
      "TypeScript: Linguagem usada para desenvolvimento da aplicação, com suporte a tipagem estática.",
      "Swagger: Biblioteca usada para documentar a API.",
      "PostgreSQL: Banco de dados usado para armazenar os dados.",
    ],
    image: ["/assets/images/api.webp"], // Adicione a URL da imagem do projeto
  },
];
