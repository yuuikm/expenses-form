import React, { useState } from "react";
import axios from "axios";

function App() {
  const [dateTime, setDateTime] = useState("");
  const [sum, setSum] = useState("");
  const [category, setCategory] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transaction = {
      dateTime,
      sum,
      category,
      comment,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/transactions",
        transaction
      );
      alert("Transaction added successfully!");
    } catch (error) {
      alert("Failed to add transaction");
    }
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Sum:
          <input
            type="number"
            value={sum}
            onChange={(e) => setSum(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Category:
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Comment:
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
