import './Todo.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toTodo} from "../../Features/PageSelect/PageSelectSlice";
import {RootState} from "../../Store/Store";
import {addNewTodo, deleteTodo, TodoAction, updateList} from "../../Features/TodoSlice/TodoSlice";

const Todo = () => {
    const [todoText, setTodoText] = useState('')

    const todoStore = useSelector((state: RootState) => state.todo)
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = "Pet Project 😺 | Todo"
        dispatch(toTodo())
    }, [dispatch])

    return (
        <section className="main__todo todo">
            <h1 className="todo__title">Todo List 😁</h1>
            <ul className="todo__list">
                {todoStore.length === 0
                    ? <h2>Список задач пуст 🙌</h2>
                    : todoStore.map((item, key) => {
                        return (
                            <li className="todo__item" key={key}>
                                <input className="visually-hidden todo__checkbox" type="checkbox" id={`checkbox-${key}`}
                                       defaultChecked={item.complete} onChange={() => {
                                    dispatch(updateList({
                                        id: item.id,
                                        text: item.text,
                                        complete: !item.complete
                                    }))
                                }}/>
                                <label className="todo__text" htmlFor={`checkbox-${key}`}>
                                    {item.text}
                                </label>
                                <button className="todo__button" type="button" onClick={() => {
                                    dispatch(deleteTodo({
                                        id: item.id
                                    }))
                                }}>
                                    Удалить
                                </button>
                            </li>
                        )
                    })}
            </ul>
            <div className="todo__input-wrapper">
                <input className="todo__input" type="text"
                       onChange={(e) => {
                           setTodoText(e.target.value)
                       }}
                       value={todoText}/>
                <button className="todo__button" type="button" onClick={() => {
                    let todoObject: TodoAction = {
                        id: Date.now(),
                        text: todoText,
                        complete: false
                    }
                    dispatch(addNewTodo(todoObject))
                }}>Добавить задачу
                </button>
            </div>
        </section>
    )
}

export default Todo;
