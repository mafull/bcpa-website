export { default as actions }   from "./actions";


const INITIAL_STATE = {
    // isLoggedIn: true,
    // loggedInUser: {
    //     name: "Max Fuller"
    // }
    isLoggedIn: false,
    loggedInUser: null
};

export default (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
    default: return state;
    }
};