import './Header.css'
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {toTicTacToe, toTodo, toWeather} from "../../Features/PageSelect/PageSelectSlice";

const Header = () => {
    const page = useSelector((state: RootState) => state.pageSelect.page)
    const history = useHistory();
    const dispatch = useDispatch()

    const pushTo = {
        Todo: () => {
            history.push('/todo')
        },
        TicTacToe: () => {
            history.push('/tictactoe')
        },
        Weather: () => {
            history.push('/weather')
        }
    }

    return (
        <header className="header">
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <button className={`header__button ${page === 'todo' ? `header__button--active` : null}`}
                                type='button' onClick={() => {
                            pushTo.Todo()
                            dispatch(toTodo())
                        }}>
                            Todo List
                        </button>
                    </li>
                    <li className="header__nav-item">
                        <button className={`header__button ${page === 'tictactoe' ? `header__button--active` : null}`}
                                type='button' onClick={() => {
                            pushTo.TicTacToe()
                            dispatch(toTicTacToe())
                        }}>
                            Tic Tac Toe
                        </button>
                    </li>
                    <li className="header__nav-item">
                        <button className={`header__button ${page === 'weather' ? `header__button--active` : null}`}
                                type='button' onClick={() => {
                            pushTo.Weather()
                            dispatch(toWeather())
                        }}>
                            Weather
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header