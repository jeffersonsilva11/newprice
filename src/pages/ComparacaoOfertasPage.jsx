import React from 'react';
import { useLocation } from 'react-router-dom';
import { Accordion, Text } from 'mondrian-react';
import OfertaCard from '../components/OfertaCard';
import './ComparacaoOfertasPage.css';

const ComparacaoOfertasPage = () => {
  const location = useLocation();
  const contratoId = location.state?.contratoId;
  const cpf = location.state?.cpf;

  // Mock de contratos para exibir o selecionado
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

  const contratoSelecionado = contratos.find(c => c.id === contratoId);

  // Mock Data - Oferta Atual
  const ofertaAtual = {
    tipo: 'atual',
    servicos: [
      {
        id: 'internet-atual',
        tipo: 'internet',
        icone: 'wifi',
        nome: 'Internet',
        preco: 89.90,
        detalhes: {
          velocidade: '200 Mega',
          wifi: 'Modem WiFi incluso',
          instalacao: 'Instalação grátis'
        }
      },
      {
        id: 'movel-atual',
        tipo: 'movel',
        icone: 'smartphone',
        nome: 'Móvel',
        preco: 99.90,
        detalhes: {
          internet: '50GB',
          ligacoes: 'Ilimitadas para qualquer operadora',
          sms: 'SMS ilimitado',
          apps: ['WhatsApp', 'Instagram', 'Facebook'],
          passaportes: ['Passaporte Américas - 2GB/dia por 7 dias']
        }
      },
      {
        id: 'fixo-atual',
        tipo: 'fixo',
        icone: 'phone',
        nome: 'Fixo',
        preco: 39.90,
        detalhes: {
          ligacoes: 'Ilimitadas para fixo e móvel nacional',
          identificador: 'Identificador de chamadas incluso'
        }
      },
      {
        id: 'tv-atual',
        tipo: 'tv',
        icone: 'tv',
        nome: 'TV',
        preco: 79.90,
        detalhes: {
          canais: 'Mais de 100 canais',
          hd: '40 canais em HD',
          assinaturas: ['Telecine', 'Globoplay']
        }
      }
    ]
  };

  // Mock Data - Oferta Atualizada
  const ofertaAtualizada = {
    tipo: 'atualizada',
    servicos: [
      {
        id: 'internet-atualizada',
        tipo: 'internet',
        icone: 'wifi',
        nome: 'Internet',
        preco: 99.90,
        detalhes: {
          velocidade: '300 Mega',
          wifi: 'Modem WiFi 6 incluso',
          instalacao: 'Instalação grátis'
        }
      },
      {
        id: 'movel-atualizada',
        tipo: 'movel',
        icone: 'smartphone',
        nome: 'Móvel',
        preco: 119.90,
        detalhes: {
          internet: '80GB',
          ligacoes: 'Ilimitadas para qualquer operadora',
          sms: 'SMS ilimitado',
          apps: ['WhatsApp', 'Instagram', 'Facebook', 'Twitter', 'TikTok'],
          passaportes: [
            'Passaporte Américas - 3GB/dia por 10 dias',
            'Passaporte Europa - 2GB/dia por 7 dias'
          ]
        }
      },
      {
        id: 'fixo-atualizada',
        tipo: 'fixo',
        icone: 'phone',
        nome: 'Fixo',
        preco: 44.90,
        detalhes: {
          ligacoes: 'Ilimitadas para fixo e móvel nacional',
          identificador: 'Identificador de chamadas incluso',
          caixaPostal: 'Caixa postal eletrônica'
        }
      },
      {
        id: 'tv-atualizada',
        tipo: 'tv',
        icone: 'tv',
        nome: 'TV',
        preco: 99.90,
        detalhes: {
          canais: 'Mais de 150 canais',
          hd: '60 canais em HD',
          gravacaoNuvem: 'Gravação em nuvem - 100 horas',
          assinaturas: ['Telecine', 'Globoplay', 'HBO Max', 'Paramount+']
        }
      }
    ]
  };

  // FAQ Data
  const faqData = [
    {
      title: 'Por que minha oferta está mudando?',
      content: (
        <Text body>
          De acordo com as novas normas da ANATEL (Regulamento Geral de Consumo - RGC),
          todas as ofertas precisam ser readequadas para garantir maior transparência e
          conformidade regulatória.
        </Text>
      )
    },
    {
      title: 'O que acontece se eu não aceitar a nova oferta?',
      content: (
        <Text body>
          Caso você não aceite a nova oferta, sua oferta atual será mantida até o prazo
          regulatório estabelecido pela ANATEL. Após esse período, será necessário escolher
          um novo plano disponível.
        </Text>
      )
    },
    {
      title: 'Posso escolher apenas alguns serviços da nova oferta?',
      content: (
        <Text body>
          A oferta atualizada é um pacote completo que substitui sua oferta atual. Se
          desejar uma configuração diferente, entre em contato com nosso time de vendas
          para conhecer outras opções disponíveis.
        </Text>
      )
    },
    {
      title: 'Quando a mudança entra em vigor?',
      content: (
        <Text body>
          Ao aceitar a nova oferta, a mudança será processada em até 48 horas úteis. Você
          receberá uma confirmação por email e SMS com todos os detalhes da migração.
        </Text>
      )
    },
    {
      title: 'Terei algum custo adicional com a migração?',
      content: (
        <Text body>
          Não há custos de migração. O valor apresentado na nova oferta já é o valor final
          mensal que você pagará. A instalação de novos equipamentos, quando necessária,
          também é gratuita.
        </Text>
      )
    }
  ];

  return (
    <div className="comparacao-ofertas-page">
      {/* Header */}
      <header className="page-header">
        <div className="header-content">
          <img
            src="https://mondrian.claro.com.br/assets/logo/claro.svg"
            alt="Claro"
            className="logo"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <Text tag="h1" heading xl inverse className="hero-title">
            Compare sua oferta atual com a nova
          </Text>
          <Text body inverse className="hero-description">
            Veja lado a lado todas as mudanças e benefícios da sua nova oferta.
          </Text>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Contrato Selecionado */}
          <div className="contrato-info">
            <Text tag="h3" heading md className="section-title">
              Contrato selecionado:
            </Text>
            <div className="contrato-display">
              <span className="contrato-icon">📍</span>
              <Text body className="contrato-text">
                {contratoSelecionado?.tipo === 'endereco'
                  ? `${contratoSelecionado.linha1} - ${contratoSelecionado.linha2}`
                  : contratoSelecionado?.numero || 'Não selecionado'}
              </Text>
            </div>
          </div>

          {/* Cards de Comparação */}
          <div className="comparacao-grid">
            <OfertaCard oferta={ofertaAtual} showCTA={false} />
            <OfertaCard oferta={ofertaAtualizada} showCTA={true} />
          </div>

          {/* Informação Importante */}
          <div className="info-importante">
            <Text body className="info-text">
              💡 A nova oferta inclui melhorias em todos os serviços e está em
              conformidade com as novas regulamentações da ANATEL.
            </Text>
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

export default ComparacaoOfertasPage;
