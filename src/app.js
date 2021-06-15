


function App() {
    const todoList = ["💻 Work","🍗 Eat", "🎮 Play", "😴 Sleep"];
    const [todos,setTodos] = React.useState(todoList);
    const [text, setText] = React.useState("");

    const removeTodo = (key) => {
        let data = todos;
        data.splice(key,1)
        setTodos([...data]);
    }

    const addTodo = (e) => {
        e.preventDefault();
        todos.push(text);
        setTodos([...todos]);
    }
    // render() {
        return (
            <div className="container">
                <header className="text-center text-light my-4">
                    <h1 className="mb-4">Todo List</h1>
                </header>
                <ul className="list-group todos mx-auto text-light">
                    {todos.map((todo,key)=>(
                        <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                            <span>{todo}</span>
                            <span className="delete" onClick={()=>removeTodo(key)}>×</span>
                        </li>
                    ))}
                </ul>

                <form className="add text-center my-4" onSubmit={addTodo}>
                    <label className="text-light">Add a new todo...</label>
                    <input className="form-control m-auto" type="text"
                           value={text}
                           onChange={e => setText(e.target.value)}/>
                </form>

            </div>
        );
    // }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<App/>, domContainer);
