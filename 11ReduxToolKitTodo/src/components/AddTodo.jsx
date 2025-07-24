import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {

    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput("");
        }
    };

return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Todo</h2>
        <form onSubmit={addTodoHandler} className="flex space-x-2">
            <input
                type="text"
                placeholder="Enter todo"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
                Add
            </button>
        </form>
    </div>
);
}