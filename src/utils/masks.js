/**
 * Aplica máscara de CPF (XXX.XXX.XXX-XX)
 * @param {string} value - Valor a ser mascarado
 * @returns {string} - Valor com máscara aplicada
 */
export const cpfMask = (value) => {
  if (!value) return '';

  const cleanValue = value.replace(/\D/g, '');

  return cleanValue
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

/**
 * Aplica máscara de telefone ((XX) XXXXX-XXXX)
 * @param {string} value - Valor a ser mascarado
 * @returns {string} - Valor com máscara aplicada
 */
export const phoneMask = (value) => {
  if (!value) return '';

  const cleanValue = value.replace(/\D/g, '');

  return cleanValue
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1');
};

/**
 * Remove máscara de um valor
 * @param {string} value - Valor com máscara
 * @returns {string} - Valor sem máscara
 */
export const removeMask = (value) => {
  return value ? value.replace(/\D/g, '') : '';
};
