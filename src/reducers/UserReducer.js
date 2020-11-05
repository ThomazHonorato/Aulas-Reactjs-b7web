const initialState = {
    name: 'Visitante'
}

const UserReducer = (state = initialState, action) =>{

    switch(action.type){
        case 'SET_NAME':
            return {...state, name: action.payload.name};
            
        default: ;
    }
    return state;
}

export default UserReducer;