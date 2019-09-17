const fetchAction = (payload) => {
    return {
        type: "USERS",
        payload
    }
}

export const fetchHome = (Result) => {
    return async(dispatch) => {
        try {
            if (Result) {
                dispatch(fetchAction(Result))
            }
        } catch (error) {
            console.log(error);
        }
    }
}