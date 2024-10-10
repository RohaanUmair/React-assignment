import DataCardHolder from "../components/DataCardHolder";
import PinkHeader from "../components/single-product components/PinkHeader";
import ProductDetailsSection from "../components/single-product components/ProductDetailsSection";

function SingleProduct() {
    return (
        <>
        <PinkHeader />
        <ProductDetailsSection />
        <div style={{marginBottom: 40}}>
            <h1 style={{textAlign:'center', fontSize: 36, fontWeight: 500, marginTop: 55, marginBottom: 26}}>Related Products</h1>
            <DataCardHolder showMoreBtn n={4} />
        </div>
        </>
    )
}

export default SingleProduct;