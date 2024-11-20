import './productTypes.css';
import TypesCard from './TypesCard';

export default function ProductTypes() {
    return (
        <section className='main'>
            <div className="heading-sec">
                <h1 className='main-heading'>Browse The Range</h1>
                <p className='main-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <section className='card-holder'>
                <TypesCard imgSrc='/assets/type-dining.webp' type='Dining' />
                <TypesCard imgSrc='/assets/type-living.webp' type='Living' />
                <TypesCard imgSrc='/assets/type-bedroom.webp' type='Bedroom' />
            </section>
        </section>
    )
}