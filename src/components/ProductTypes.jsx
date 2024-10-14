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
                <TypesCard imgSrc='/assets/type-dining.png' type='Dining' />
                <TypesCard imgSrc='/assets/type-living.png' type='Living' />
                <TypesCard imgSrc='/assets/type-bedroom.png' type='Bedroom' />
            </section>
        </section>
    )
}