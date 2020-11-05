import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function Home(props){

    let history = useHistory();

    const handleButton = () =>{
        setTimeout(()=>{
            history.replace('/about');
        },2000)
    };

    return (
        <>
            <div>
                <h4>Página Home</h4><br/>
                Nome: {props.name}<br/><br/>
                <button onClick={handleButton}>Go to About page.</button>
            </div>
        </>
    );
}

const mapStateToProps = (state) =>{
    return {
        name: state.user.name
    };
}

export default connect(mapStateToProps)(Home);