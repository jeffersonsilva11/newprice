import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CodigoSegurancaPage from './pages/CodigoSegurancaPage';
import IdentificacaoCPFPage from './pages/IdentificacaoCPFPage';
import SelecaoContratoPage from './pages/SelecaoContratoPage';
import ComparacaoOfertasPage from './pages/ComparacaoOfertasPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Redireciona a raiz para a página de código de segurança */}
        <Route path="/" element={<Navigate to="/codigo-seguranca" replace />} />

        {/* Página 1: Código de Segurança */}
        <Route path="/codigo-seguranca" element={<CodigoSegurancaPage />} />

        {/* Página 2: Identificação por CPF */}
        <Route path="/identificacao-cpf" element={<IdentificacaoCPFPage />} />

        {/* Página 3: Seleção de Contrato */}
        <Route path="/selecao-contrato" element={<SelecaoContratoPage />} />

        {/* Página 4: Comparação de Ofertas */}
        <Route path="/comparacao-ofertas" element={<ComparacaoOfertasPage />} />

        {/* Rota 404 - Redireciona para a primeira página */}
        <Route path="*" element={<Navigate to="/codigo-seguranca" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
