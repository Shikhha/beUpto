const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "err":
      return { ...state, authError: "logn failed" };
    case "LOGGED_IN":
      console.log("logged in");
      return { ...state, authError: null };
    case "SIGN_OUT_SUCCESS":
      console.log("signed-out");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signed-up");
      return { ...state, authError: null };

    case "SIGNUP_ERROR":
      console.log("signup-error : " + action.err.message);
      return { ...state, authError: action.err.message };

    default:
      return state;
  }
};
export default authReducer;
