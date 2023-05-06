// primeiroComponente //
import AnotherComponent from "./AnotherComponent";
import './First.css'

function FirstComponent(){
    const celular = "G32";
    return(
            <div>
                <p>primeiro Componente</p>
                { /* comentarios & codigo javaScript */ }
                <p> quero um celular {celular}</p>
                <hr color="green"/>
                <div className="corVerde">
                    <AnotherComponent /><p> este componente foi importado de dentro de outro</p>
                </div>
                <hr color="green" />
            </div>
        );
}
export default FirstComponent