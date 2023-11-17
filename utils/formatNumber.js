export const formatNumber = (number) => {
  const formatarNumeroString = (numeroString) => {
    // Converte a string para um número de ponto flutuante (float)
    let numero = parseFloat(numeroString);

    // Verifica se é um número válido
    if (isNaN(numero)) {
      return 'Número inválido';
    }

    // Formata o número para ter duas casas decimais
    let numeroFormatado = numero.toFixed(2);

    // Divide a parte inteira e decimal do número
    let partes = numeroFormatado.split('.');

    // Adiciona separadores de milhares na parte inteira
    partes[0] = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Retorna a concatenação da parte inteira e decimal com vírgula
    return partes.join(',');
  };

  let numeroFormatado = formatarNumeroString(number);
  return numeroFormatado;
};
