import React from 'react';

const Completed = ({ data, deleteItem, deleteAll, updateList }) => {

  const completedList = data.map(item => 
      <div className="list-item" key={item.id}>
        <div className="list-text">
          <input className="checkbox" type="checkbox" defaultChecked={item.completed} id={item.id} name={item.id} onChange={event => updateList(event)}/>
          <span className={item.completed ? 'list-text completed' : 'list-text new'}>{item.task}</span>
        </div>
        <span className="material-icons item-icon" id={item.id} onClick={event => deleteItem(event.target.id)}>delete_outline</span>
      </div>
    )
  
  return (
    <div className="section">
      {completedList.length > 0 ?
        (<div className="section">
          <div className="list">
            {completedList}
          </div>
          <button className="delete-button" onClick={() =>  deleteAll()}>
            <span className="material-icons delete-icon">delete_outline</span>
            delete all
          </button>
        </div>)
        :
        (<div className="info">You need to do some shopping...</div>)
      }
    </div>
  );
}
 
export default Completed;
