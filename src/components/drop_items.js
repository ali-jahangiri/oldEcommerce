import React from "react";

const Items = (props) => {
  if (props.items.length === 0) {
    return <p>There is No Item in Shoping card...</p>;
  } else {
    const { items } = props;
    return (
      <div>
        {items.map((el) => (
          <div key={el.id} className="rr">
            <p>{el.name}</p>
            <p>{el.quantity}</p>
            <img className="img-fluid" src={el.imageUrl} />
          </div>
        ))}
      </div>
    );
  }
};
export default Items;
