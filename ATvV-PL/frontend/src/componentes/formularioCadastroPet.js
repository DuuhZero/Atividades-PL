import { useState } from "react";
export default function FormularioCadastroPet(props) {
    const [pets, setPets] = useState([{ nome: "", tipo: "", raca: "", genero: "" }]);

    const adicionarPet = () => {
        setPets([...pets, { nome: "", tipo: "", raca: "", genero: "" }]);
    };

    const handleChangePet = (index, campo, value) => {
    const novosPets = [...pets];
    novosPets[index][campo] = value;
    setPets(novosPets);
    };

    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Digite o CPF do responsável" aria-label="CPF" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button">Buscar</button>
                </div>
                {pets.map((pet, index) => (
                <div key={index}>
                    <div className="input-group mb-3" key={index}>
                        <input type="text" className="form-control" placeholder="Nome do Pet" aria-label="Nome do Pet" aria-describedby="basic-addon1" value={pet.nome} onChange={(e) => handleChangePet(index, "nome", e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Raça" aria-label="Raça" aria-describedby="basic-addon1" value={pet.raca} onChange={(e) => handleChangePet(index, "raca", e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Gênero" aria-label="Gênero" aria-describedby="basic-addon1" value={pet.genero} onChange={(e) => handleChangePet(index, "genero", e.target.value)} />
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Tipo" aria-label="Tipo" aria-describedby="basic-addon1" value={pet.tipo} onChange={(e) => handleChangePet(index, "tipo", e.target.value)} />
                    </div>
                </div>
                ))}
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }} onClick={adicionarPet}>
                        Adicionar Pet
                    </button>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}