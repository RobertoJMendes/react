const List = () =>{
    const itens = [{
        id: 1,
        name: "suzuki"
    },{
        id: 2,
        name: "honda"
        },{
            id: 3,
            name: "yamaha"
        },{
            id: 4,
            name: "kawazaki"
        }
    ]
    return(
        <div >

        {itens.map((item) => (
            <p key={item.id}>
                {item.id} - {item.name}
            </p>
        ))}

        </div>
    )
}
export default List;