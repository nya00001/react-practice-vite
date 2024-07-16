import React, { useState } from 'react';

function MyForm() {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [delivery, setDelivery] = useState("Delivery");

    function handleChange(event) {
        setName(event.target.value);
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value);
    }

    function handleCommentChange(event) {
        setComment(event.target.value);
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value);
    }

    function handleDeliveryChange(event) {
        setDelivery(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleChange} type='text' />
            <p><b>Name:</b> {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type='number' />
            <p><b>Quantity:</b> {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions'/>
            <p><b>Comment:</b> {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select payment method</option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="cheque">Cheque</option>
            </select>
            <p><b>Payment:</b> {payment}</p>

            <label>
                <input type="radio" value={"Pick-Up"} checked={delivery === "Pick-Up"} onChange={handleDeliveryChange} />
                Pick-up
            </label>
            <br />
            <label>
                <input type="radio" value={"Delivery"} checked={delivery === "Delivery"} onChange={handleDeliveryChange} />
                Delivery
            </label>

            <p><b>Shipping:</b> {delivery}</p>
        </div>
    );

}


export default MyForm;