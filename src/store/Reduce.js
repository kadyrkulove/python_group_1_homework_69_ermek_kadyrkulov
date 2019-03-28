const initialState = {
  pass: '',
  currentPass: '1234',
  isRight: false,
  stars: '',
};

const reducer = (state = initialState, action)=>{
  if (action.type === 'ADD_NUMBER'){
    if(state.pass.length < 4) {
      return{
        ...state,
        pass: state.pass += action.value.toString(),
        stars: state.stars += '*',
      }
    }
  }
  if (action.type === 'PRESS') {
    if (state.pass === state.currentPass){
      return {...state, stars: 'Access Granted', isRight: true}
    }
  }
  if (action.type === 'CLEAR') {
    const newPass = state.pass.substr(0, state.pass.length - 1);
    const newStars = state.stars.substr(0, state.stars.length - 1);
    return{
      ...state,
      pass: newPass,
      stars: newStars
    }
  }

  return state
};

export default reducer;