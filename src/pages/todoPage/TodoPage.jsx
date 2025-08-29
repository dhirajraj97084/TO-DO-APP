import { useState } from "react";

export default function TodoPage() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleAdd = () => {
    const text = todo.trim();
    if (!text) return;
    setList([...list, { id: Date.now(), text }]);
    setTodo("");
  };

  const startEdit = (item) => {
    setEditId(item.id);
    setEditText(item.text);
  };

  const saveEdit = () => {
    const text = editText.trim();
    if (!text) return;
    setList(list.map(it => (it.id === editId ? { ...it, text } : it)));
    setEditId(null);
    setEditText("");
  };

  const handleDelete = (id) => {
    setList(list.filter(it => it.id !== id));
    if (editId === id) { setEditId(null); setEditText(""); }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="flex justify-center items-center py-6 text-3xl font-bold">
          TODO APP    
        </h1>

        <div className="mx-auto w-full max-w-xl bg-white rounded-xl shadow p-4">
          {/* Input + Add */}
          <div className="flex gap-3">
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 outline-none"
              type="text"
              placeholder="Write a task..."
            />
            <button
              onClick={handleAdd}
              className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Add
            </button>
          </div>

          {/* List */}
          <ul className="mt-5 space-y-3">
            {list.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-3 bg-gray-50 rounded-lg p-3"
              >
                {editId === item.id ? (
                  <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 border rounded-lg px-3 py-2 outline-none"
                  />
                ) : (
                  <span className="flex-1">{item.text}</span>
                )}

                <div className="flex items-center gap-2">
                  {editId === item.id ? (
                    <>
                      <button
                        onClick={saveEdit}
                        className="px-3 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => { setEditId(null); setEditText(""); }}
                        className="px-3 py-1 rounded-lg bg-gray-300 hover:bg-gray-400"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => startEdit(item)}
                        className="px-3 py-1 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
