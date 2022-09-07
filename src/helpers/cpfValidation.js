const isCpfValid = (cpf) => {
  const newCpf = String(cpf).replace(/[\s.-]/g, '');
  let soma = 0;
  let resto;

  if (newCpf === '00000000000') return false;

  for (let i = 1; i <= 9; i += 1) {
    soma += Number(newCpf.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(newCpf.substring(9, 10), 10)) return false;

  soma = 0;

  for (let i = 1; i <= 10; i += 1) {
    soma += parseInt(newCpf.substring(i - 1, i), 10) * (12 - i);
  }
  resto = (soma * 10) % 11;

  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(newCpf.substring(10, 11), 10)) return false;
  return true;
};

export default isCpfValid;
