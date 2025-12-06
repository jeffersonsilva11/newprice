/**
 * Validador de CPF
 * @param {string} cpf - CPF a ser validado
 * @returns {boolean} - True se válido, false caso contrário
 */
export const validateCPF = (cpf) => {
  // TODO: Implementar validação de CPF
  const cleanCPF = cpf.replace(/\D/g, '');

  if (cleanCPF.length !== 11) {
    return false;
  }

  // Verifica se todos os dígitos são iguais
  if (/^(\d)\1{10}$/.test(cleanCPF)) {
    return false;
  }

  // TODO: Implementar validação completa dos dígitos verificadores
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
