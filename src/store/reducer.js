export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const SIDE_EFFECT = 'SIDE_EFFECT';

const initialState = {
  burgerOn: true,
  response: [],
  videoShowreellOn: true,
  videoQueyrasOn: false
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
    case 'VIDEO1_ON': {
      return {
        ...state,
        videoShowreellOn: false
      }
    }
    case 'VIDEO1_OFF': {
      return {
        ...state,
        videoShowreellOn: true
      }
    }
    case 'VIDEO2_ON': {
      return {
        ...state,
        videoQueyrasOn: true
      }
    }
    case 'VIDEO2_OFF': {
      return {
        ...state,
        videoQueyrasOn: false
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