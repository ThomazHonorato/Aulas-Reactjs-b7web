import React from 'react';
import { useHistory } from 'react-router-dom';

function Home(){

    let history = useHistory();

    const handleButton = () =>{
        setTimeout(()=>{
            history.replace('/about');
        },5000)
    };

    return (
        <>
            <div>
                <h4>Página Home</h4>
                <button onClick={handleButton}>Go to About page.</button>
            </div>
        </>
    );
}

export default Home;