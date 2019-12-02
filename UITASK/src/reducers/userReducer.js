const userReducer = (state = {
    status: false,
    userdetails: JSON.parse(localStorage.getItem('state'))
}, action) => {
    switch (action.type) {
        case 'in':
            state = {
                ...state,
                status: true,
                userdetails: action.payload
            };
            break;
        case 'out':
            state = {
                ...state,
                status: false,
                userdetails: action.payload
            };
            break;
        default:
            break;
    }
    return state;
};
export default userReducer; 