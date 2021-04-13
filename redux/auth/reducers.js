import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authActionTypes from "./types";

const initialAuthState = {
  user: undefined,
  authToken: undefined,
  message: undefined,
  dataErrorMessage: undefined,
  error404: false
};

const reducer = persistReducer(
  { storage, key: "auth", whitelist: ["user", "authToken", "message", "error404"] },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case authActionTypes.LoginSuccess: {
        return { 
          ...state,
          message: undefined,
        };
      }

      case authActionTypes.SetAuth: {
        const { token } = action.payload;

        return { 
          ...state,
          dataErrorMessage: undefined,
          authToken: token, 
        };
      }

      case authActionTypes.Logout: {
        return initialAuthState;
      }

      case authActionTypes.AdminActionStart: {
        return { 
          ...state,
          adminActionsLoading: true,
          actionErrorMessage: undefined,
        };
      }

      case authActionTypes.Set404Error: {
        const { error404 } = action.payload;
        return { 
          ...state,
          error404, 
        };
      }

      case authActionTypes.Clear404Error: {
        const { error404 } = action.payload;
        return { 
          ...state,
          error404, 
        };
      }

      case authActionTypes.SetMessage: {
        const { message } = action.payload;
        return { 
          ...state,
          message, 
        };
      }

      case authActionTypes.RequestUser: {
        const { user } = action.payload;
        return { ...state, user: user };
      }

      case authActionTypes.RequestDataFailure: {
        const { error } = action.payload;
        return { 
          ...state,
          dataErrorMessage: error,
        };
      }

      default:
        return state;
    }
  }
);

export  default reducer;
