import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CodigoSegurancaPage from './pages/CodigoSegurancaPage';
import IdentificacaoCPFPage from './pages/IdentificacaoCPFPage';
import SelecaoContratoPage from './pages/SelecaoContratoPage';
import ComparacaoOfertasPage from './pages/ComparacaoOfertasPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/identificacao-cpf" replace />} />
        <Route path="/codigo-seguranca" element={<CodigoSegurancaPage />} />
        <Route path="/identificacao-cpf" element={<IdentificacaoCPFPage />} />
        <Route path="/selecao-contrato" element={<SelecaoContratoPage />} />
        <Route path="/comparacao-ofertas" element={<ComparacaoOfertasPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
