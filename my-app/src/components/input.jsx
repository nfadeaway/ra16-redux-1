import React, {useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Input = () => {
  const refInputName = useRef(null)
  const refInputPrice = useRef(null)
  const dispatch = useDispatch()
  const editName = useSelector(state => state.editName)
  const editPrice = useSelector(state => state.editPrice)
  const editId = useSelector(state => state.editId)

  const addGood = () => {
    const name = refInputName.current.value
    const price = refInputPrice.current.value
    if (name && price) {
      if (editId && editId !== 'empty') {
        dispatch({type: 'UPDATE_GOOD', payload: {name: name, price: price, id: editId}})
      } else {
        dispatch({type: 'ADD_GOOD', payload: {name: name, price: price}})
      }
      refInputName.current.value = ''
      refInputPrice.current.value = ''
    } else {
      alert('Заполните поля')
    }
  }

  const filterGoods = () => {
    const name = refInputName.current.value
    dispatch({type: 'FILTER_GOODS', payload: {name: name}})
  }

  const cancel = () => {
    refInputName.current.value = ''
    refInputPrice.current.value = ''
    dispatch({type: 'CANCEL'})
  }

  if (editName && editPrice) {
    refInputName.current.value = editName
    refInputPrice.current.value = editPrice
  }

  if (editId === 'empty') {
    refInputName.current.value = ''
    refInputPrice.current.value = ''
  }

  return (
    <div className="input-block">
      <input ref={refInputName} type="text" className="input-name" onChange={filterGoods}/>
      <input ref={refInputPrice} type="text" className="input-price"/>
      <div className="input-save-btn" onClick={addGood}>Save</div>
      {editName && <div className="input-cancel-btn" onClick={cancel}>Cancel</div>}
    </div>
  );
};

export default Input;