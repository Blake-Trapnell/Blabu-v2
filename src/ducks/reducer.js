const initialstate = {
}
const SET_USER = "SET_USER"

export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
}

export default  (state = initialstate, action) => {
    const{type, payload} = action
	
    switch (type) {
		case SET_USER:
            const {user} = payload
            return{...state, user}
        default: return state
    }
}