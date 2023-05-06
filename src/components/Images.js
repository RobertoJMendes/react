import castelo from "../assets/pexels-paul-jousseau-15413559.jpg"

const Images = () => {
    return(
        <div>
            <img src="/logo192.png" alt=""/>
            <img src="/pexels-helena.jpg" alt=""/>
            {/* src e /nome da imagem, link direto com a pasta publica */}
            <img src={castelo} alt=""/>
            {/* no momento do - import - a image foi renomeada */}
        </div>
    );
};
export default Images;