import { ON_ERROR, ON_LOADING, ON_SUCCESS } from "../UserProfile/ActionType";

const intState = {
  loading: false,
  error: false,
  user: {},
};

function MyAddReducer(state = intState, Action) {
  switch (Action.type) {
    case ON_ERROR: {
      return {
        loading: false,
        error: true,
        user: {},
      };
    }

    case ON_LOADING: {
      return {
        loading: true,
        error: false,
        user: {},
      };
    }

    case ON_SUCCESS: {
      return {
        loading: false,
        error: false,
        user: Action.deploy,
      };
    }
    default: {
      return state;
    }
  }
}

export default MyAddReducer;
