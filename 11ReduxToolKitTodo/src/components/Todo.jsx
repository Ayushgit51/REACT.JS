import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

export default function Todo() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const [editId, setEditId] = React.useState(null);
    const [editText, setEditText] = React.useState("");

    const handleEdit = (todo) => {
        setEditId(todo.id);
        setEditText(todo.text);
    };

    const handleUpdate = (id) => {
        if (editText.trim() !== "") {
            dispatch(updateTodo({ id, text: editText }));
        }
        setEditId(null);
        setEditText("");
    };

    return (
        <div className="max-w-md mx-auto mt-8 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Todos</h2>
            <ul>
                {todos
                    .filter((todo) => todo.text && todo.text.trim() !== "")
                    .map((todo) => (
                        <li
                            key={todo.id}
                            className="flex justify-between items-center p-3 border-b last:border-b-0 hover:bg-gray-50 transition"
                        >
                            {editId === todo.id ? (
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="border rounded px-2 py-1 mr-2 flex-1"
                                />
                            ) : (
                                <span className="text-gray-700">{todo.text}</span>
                            )}
                            <div className="flex gap-2">
                                {editId === todo.id ? (
                                    <button
                                        onClick={() => handleUpdate(todo.id)}
                                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition font-medium"
                                    >
                                        Save
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => handleEdit(todo)}
                                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition font-medium"
                                    >
                                        Update
                                    </button>
                                )}
                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition font-medium"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
