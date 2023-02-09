import React, { useState } from "react";

const AddItemForm = () => {
    const [itemName, setItemName] = useState("");
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding item: ${itemName} with quantity: ${quantity}`);
        // Add logic to save item and quantity to the database here
        setItemName("");
        setQuantity(0);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="itemName">Item Name:</label>
                <input
                    type="text"
                    id="itemName"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="quantity">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />
            </div>
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddItemForm;
