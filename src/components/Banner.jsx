import './banner.css';

export default function Banner() {
    return (
        <section className='hero-section'>
            <img src="src/assets/homePageBanner.png" alt="bg" className="banner-img" />
            <section className='rectangle'>
                <h2>New Arrival</h2>
                <h1>Discover Our <br /> New Collection</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam placeat earum. Culpa.</p>
                <button>BUY NOW</button>
            </section>
        </section>
    )
}