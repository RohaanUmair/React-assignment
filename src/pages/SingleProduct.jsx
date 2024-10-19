import { useState } from "react";
import DataCardHolder from "../components/DataCardHolder";
import CartSidebar from "../components/single-product components/CartSidebar";
import PinkHeader from "../components/single-product components/PinkHeader";
import ProductDetailsSection from "../components/single-product components/ProductDetailsSection";
import productsData from '../data/data.json';
import { useParams } from "react-router-dom";
import { loginFirst } from "../utils/firebase";


function SingleProduct({ handleAddToCart, cartProductsArray, total }) {
    loginFirst();

    const { id } = useParams();
    const product = productsData.find((product) => product.id == id);    

    const h1Styles = {textAlign:'center', fontSize: 36, fontWeight: 500, marginTop: 55, marginBottom: 26};

    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <>
        <PinkHeader productName={product.title} />
        <ProductDetailsSection product={product} setOpenSidebar={setOpenSidebar} handleAddToCart={handleAddToCart} id={id} />
        <div style={{marginBottom: 40}}>
            <h1 style={h1Styles}>Related Products</h1>
            <DataCardHolder showMoreBtn n={4} handleAddToCart={handleAddToCart} />
        </div>

        {
            openSidebar? (<CartSidebar setOpenSidebar={setOpenSidebar} total={total} cartProductsArray={cartProductsArray} />):(null)
        }

        </>
    )
}

export default SingleProduct;