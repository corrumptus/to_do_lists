import '../../components_css/header/MenuButton.css'

export default function MenuButton({ menuIsVisible, click }) {
    const width = menuIsVisible ? "40px" : "19px";

    const styles = {
        "cima-esquerda": {
            "width": width,
            "transform": menuIsVisible ? "rotateZ(45deg) translate(3px, -3px)" : ""
        },
        "cima-direita": {
            "width": width,
            "transform": menuIsVisible ? "rotateZ(-45deg) translate(-18px, -17px)" : ""
        },
        "meio-esquerda": {
            "width": "19px",
            "opacity": menuIsVisible ? "0" : ""
        },
        "meio-direita": {
            "width": "19px",
            "opacity": menuIsVisible ? "0" : ""
        },
        "baixo-esquerda": {
            "width": width,
            "transform": menuIsVisible ? "rotate(-45deg) translate(1px, 5px)" : ""
        },
        "baixo-direita": {
            "width": width,
            "transform": menuIsVisible ? "rotate(45deg) translate(-16px, 19px)" : ""
        }
    };

    return (
        <div className="menu_dropdown" onClick={click}>
            <div className="cima">
                <div style={styles["cima-esquerda"]}></div>
                <div style={styles["cima-direita"]}></div>
            </div>
            <div className="meio">
                <div style={styles["meio-esquerda"]}></div>
                <div style={styles["meio-direita"]}></div>
            </div>
            <div className="baixo">
                <div style={styles["baixo-esquerda"]}></div>
                <div style={styles["baixo-direita"]}></div>
            </div>
        </div>
    );
}