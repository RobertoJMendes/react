import './Another.css'
const AnotherComponent = () => {

    const handleClick = () =>{
    
        console.log("clicou!")
    }

    return(
        <div>
            <p className="outro">outro Componente</p>
            
            <button onClick={handleClick}>evento de click</button>
            <hr color="red">
            </hr>
            <button onClick={()=>console.log("teste no botão!")}>evento no elemento botão</button>
        </div>
    )
}
export default AnotherComponent;