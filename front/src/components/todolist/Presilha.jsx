import '../../components_css/todolist/Presilha.css';

export default function Presilha({ style }) {
  const { componentStyle, quadradoStyle, trianguloStyle } = style;

  return (
    <div className='presilha' style={componentStyle}>
      <div className="cima">
        <div className="triangulo esquerda" style={trianguloStyle}></div>
        <div className="quadrado" style={quadradoStyle}></div>
        <div className="triangulo direita" style={trianguloStyle}></div>
      </div>
      <div className="baixo">
        <div className="triangulo esquerda" style={trianguloStyle}></div>
        <div className="quadrado" style={quadradoStyle}></div>
        <div className="triangulo direita" style={trianguloStyle}></div>
      </div>
    </div>
  );
}