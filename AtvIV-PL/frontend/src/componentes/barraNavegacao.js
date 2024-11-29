import React from 'react';

const BarraNavegacao = ({ seletorView, botoes, tema }) => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: tema }}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 logo">PetLovers</span>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-bar">
                    {botoes.map((botao) => (
                        <li key={botao} className="nav-item">
                            <a
                                href="/"
                                onClick={(e) => seletorView(botao, e)}
                                className="nav-link botao-navegador"
                            >
                                {botao}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default BarraNavegacao;