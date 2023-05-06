const RendCondComProps = ({x,y}) => {
// props desestruturado
    return(
        <>{/*fragment*/}
            <hr />
            { x > 5 && <p> x é maior que 5, x é igual a {x}!</p>}
            { y > 5 ? <p> y é maior que 2, y = {y}! </p>:<p> y é menor que 2, y = {y}!</p>}

        </>
    )
}
export default RendCondComProps;