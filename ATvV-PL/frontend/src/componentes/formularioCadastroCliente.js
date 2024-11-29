import { useState } from "react";
export default function FormularioCadastroCliente(props) {


    const [telefones, setTelefones] = useState([]);
    const [rg, setRg] = useState([]);

    const adicionarTelefone = () => {
        setTelefones([...telefones, ""]);
    };

    const adicionarRG = () => {
        setRg([...rg, ""]);
    };

    const handleChangeTelefone = (index, value) => {
        const novosTelefones = [...telefones];
        novosTelefones[index] = value;
        setTelefones(novosTelefones);
    };

    const handleChangeRg = (index, value) => {
        const novoRg = [...rg];
        novoRg[index] = value;
        setRg(novoRg);
    };
    
    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{ background: tema }}>@</span>
                    <input type="text" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                </div>
                {rg.map((rg, index) => (
                <div className="input-group mb-3" key={index}>
                    <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" value={rg} onChange={(e) => handleChangeRg(index, e.target.value)} />
                </div>
                ))}
                <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={adicionarRG}>
                    Adicionar RG
                </button>
                {telefones.map((telefone, index) => (
                <div className="input-group mb-3" key={index}>
                    <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" value={telefone} onChange={(e) => handleChangeTelefone(index, e.target.value)} />
                </div>
                ))}
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={adicionarTelefone}>
                        Adicionar Telefone
                    </button>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}