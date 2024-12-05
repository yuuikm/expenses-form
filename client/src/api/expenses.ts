import axios from "axios";

const API_URL = "http://localhost:5000/expenses";

export const saveExpense = async (expense: {
  dateTime: string;
  author: string;
  sum: number;
  category: string;
  comment: string;
}) => {
  return await axios.post(API_URL, expense);
};
