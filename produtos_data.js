// produtos_data.js
const produtos = [
  {
    id: 1,
    nome: "Relógio Clássico",
    preco: "9.000",
    imagem: "imagens/relogio1.jpg",
    descricao: "Relógio masculino clássico, resistente à água, ideal para todas as ocasiões."
  },
  {
    id: 2,
    nome: "Pomada Wave",
    preco: "5.000",
    imagem: "imagens/pomada1.jpg",
    descricao: "Pomada para waves com fixação média, ideal para o cuidado diário dos cabelos."
  },
  {
    id: 3,
    nome: "Durag Preto",
    preco: "3.000",
    imagem: "imagens/durag_preto.jpg",
    descricao: "Durag de tecido macio, ajustável, ideal para formação de waves."
  },
  // Adicione mais produtos aqui com id, nome, preco, imagem e descricao
];

localStorage.setItem('produtosPP', JSON.stringify(produtos));