import React, { useState } from 'react';
import { Icon, Text } from 'mondrian-react';
import PropTypes from 'prop-types';
import './ServicoItem.css';

const ServicoItem = ({ servico, isAtualizada }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className={`servico-item ${isAtualizada ? 'atualizada' : 'atual'}`}>
      <button
        className="servico-header"
        onClick={handleToggle}
        type="button"
        aria-expanded={expanded}
      >
        <div className="servico-info">
          <div className="servico-icon-name">
            <Icon name={servico.icone} size="md" />
            <Text tag="span" heading sm>
              {servico.nome}
            </Text>
          </div>
          <Text tag="span" heading sm className="servico-preco">
            {formatPrice(servico.preco)}/mês
          </Text>
        </div>
        <Icon
          name="chevron-down"
          size="sm"
          className={`chevron ${expanded ? 'expanded' : ''}`}
        />
      </button>

      {expanded && servico.detalhes && (
        <div className="servico-detalhes">
          {/* Internet Details */}
          {servico.tipo === 'internet' && (
            <div className="detalhe-group">
              <Text body className="detalhe-item">
                <strong>Velocidade:</strong> {servico.detalhes.velocidade}
              </Text>
              <Text body className="detalhe-item">
                <strong>WiFi:</strong> {servico.detalhes.wifi}
              </Text>
              {servico.detalhes.instalacao && (
                <Text body className="detalhe-item">
                  <strong>Instalação:</strong> {servico.detalhes.instalacao}
                </Text>
              )}
            </div>
          )}

          {/* Móvel Details */}
          {servico.tipo === 'movel' && (
            <>
              <div className="detalhe-group">
                <Text body className="detalhe-item">
                  <strong>Internet Móvel:</strong> {servico.detalhes.internet}
                </Text>
                <Text body className="detalhe-item">
                  <strong>Ligações:</strong> {servico.detalhes.ligacoes}
                </Text>
                <Text body className="detalhe-item">
                  <strong>SMS:</strong> {servico.detalhes.sms}
                </Text>
              </div>

              {servico.detalhes.passaportes && servico.detalhes.passaportes.length > 0 && (
                <div className="detalhe-group">
                  <Text body className="detalhe-label">
                    <strong>Passaportes Internacionais:</strong>
                  </Text>
                  <ul className="detalhe-lista">
                    {servico.detalhes.passaportes.map((passaporte, index) => (
                      <li key={index}>
                        <Text body sm>{passaporte}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {servico.detalhes.apps && servico.detalhes.apps.length > 0 && (
                <div className="detalhe-group">
                  <Text body className="detalhe-label">
                    <strong>Apps sem desconto do pacote:</strong>
                  </Text>
                  <ul className="detalhe-lista">
                    {servico.detalhes.apps.map((app, index) => (
                      <li key={index}>
                        <Text body sm>{app}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* Fixo Details */}
          {servico.tipo === 'fixo' && (
            <div className="detalhe-group">
              <Text body className="detalhe-item">
                <strong>Ligações:</strong> {servico.detalhes.ligacoes}
              </Text>
              <Text body className="detalhe-item">
                <strong>Identificador:</strong> {servico.detalhes.identificador}
              </Text>
              {servico.detalhes.caixaPostal && (
                <Text body className="detalhe-item">
                  <strong>Caixa Postal:</strong> {servico.detalhes.caixaPostal}
                </Text>
              )}
            </div>
          )}

          {/* TV Details */}
          {servico.tipo === 'tv' && (
            <>
              <div className="detalhe-group">
                <Text body className="detalhe-item">
                  <strong>Canais:</strong> {servico.detalhes.canais}
                </Text>
                {servico.detalhes.hd && (
                  <Text body className="detalhe-item">
                    <strong>HD:</strong> {servico.detalhes.hd}
                  </Text>
                )}
                {servico.detalhes.gravacaoNuvem && (
                  <Text body className="detalhe-item">
                    <strong>Gravação:</strong> {servico.detalhes.gravacaoNuvem}
                  </Text>
                )}
              </div>

              {servico.detalhes.assinaturas && servico.detalhes.assinaturas.length > 0 && (
                <div className="detalhe-group">
                  <Text body className="detalhe-label">
                    <strong>Assinaturas Inclusas:</strong>
                  </Text>
                  <ul className="detalhe-lista">
                    {servico.detalhes.assinaturas.map((assinatura, index) => (
                      <li key={index}>
                        <Text body sm>{assinatura}</Text>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}

          {/* Descontos */}
          {servico.detalhes.descontos && servico.detalhes.descontos.length > 0 && (
            <div className="detalhe-group detalhe-descontos">
              <Text body className="detalhe-label">
                <strong>Descontos:</strong>
              </Text>
              <ul className="detalhe-lista">
                {servico.detalhes.descontos.map((desconto, index) => (
                  <li key={index}>
                    <Text body sm className="desconto-item">
                      {desconto}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

ServicoItem.propTypes = {
  servico: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tipo: PropTypes.oneOf(['internet', 'movel', 'fixo', 'tv']).isRequired,
    icone: PropTypes.string.isRequired,
    nome: PropTypes.string.isRequired,
    preco: PropTypes.number.isRequired,
    detalhes: PropTypes.object
  }).isRequired,
  isAtualizada: PropTypes.bool
};

ServicoItem.defaultProps = {
  isAtualizada: false
};

export default ServicoItem;
