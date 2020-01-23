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
  info1On: false,
  info2On: false,
  info3On: false,
  info4On: false,
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
        videoShowreellOn: false,
        info1On: false,
        videoVietnamOn: true,
        videoOutdoormixOn: false,
        videoFasboaOn: true,
        videoIndeOn: false
      }
    }
    case 'VIDEO1_OFF': {
      return {
        ...state,
        videoShowreellOn: true,
        
      }
    }
    case 'VIDEO2_ON': {
      return {
        ...state,
        videoQueyrasOn: true,
        info2On: false,
        videoVietnamOn: true,
        videoOutdoormixOn: false,
        videoFasboaOn: true,
        videoIndeOn: false
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
        videoVietnamOn: false,
        info3On: false,
        videoQueyrasOn: false,
        videoShowreellOn: true,
        videoFasboaOn: true,
        videoIndeOn: false

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
        videoOutdoormixOn: true,
        videoQueyrasOn: false,
        videoShowreellOn: true,
        videoFasboaOn: true,
        videoIndeOn: false

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
        videoFasboaOn: false,
        videoQueyrasOn: false,
        videoShowreellOn: true,
        videoOutdoormixOn: false,
        videoVietnamOn: true
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
        videoIndeOn: true,
        videoQueyrasOn: false,
        videoShowreellOn: true,
        videoOutdoormixOn: false,
        videoVietnamOn: true
      }
    }
    case 'VIDEO6_OFF': {
      return {
        ...state,
        videoIndeOn: false
      }
    }
    case 'INFO1_0N': {
      return {
        ...state,
        info1On: true
      }
    }
    case 'INFO1_0FF': {
      return {
        ...state,
        info1On: false
      }
    }
    case 'INFO2_0N': {
      return {
        ...state,
        info2On: true
      }
    }
    case 'INFO2_0FF': {
      return {
        ...state,
        info2On: false
      }
    }
  
  case 'INFO3_0N': {
    return {
      ...state,
      info3On: true
    }
  }
  case 'INFO3_0FF': {
    return {
      ...state,
      info3On: false
    }
  }
  case 'INFO4_0N': {
    return {
      ...state,
      info4On: true
    }
  }
  case 'INFO4_0FF': {
    return {
      ...state,
      info4On: false
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