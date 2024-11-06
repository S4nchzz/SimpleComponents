import { useState } from "react";
import './App.css';

function IncrementButtons() {
    const [contador, setContador] = useState(0);

    return (
        <div className="countButtons">
            <h1 id="count">Contador: {contador}</h1>
            <button className="buttons" onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button className="buttons" onClick={() => {
                contador > 0 ? (
                    setContador(contador - 1)
                ) : (
                    setContador(contador)
                )
            }}>Decrementar</button>
        </div>
    )
}

export default IncrementButtons;