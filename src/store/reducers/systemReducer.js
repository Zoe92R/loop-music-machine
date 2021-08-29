const initialState = {
    isLoading: false,
    isPlaying: false,
  };
  
  export function systemReducer (state = initialState, action = {}) {
    switch (action.type) {
      case 'LOADING_START':
        return { ...state, isLoading: true }
      case 'LOADING_DONE':
        return { ...state, isLoading: false }
      case 'PLAY_START':
        return { ...state, isPlaying: true }
      case 'PLAY_PAUSE':
        return { ...state, isPlaying: false }
      case 'LOOP_ENDED':
        return { ...state, isloopEnded: true }
      case 'NEW_LOOP_STATRED':
        return { ...state, isloopEnded: false }
      default: return state
    }
  }
  