import React from 'react';

const Active = (props) => {

  const activeList = props.data.map(item => 
    <div className="list-item" key={item.id}>
      <div className="list-text">
        <input className="checkbox" type="checkbox" name={item.id} />
        {item.task}
      </div>
    </div>
  )

  return (
    <div className="section">
      <div className="list">
        {activeList}
      </div>
    </div>
  );
}
 
export default Active;