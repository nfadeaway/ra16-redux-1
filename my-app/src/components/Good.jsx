import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';

const Good = (props) => {
  const refGood = useRef(null)
  const dispatch = useDispatch()

  const editGood = () => {
    const id = refGood.current.dataset.id
    dispatch({type: 'EDIT_GOOD', payload: {id: id}})
  }

  const deleteGood = () => {
    const id = refGood.current.dataset.id
    dispatch({type: 'DELETE_GOOD', payload: {id: id}})
  }

  return (
    <div ref={refGood} data-id={props.good.id} className="good">
      <div className="good-name">{props.good.name}</div>
      <div className="good-price">{props.good.price}</div>
      <span className="good-edit-btn material-symbols-outlined" onClick={editGood}>edit</span>
      <span className="good-delete-btn material-symbols-outlined" onClick={deleteGood}>delete_forever</span>
    </div>
  );
};

export default Good;