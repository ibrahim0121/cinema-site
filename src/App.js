import React from 'react';
import './App.css';
import LayOut from "./components/layout/LayOut";
import Pages from "./pages/Pages";


function App() {
    return (
        <>
            <LayOut>
               <Pages/>
            </LayOut>
        </>
    );
}

export default App;
