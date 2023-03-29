import React from 'react';

const ShowCart = (props) => {
    const cartDaitls = props.name;
    // console.log(cartDaitls);
    return (
        <div>
            <h2 className='text-2xl font-bold'>Card details</h2>
            <div>
                {
                    cartDaitls.map((cart,index) => <p>{index+1}. {cart.strArea}</p> )
                }
            </div>
        </div>
    );
};

export default ShowCart;