
import {useState, useEffect} from "react";

const Hooks = () =>{

    const [Idade, setIdade] = useState(40);

    const changeNovaIdade = () =>{
        setIdade(65);
    }
    useEffect(() => {
        console.log(Idade)
    })

    return(
        <div>
            <p> idade: {Idade}</p>
            <button onClick={changeNovaIdade}>mudar idade</button>
        </div>
    )
}
export default Hooks;