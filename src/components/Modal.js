import React  from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 90px;
    background-color: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ModalArea = styled.div`
    background-color: #fff;
    padding: 10px;
`;

function Modal(props){

    const handleBackgroundClick = () =>{
        props.setVisible(false);
    }

    return(
        
        <>
            {props.visible === true &&
                <ModalBackground onClick={handleBackgroundClick}>
                <ModalArea>
                    {props.children}
                </ModalArea>
            </ModalBackground>
            }

        </>
    );
     
};

export default Modal;