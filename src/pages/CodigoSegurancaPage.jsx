import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Alert,
  Button,
  Input,
  Link,
  Modal,
  Radio,
  Text
} from 'mondrian-react';
import Header from '../components/Header';
import './CodigoSegurancaPage.css';

const CodigoSegurancaPage = () => {
  const navigate = useNavigate();

  // Estados
  const [codigo, setCodigo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [canalSelecionado, setCanalSelecionado] = useState('1');

  // Dados mock - canais disponíveis
  const canaisDisponiveis = [
    { id: '1', tipo: 'SMS', numero: '11 99*****34', checked: true },
    { id: '2', tipo: 'SMS', numero: '11 99*****78', checked: false },
    { id: '3', tipo: 'Email', email: 'm****lva@claro.com.br', checked: false }
  ];

  // Handler para mudança no input
  const handleCodigoChange = (e) => {
    const value = e.target.value;
    // Aceitar apenas números
    if (/^\d*$/.test(value) && value.length <= 6) {
      setCodigo(value);
      setShowError(false);
    }
  };

  // Handler para validar código
  const handleContinuar = async () => {
    if (codigo.length !== 6) {
      return;
    }

    setIsLoading(true);
    setShowError(false);

    // Simular validação de API
    setTimeout(() => {
      // Mock: aceita código "123456" como válido
      if (codigo === '123456') {
        setIsLoading(false);
        navigate('/identificacao-cpf');
      } else {
        setIsLoading(false);
        setShowError(true);
      }
    }, 1500);
  };

  // Handler para reenviar código
  const handleReenviar = () => {
    setShowModal(true);
  };

  // Handler para confirmar canal e reenviar
  const handleConfirmarReenvio = () => {
    setShowModal(false);
    setShowSuccess(true);
    setCodigo('');

    // Esconder mensagem de sucesso após 5 segundos
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  // Handler para voltar
  const handleVoltar = () => {
    navigate(-1);
  };

  // Verificar se botão continuar deve estar habilitado
  const isContinuarDisabled = codigo.length !== 6 || isLoading;

  return (
    <div className="codigo-seguranca-page">
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
            Código de segurança
          </Text>

          <Text body className="instruction-text">
            Digite o código de 6 dígitos enviado para o seu celular ou e-mail cadastrado.
          </Text>

          {/* Alert de sucesso */}
          {showSuccess && (
            <Alert success light className="alert-message">
              <Text icon="checkbox-circulo" sm>
                Código reenviado com sucesso!
              </Text>
            </Alert>
          )}

          {/* Input de código */}
          <div className="input-group">
            <Input
              autoFocus
              disabled={isLoading}
              error={showError}
              id="codigo-seguranca"
              inputMode="numeric"
              maxLength={6}
              onChange={handleCodigoChange}
              placeholder="Código de segurança"
              type="text"
              value={codigo}
            />
          </div>

          {/* Alert de erro */}
          {showError && (
            <Alert error light className="alert-message">
              <Text icon="alerta" sm>
                Código inválido. Por favor, verifique e tente novamente.
              </Text>
            </Alert>
          )}

          {/* Link para reenviar código */}
          <div className="reenviar-link">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleReenviar();
              }}
            >
              Reenviar novo código
            </Link>
          </div>

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

            {/* Botão Voltar */}
            <Button
              onClick={handleVoltar}
              secondary
              outline
              className="btn-voltar"
            >
              Voltar
            </Button>
          </div>
        </div>
      </main>

      {/* Modal de seleção de canal */}
      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        >
          <div className="modal-content">
            <Text tag="h3" heading lg className="modal-title">
              Código de segurança
            </Text>

            <Text body className="modal-description">
              Selecione abaixo por qual canal deseja receber o código de segurança
            </Text>

            <div className="radio-group">
              {canaisDisponiveis.map((canal) => (
                <Radio
                  key={canal.id}
                  checked={canalSelecionado === canal.id}
                  id={`canal-${canal.id}`}
                  name="canal"
                  onChange={() => setCanalSelecionado(canal.id)}
                  value={canal.id}
                >
                  {canal.tipo} - {canal.numero || canal.email}
                </Radio>
              ))}
            </div>

            <div className="modal-actions">
              <Button
                onClick={handleConfirmarReenvio}
                primary
                className="btn-modal-continuar"
              >
                Continuar
              </Button>

              <Button
                onClick={() => setShowModal(false)}
                secondary
                outline
                className="btn-modal-voltar"
              >
                Voltar
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default CodigoSegurancaPage;
