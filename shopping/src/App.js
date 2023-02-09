import {useEffect, useState} from "react";
import './App.css';

function App() {
    const [homePage, setHomePage] = useState(true);

    useEffect(() => {
        window.addEventListener('cartClicked', () => setHomePage(false));
    }, [])

    return (
      <div className="App">
          <div id="root--cart" className={`shopping_component${homePage ? '--hidden' : ''}`}/>
          <div id="root--products" className={`shopping_component${!homePage ? '--hidden' : ''}`}/>
      </div>
    );
}

export default App;
