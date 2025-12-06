import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Button,
  Input,
  Text
} from 'mondrian-react';
import Header from '../components/Header';
import { validateCPF } from '../utils/validators';
import { maskCPF, removeMask } from '../utils/masks';
import './IdentificacaoCPFPage.css';

const IdentificacaoCPFPage = () => {
  const navigate = useNavigate();

  // Estados
  const [cpf, setCpf] = useState('');
  const [erro, setErro] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Mock de CPFs válidos (clientes)
  const clientesValidos = [
    '12345678900',  // 123.456.789-00
    '98765432100',  // 987.654.321-00
    '11144477735',  // CPF válido de teste
  ];

  // Tipos de erro
  const ERROS = {
    INVALIDO: 'CPF inválido',
    NAO_CLIENTE: 'CPF não cadastrado como cliente Claro',
    VAZIO: 'CPF é obrigatório'
  };

  // Handler para mudança no input
  const handleCpfChange = (e) => {
    const value = e.target.value;
    const maskedValue = maskCPF(value);
    setCpf(maskedValue);

    // Limpar erro ao começar a digitar
    if (erro) {
      setErro(null);
    }
  };

  // Handler para validação ao sair do campo (onBlur)
  const handleBlur = () => {
    if (!cpf) {
      return;
    }

    const cpfLimpo = removeMask(cpf);

    // Validar formato CPF
    if (cpfLimpo.length === 11 && !validateCPF(cpf)) {
      setErro(ERROS.INVALIDO);
    }
  };

  // Handler para continuar
  const handleContinuar = async () => {
    const cpfLimpo = removeMask(cpf);

    // Validar se está vazio
    if (!cpf) {
      setErro(ERROS.VAZIO);
      return;
    }

    // Validar formato
    if (!validateCPF(cpf)) {
      setErro(ERROS.INVALIDO);
      return;
    }

    setIsLoading(true);
    setErro(null);

    // Simular chamada de API para verificar se é cliente
    setTimeout(() => {
      if (clientesValidos.includes(cpfLimpo)) {
        // É cliente válido - navegar para próxima página
        setIsLoading(false);
        navigate('/selecao-contrato', { state: { cpf: cpfLimpo } });
      } else {
        // Não é cliente
        setIsLoading(false);
        setErro(ERROS.NAO_CLIENTE);
      }
    }, 1500);
  };

  // Verificar se deve habilitar botão
  const cpfLimpo = removeMask(cpf);
  const isContinuarDisabled = cpfLimpo.length !== 11 || erro || isLoading;

  return (
    <div className="identificacao-cpf-page">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <Text tag="h1" heading xl inverse>
            Reajuste de oferta 2026
          </Text>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          <Text tag="h3" heading lg className="section-title">
            Confira todas as mudanças que serão feitas na sua oferta.
          </Text>

          <Text body className="instruction-text">
            Primeiro, insira no campo a seguir o seu CPF
          </Text>

          {/* Input de CPF */}
          <div className="input-group">
            <Input
              autoFocus
              disabled={isLoading}
              error={!!erro}
              id="cpf"
              label="CPF"
              maxLength={14}
              onBlur={handleBlur}
              onChange={handleCpfChange}
              placeholder="000.000.000-00"
              type="text"
              value={cpf}
            />
          </div>

          {/* Alert de erro */}
          {erro && (
            <Alert error light className="alert-message">
              <Text icon="alerta" sm>
                {erro}
              </Text>
            </Alert>
          )}

          {/* Botão Continuar */}
          <div className="button-group">
            <Button
              disabled={isContinuarDisabled}
              onClick={handleContinuar}
              primary
              className="btn-continuar"
            >
              {isLoading ? 'Validando...' : 'Continuar'}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default IdentificacaoCPFPage;
