import React, { useState } from 'react';

const List = ({ data, addNewItem, updateList }) => {

  const [newItem, setNewItem] = useState('');

  const handleChange = (event) => {
    setNewItem(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newItem) {
      addNewItem(newItem);
      setNewItem('');
    }
  }

  const handleUpdate = (event) => {
    updateList(event);
  }

  return (
    <div className="section">    
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input className="input" type="text" name="input" placeholder="Add new item" value={newItem} onChange={handleChange} />
        <button className="add-button" onClick={handleSubmit}>Add</button>
      </form>
      {data.length > 0 ? 
        (<div className="section">
          <div className="list">
            {data.map(item => 
              <div className="list-item" key={item.id}>
                <div className="list-text">
                  <input className="checkbox" type="checkbox" defaultChecked={item.completed} id={item.id} name={item.id} onChange={handleUpdate}/>
                  <span className={item.completed ? 'completed list-text ' : ' list-text new'}>{item.task}</span>
                </div>
              </div>
            )}
          </div>
        </div>)
        :
        (<div className="info">No items in your list, add what you need.</div>)
      }
    </div>
  );
}
 
export default List;
