function mostrarTela(request, response) {
  response.render('produto');
}

function adicionarProduto(request, response) {
  console.log('ENTROU NA FUNÇÃO ADICIONAR PRODUTO');
  // console.log(request);

  response.redirect('/produto');
}

module.exports = {
  mostrarTela,
  adicionarProduto
} 