import AddTodo from "./components/AddTodo"
import Todo from "./components/Todo";


function App() {

  return (
    <div className="min-h-screen bg-gray-900 transition-colors duration-300">
      <div className="max-w-xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-100">HARI BOL</h1>
        <div className="bg-gray-800 rounded-lg shadow-md p-6">
          <AddTodo />
        </div>
        <div className="mt-6 bg-gray-800 rounded-lg shadow-md p-6">
          <Todo />
        </div>
      </div>
    </div>
  )
}

export default App
