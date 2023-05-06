const RenderizaçãoCondicional = () => {

    const x = 6;

    const y = 2;

    return(
        <div>
            { x > 5 && <p> x é maior que 5 </p>}
            { y > 5 ? <p> y é maior que 2 </p>:<p> y é menor que 2</p>}
            { x > 4 ? <p> x é maior  que 4</p>:"testei!"}
        </div>
    )
}
export default RenderizaçãoCondicional;