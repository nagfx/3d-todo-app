import { useState, useEffect } from "react";
import { Plus, X, Check, RotateCcw, Edit2, Trash2 } from "lucide-react";

const TodoList = () => {
  // Initialize todos from sessionStorage or with a default list
  const [todos, setTodos] = useState(() => {
    const savedTodos = sessionStorage.getItem("todos");
    return savedTodos
      ? JSON.parse(savedTodos)
      : [
          { id: 1, text: "Learn React", completed: false },
          { id: 2, text: "Build a project", completed: false },
          { id: 3, text: "Write documentation", completed: false },
        ];
  });

  const [newTodo, setNewTodo] = useState("");
  const [rotation, setRotation] = useState(0);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editText, setEditText] = useState("");

  // Store todos in sessionStorage whenever they change
  useEffect(() => {
    sessionStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  const startEditing = (todo) => {
    setEditingTodo(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      setTodos(
        todos.map((todo) =>
          todo.id === editingTodo ? { ...todo, text: editText } : todo
        )
      );
      setEditingTodo(null);
      setEditText("");
    }
  };

  const rotate = () => {
    setRotation((prev) => prev + 45);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-4xl font-bold text-white">My Tasks</h2>
        <div className="flex gap-2">
          <button
            onClick={rotate}
            className="p-2 text-white hover:text-blue-300 transition-colors"
            title="Rotate view"
          >
            <RotateCcw size={24} />
          </button>
          <button
            onClick={clearAllTodos}
            className="p-2 text-white hover:text-red-300 transition-colors"
            title="Clear all tasks"
          >
            <Trash2 size={24} />
          </button>
        </div>
      </div>

      <div
        className="bg-white/10 backdrop-blur-lg rounded-lg p-6 shadow-xl transition-transform duration-500"
        style={{
          transform: `perspective(1000px) rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <form onSubmit={addTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2 bg-white/5 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <Plus size={24} />
          </button>
        </form>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="group bg-white/5 rounded-lg p-4 flex items-center justify-between transition-all duration-300 hover:scale-105"
            >
              {editingTodo === todo.id ? (
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 px-4 py-2 bg-white/5 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    autoFocus
                  />
                  <button
                    onClick={saveEdit}
                    className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <Check size={20} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className={`p-1 rounded-full transition-colors ${
                        todo.completed ? "bg-green-500" : "bg-white/10"
                      }`}
                    >
                      <Check size={16} className="text-white" />
                    </button>
                    <span
                      className={`text-white ${
                        todo.completed ? "line-through opacity-50" : ""
                      }`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => startEditing(todo)}
                      className="text-white/50 hover:text-blue-400 transition-colors"
                    >
                      <Edit2 size={20} />
                    </button>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="text-white/50 hover:text-red-400 transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
