function Details({ icon, heading, text }) {
    return (
        <div className="details-card">
            {icon}

            <div>
                <h1>{heading}</h1>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Details;