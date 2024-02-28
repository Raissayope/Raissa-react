import "./style.css";

export const Lista = () =>{
    const lista =[
        {
            nome: "projeto novo",
            responsavel: "Fernando Carlos",
            valor:1200
        },
        {
            nome: "projeto do Mar",
            responsavel: "Fonseca",
            valor:4000
        },
        {
            nome: "Raissa",
            responsavel: "Carlos",
            valor:2000
        },
        {
            nome: "Fernanda",
            responsavel: "Pedro",
            valor:4090
        }
    ]
    return(
        <main className="lista">
            <section className="content-list">
                <h1>Lista</h1>
                <div >
            <img src="https://fastly.picsum.photos/id/785/300/250.jpg?hmac=f6uA9feDzmJbiKtG0Ol65JEKtbp2Qmv5-K2aD8rDhZU" alt=""/>
                </div>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eveniet ducimus aliquid quasi facilis, assumenda quos nesciunt fugiat animi optio itaque, sequi unde, officia iusto consectetur neque. Sapiente, beatae iusto.
            </p>
            </section>

            <section className="list-names">
                <h1>
                    Lista nomes
                </h1>

                    <article className="content-listagem">
                        {lista.map((item, index) =>{
                           return(
                            <div key={index} className="listagem">
                                <strong>Nome:</strong> <span>{item.nome}</span>
                                <strong>Responsavel:</strong> <span>{item.responsavel}</span>
                                <strong>valor:</strong> <span>{item.valor}</span>
                            </div>
                            )
                        })}

                      </article>
            </section>
        </main>
    )
}