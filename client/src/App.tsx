import React, { useState } from "react";
import { saveExpense } from "./api/expenses";
import { FormInput } from "./components/FormInput";
import { TextArea } from "./components/TextArea";
import { Button } from "./components/Button";

export default function NewExpensePage() {
  const [formData, setFormData] = useState({
    dateTime: "",
    author: "",
    sum: "",
    category: "",
    comment: "",
  });

  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    text: string;
  }>({
    type: null,
    text: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await saveExpense({
        ...formData,
        sum: parseFloat(formData.sum),
      });
      setStatusMessage({
        type: "success",
        text: "Expense saved successfully!",
      });
      setFormData({
        dateTime: "",
        author: "",
        sum: "",
        category: "",
        comment: "",
      });
    } catch (error) {
      setStatusMessage({
        type: "error",
        text: "Failed to save the expense. Please try again.",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        className="space-y-6 p-8 bg-white rounded-lg shadow-md w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold text-gray-800 text-center">
          Add New Expense
        </h1>

        <FormInput
          label="Date & Time"
          name="dateTime"
          type="datetime-local"
          onChange={handleChange}
          className="w-full"
        />
        <FormInput
          label="Author"
          name="author"
          type="text"
          onChange={handleChange}
          className="w-full"
        />
        <FormInput
          label="Sum"
          name="sum"
          type="number"
          onChange={handleChange}
          className="w-full"
        />
        <FormInput
          label="Category"
          name="category"
          type="text"
          onChange={handleChange}
          className="w-full"
        />
        <TextArea
          label="Comment"
          name="comment"
          onChange={handleChange}
          className="w-full"
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>

        {statusMessage.type && (
          <p
            className={`text-center mt-4 text-sm ${
              statusMessage.type === "success"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {statusMessage.text}
          </p>
        )}
      </form>
    </div>
  );
}
