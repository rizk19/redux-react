
export default function data(state = [], action) {
  switch (action.type) {
    case 'ADD_PHONEBOOKS_SUCCESS':
      console.log('addload', action.phonebooks);
      // let addData = state
      // let a = addData.map((item)=>(
      //   item.sent = true
      
      //   ))
      // return a
      return state.map((item) => {
        // console.log('atasfail', action);
       
          item.sent = true
        
        // console.log('addfail', item);
        return item
      })

    case 'LOAD_PHONEBOOKS_SUCCESS':

      return action.phonebooks
    case 'ADD_DATA':
      console.log('this', state);
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          phone: action.phone,
          sent: true
        }
      ]
    case 'EDIT_DATA':
      return state.map(data => data.id === action.id ? Object.assign({}, data, { name: action.name, phone: action.phone }) : data)
    case 'DELETE_DATA':
      let delTry = state.filter(data => data.id !== action.id)
      console.log('hasil delete ga ya', delTry);
      return delTry

    case 'DELETE_ALL':
      return []

    case 'LOAD_PHONEBOOKS_FAILURE':
      return state

    case 'ADD_PHONEBOOKS_FAILURE':

      return state.map((item) => {
        // console.log('atasfail', action);
        if (item.id === action.id) {
          item.sent = false
        }
        // console.log('addfail', item);
        return item
      })

    default:
      return state

  }
}