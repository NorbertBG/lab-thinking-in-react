
import { useState } from 'react';
import jsonData from './../data.json';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
    const [products, setProducts] = useState(jsonData);
    const [inputText, setInputText] = useState("");


    const updateKeyword = (event) => {
        setInputText(event.target.value);
    };

    const filteredProducts = products.filter((val) => {
        if (inputText === "") {
            return val;
        } else if (val.name.toLowerCase().includes(inputText.toLowerCase())) {
            return val;
        }
        return null;
    });

    return (
        <div>
            <h1>IronStore</h1>
            <SearchBar keyword={inputText} onChange={updateKeyword}/>
            <ProductTable products={filteredProducts} />
        </div>
    )
}
export default ProductsPage;