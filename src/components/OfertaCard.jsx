import React from 'react';
import { Text, Button } from 'mondrian-react';
import PropTypes from 'prop-types';
import ServicoItem from './ServicoItem';
import './OfertaCard.css';

const OfertaCard = ({ oferta, showCTA }) => {
  const isAtualizada = oferta.tipo === 'atualizada';

  const handleCTA = () => {
    // Navigate to confirmation or next step
    console.log('CTA clicked for oferta:', oferta.tipo);
  };

  const calcularTotal = () => {
    return oferta.servicos.reduce((total, servico) => total + servico.preco, 0);
  };

  const formatPrice = (price) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className={`oferta-card ${isAtualizada ? 'atualizada' : 'atual'}`}>
      {/* Card Header */}
      <div className="oferta-card-header">
        <Text tag="h3" heading lg className="oferta-titulo">
          {isAtualizada ? 'Oferta Atualizada' : 'Oferta Atual'}
        </Text>
        {isAtualizada && (
          <div className="badge-nova">
            <Text tag="span" sm inverse>
              NOVA
            </Text>
          </div>
        )}
      </div>

      {/* Serviços List */}
      <div className="oferta-servicos">
        {oferta.servicos.map((servico) => (
          <ServicoItem
            key={servico.id}
            servico={servico}
            isAtualizada={isAtualizada}
          />
        ))}
      </div>

      {/* Total */}
      <div className="oferta-total">
        <Text tag="div" heading md className="total-label">
          Total por mês:
        </Text>
        <Text tag="div" heading xl className="total-valor">
          {formatPrice(calcularTotal())}
        </Text>
      </div>

      {/* CTA Button (apenas para oferta atualizada) */}
      {showCTA && isAtualizada && (
        <div className="oferta-cta">
          <Button
            onClick={handleCTA}
            className="btn-aceitar"
            block
          >
            Aceitar Nova Oferta
          </Button>
        </div>
      )}
    </div>
  );
};

OfertaCard.propTypes = {
  oferta: PropTypes.shape({
    tipo: PropTypes.oneOf(['atual', 'atualizada']).isRequired,
    servicos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        tipo: PropTypes.string.isRequired,
        icone: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired,
        preco: PropTypes.number.isRequired,
        detalhes: PropTypes.object
      })
    ).isRequired
  }).isRequired,
  showCTA: PropTypes.bool
};

OfertaCard.defaultProps = {
  showCTA: true
};

export default OfertaCard;
