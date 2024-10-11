import './App.css';
import Todo from './Containers/Todo/Todo.jsx'
import Header from './Containers/Header/Header.jsx';

function App() {

  return (
    <>
      <Header />
      <main>
        <h1>current tasks</h1>
        <Todo />
      </main>
    </>
  )
}

export default App
