export default function TypesCard({imgSrc, type}) {

    return (
        <section className="img-card-sec">
            <img className="type-img" src={imgSrc} alt="type" />
            <h1 className="card-heading">{type}</h1>
        </section>
    )
}