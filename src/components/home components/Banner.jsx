import { Link } from 'react-router-dom';
import './banner.css';

export default function Banner() {
    return (
        <section className='hero-section'>
            <img src="/assets/homePageBanner.webp" alt="bg" className="banner-img" />
            <section className='rectangle'>
                <h2>New Arrival</h2>
                <h1>Discover Our <br /> New Collection</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aperiam placeat earum. Culpa.</p>
                <Link to={'/shop'}>
                    <button>BUY NOW</button>
                </Link>
            </section>
        </section>
    )
}