export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const SIDE_EFFECT = 'SIDE_EFFECT';

const initialState = {
  burgerOn: true,
  response: [],
  videoOn: true
};

const defaultAction = {};

const reducer = (state = initialState, action = defaultAction) => {
  console.log(action.value)
  switch (action.type) {
    case 'BURGER_ON': {
      return {
        ...state,
        burgerOn: false
      }
    }

    case 'BURGER_OFF': {
      return {
        ...state,
        burgerOn: true
      }
    }
    case 'RESPONSE_ON': {
      return {
        ...state,
        response: action.value[0]
      }
    }
    case 'VIDEO_ON': {
      return {
        ...state,
        videoOn: false
      }
    }
    case 'VIDEO_OFF': {
      return {
        ...state,
        videoOn: true
      }
    }
    default: {
      // return state;
      // Dans le cas où on ne comprend pas quelle est l'action à
      // effecture (action.type n'est pas reconnu), on retourne
      // une copie non-altérée du state courant, reçu en paramètre.
      return { ...state };
    }
  }
};

export default reducer;

export const updateInputValue = value => {
  return {
    type: UPDATE_INPUT_VALUE,
    value
  };
};

export const sideEffect = () => ({ type: SIDE_EFFECT });