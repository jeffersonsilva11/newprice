/**
 * Validador de CPF
 * @param {string} cpf - CPF a ser validado
 * @returns {boolean} - True se válido, false caso contrário
 */
export const validateCPF = (cpf) => {
  const cleanCPF = cpf.replace(/\D/g, '');

  if (cleanCPF.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
  if (/^(\d)\1{10}$/.test(cleanCPF)) {
    return false;
  }

  // Validar primeiro dígito verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cleanCPF.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cleanCPF.charAt(9))) return false;

  // Validar segundo dígito verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cleanCPF.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cleanCPF.charAt(10))) return false;

  return true;
};

/**
 * Validador de código de segurança
 * @param {string} code - Código a ser validado
 * @returns {boolean} - True se válido, false caso contrário
 */
export const validateSecurityCode = (code) => {
  // TODO: Implementar validação de código de segurança
  return code && code.length >= 4;
};
