import DataCardHolder from "../components/DataCardHolder";
import CartSidebar from "../components/single-product components/CartSidebar";
import PinkHeader from "../components/single-product components/PinkHeader";
import ProductDetailsSection from "../components/single-product components/ProductDetailsSection";

function SingleProduct() {
    const h1Styles = {textAlign:'center', fontSize: 36, fontWeight: 500, marginTop: 55, marginBottom: 26};

    return (
        <>
        <PinkHeader />
        <ProductDetailsSection />
        <div style={{marginBottom: 40}}>
            <h1 style={h1Styles}>Related Products</h1>
            <DataCardHolder showMoreBtn n={4} />
        </div>
        <CartSidebar />
        </>
    )
}

export default SingleProduct;