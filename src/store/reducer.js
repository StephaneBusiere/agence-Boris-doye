export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const SIDE_EFFECT = 'SIDE_EFFECT';

const initialState = {
  burgerOn: true,
  popup: false,
  response: [],
  videoShowreellOn: true,
  videoQueyrasOn: false,
  videoVietnamOn: true,
  videoOutdoormixOn: false,
  videoFasboaOn: true,
  videoIndeOn: false,
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
    case 'VIDEO3_ON': {
      return {
        ...state,
        videoVietnamOn: false
      }
    }
    case 'VIDEO3_OFF': {
      return {
        ...state,
        videoVietnamOn: true
      }
    }
    case 'VIDEO4_ON': {
      return {
        ...state,
        videoOutdoormixOn: true
      }
    }
    case 'VIDEO4_OFF': {
      return {
        ...state,
        videoOutdoormixOn: false
      }
    
    }
    case 'VIDEO5_ON': {
      return {
        ...state,
        videoFasboaOn: false
      }
    }
    case 'VIDEO5_OFF': {
      return {
        ...state,
        videoFasboaOn: true
      }
    }
    case 'VIDEO6_ON': {
      return {
        ...state,
        videoIndeOn: true
      }
    }
    case 'VIDEO6_OFF': {
      return {
        ...state,
        videoIndeOn: false
      }
    }
    case 'OPEN_USER_ACCOUNT': {
      console.log('in reducer');
        return {
          ...state,
          popup: true
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