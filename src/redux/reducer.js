const defaultState = {
    homeuser: {}
}

const myReducer = (state=defaultState, action) => {
    switch (action.type) {    
        case "USERS":
            return {...state, homeuser: action.payload}
        default:
            return 0
    }
};

export default myReducer