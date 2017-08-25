


function getId(advices) {
  return advices.reduce((maxId, advice) => {
    return Math.max(advice.id, maxId);
  }, -1) + 1;
}

let adviceReducer = function(advices=[], action) {
  switch (action.type) {
    case 'ADD_ADVICE':
      return [{
        text: action.text,
        completed: false,
        id: getId(advices)
      }, ...advices];
    case 'COMPLETE_ADVICE':
      return advices.map((advice) => {
        return advice.id === action.id ?
          Object.assign({}, advice, {completed: !advice.completed}) : advice;
      });
    case 'DELETE_ADVICE':
      return advices.filter((advice) => {
        return advice.id !== action.id;
      });
    default:
      return advices;
    }
  }

  export default adviceReducer;
