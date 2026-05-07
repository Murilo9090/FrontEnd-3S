import './cardperfil.css';
import people from '../../assets/Captura de tela 2026-02-26 141312.png';
function Cardperfil() {
    return (
        <div className='card-perfil'>
            <img class="card-perfil__image" src={people} alt="Foto de perfil do usuário"></img>
        </div>
    );
}
export default Cardperfil;