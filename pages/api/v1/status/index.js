function status(request, response) {
  response.status(200).json({ Valor: "Thiago Teste" });
}

export default status;