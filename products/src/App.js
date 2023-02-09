import ProductList from "./components/ProductList.jsx";

function App() {

    const event = new Event('cartClicked');

    const cartClicked = () => {
        window.dispatchEvent(event);
    }

    return(
        <ProductList cartClicked={cartClicked}/>
    )
}

export default App;
