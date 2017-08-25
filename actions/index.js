import * as types from './actionTypes';

let actions = {
  addAdvice: function(text) {
    return {
      type: 'ADD_ADVICE',
      text: text
    };
  },

  completeAdvice: function(id) {
    return {
      type: 'COMPLETE_ADVICE',
      id: id
    };
  },

  deleteAdvice: function(id) {
    return {
      type: 'DELETE_ADVICE',
      id: id
    };
  },

  createNewUserId: function() {
    return {
      type: 'CREATE_USER_ID',
      id: Math.round(Math.random() * 100)
    }
  },

  createNewUserIdIfOdd: function() {
    return (dispatch, getState) => {
      const { user } = getState()
      if (user.id % 2 === 0) {
        return
      }
      dispatch(actions.createNewUserId())
    }
  },

  createNewUserIdAsync: function() {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions.createNewUserId())
      }, 2500)
    }
  }

}

export default actions;
