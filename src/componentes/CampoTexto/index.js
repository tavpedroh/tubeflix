import './campotexto.css';

const CampoTexto = ({ label, placeholder, valor, aoAlterado, obrigatorio = false }) => {
    return(<div className='campo-texto'>
        <label>{label}</label>
        <input value={valor} placeholder={placeholder} onChange={evento => aoAlterado(evento.target.value)} required={obrigatorio}  />
        </div>);
}

export default CampoTexto;