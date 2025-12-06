import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Accordion, Text } from 'mondrian-react';
import Header from '../components/Header';
import './SelecaoContratoPage.css';

const SelecaoContratoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Proteção de rota - verificar se tem CPF
  useEffect(() => {
    if (!location.state?.cpf) {
      navigate('/identificacao-cpf', { replace: true });
    }
  }, [location.state, navigate]);

  // Estados
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  // Mock de contratos
  const contratos = [
    {
      id: 1,
      tipo: 'endereco',
      linha1: 'Rua da Claro, 123 - Morumbi',
      linha2: 'São Paulo/SP'
    },
    {
      id: 2,
      tipo: 'endereco',
      linha1: 'Rua do celular, 789 - Sé',
      linha2: 'São Paulo/SP'
    },
    {
      id: 3,
      tipo: 'telefone',
      numero: '(11) 91234-5678'
    },
    {
      id: 4,
      tipo: 'telefone',
      numero: '(11) 99876-5432'
    }
  ];

  // FAQ Data
  const faqData = [
    {
      title: 'Quando essa mudança vai acontecer?',
      content: (
        <Text body>
          A mudança será efetivada a partir de janeiro de 2026, conforme
          determinação da ANATEL e regulamento geral de consumo (RGC).
        </Text>
      )
    },
    {
      title: 'O que muda na minha oferta?',
      content: (
        <Text body>
          Sua oferta será readequada para atender às novas normas regulatórias.
          Os detalhes específicos serão apresentados na próxima etapa após a
          seleção do contrato.
        </Text>
      )
    },
    {
      title: 'Posso escolher outra Oferta Claro?',
      content: (
        <Text body>
          Sim! Você poderá conhecer outras ofertas disponíveis e escolher a que
          melhor se adequa às suas necessidades. Entre em contato com nosso time
          de vendas.
        </Text>
      )
    },
    {
      title: 'O que é o RGC?',
      content: (
        <Text body>
          O Regulamento Geral de Consumo (RGC) é um conjunto de normas da ANATEL
          que estabelece direitos e deveres de prestadoras e usuários de serviços
          de telecomunicações.
        </Text>
      )
    }
  ];

  // Handler para toggle dropdown
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // Handler para seleção de contrato
  const handleSelect = (contrato) => {
    setSelected(contrato);
    setIsOpen(false);

    // Navegar para próxima página
    setTimeout(() => {
      navigate('/comparacao-ofertas', {
        state: {
          contratoId: contrato.id,
          cpf: location.state?.cpf
        }
      });
    }, 300);
  };

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Fechar ao pressionar ESC
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  return (
    <div className="selecao-contrato-page">
      <Header />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <Text tag="h1" heading xl inverse className="hero-title">
            Olá, Usuário!
          </Text>
          <Text tag="p" heading md inverse className="hero-subtitle">
            Sua oferta está passando por uma readequação
          </Text>
          <Text body inverse className="hero-description">
            De acordo com as normas da ANATEL (Regulamento Geral de Consumo - RGC),
            estamos readequando sua oferta para garantir que você continue aproveitando
            os melhores serviços Claro.
          </Text>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Section Title */}
          <Text tag="h3" heading lg className="section-title">
            Confira os detalhes da sua mudança:
          </Text>

          <Text body className="instruction-text">
            Primeiro, selecione o contrato:
          </Text>

          {/* Dropdown Customizado */}
          <div className="dropdown-container" ref={dropdownRef}>
            <button
              className={`dropdown-header ${isOpen ? 'open' : ''} ${
                selected ? 'selected' : ''
              }`}
              onClick={handleToggle}
              type="button"
            >
              <span className="dropdown-icon">📍</span>
              <span className="dropdown-text">
                {selected
                  ? selected.tipo === 'endereco'
                    ? selected.linha1
                    : selected.numero
                  : 'Selecione o contrato'}
              </span>
              <span className="dropdown-chevron">{isOpen ? '▲' : '▼'}</span>
            </button>

            {isOpen && (
              <div className="dropdown-list">
                {contratos.map((contrato) => (
                  <button
                    key={contrato.id}
                    className="dropdown-item"
                    onClick={() => handleSelect(contrato)}
                    type="button"
                  >
                    {contrato.tipo === 'endereco' ? (
                      <div className="item-content">
                        <div className="item-linha1">{contrato.linha1}</div>
                        <div className="item-linha2">{contrato.linha2}</div>
                      </div>
                    ) : (
                      <div className="item-content">
                        <div className="item-numero">{contrato.numero}</div>
                      </div>
                    )}
                    <span className="item-arrow">→</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* FAQ Section */}
          <div className="faq-section">
            <Text tag="h3" heading lg className="faq-title">
              Perguntas Frequentes
            </Text>

            <Accordion data={faqData} single />
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelecaoContratoPage;
