import { createContext, useState } from "react";

export const ValuesContext = createContext();

function ValuesProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);
    const [total, setTotal] = useState(0);

    return (
        <ValuesContext.Provider
            value={{ cartProducts,
                setCartProducts,
                total,
                setTotal
            }}
        >
            {children}
        </ValuesContext.Provider>
    );
}

export default ValuesProvider;
