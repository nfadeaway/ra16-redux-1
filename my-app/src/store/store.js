import {compose, legacy_createStore} from 'redux';

const initialState = {
  editName: '',
  editPrice: '',
  editId: '',
  idx: 3,
  goods: [
    {id: 1, name: 'Телега', price: '25000'},
    {id: 2, name: 'Стол', price: '15000'},
    {id: 3, name: 'Телевизор', price: '30200'},
  ]
}

const reducer = (state = initialState, action) => {
  let currentGood
  let idx
  let goods
  switch (action.type) {
    case 'ADD_GOOD':
      idx = state.idx + 1
      goods = [...state.goods]
      goods.push({id: idx, name: action.payload.name, price: action.payload.price})
      return {...state, goods: goods, idx: idx}
    case 'EDIT_GOOD':
      currentGood = state.goods.find((good) => {return good.id === +action.payload.id});
      return {...state, editName: currentGood.name, editPrice: currentGood.price, editId: currentGood.id}
    case 'UPDATE_GOOD':
      currentGood = state.goods.find((good) => {return good.id === +action.payload.id})
      currentGood.id = +action.payload.id
      currentGood.name = action.payload.name
      currentGood.price = action.payload.price
      goods = [...state.goods]
      return {...state, goods: goods, editName: '', editPrice: '', editId: ''}
    case 'DELETE_GOOD':
      goods = state.goods.filter(good => good.id !== +action.payload.id)
      return {...state, goods: goods, editName: '', editPrice: '', editId: 'empty'}
    case 'CANCEL':
      return {...state, editName: '', editPrice: '', editId: ''}
    default:
      return state
  }
}

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = legacy_createStore(
    reducer,
    compose(ReactReduxDevTools)
  )


export default store