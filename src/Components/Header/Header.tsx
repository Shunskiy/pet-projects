import './Header.css'
import {useHistory} from "react-router";

const Header = () => {
    const history = useHistory();

    const pushTo = {
        Todo: () => {
            history.push('/')
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
            <nav className={"header__nav"}>
                <ul className={"header__nav-list"}>
                    <li className={"header__nav-item"}>
                        <button className={"header__button header__button--active"} type={'button'} onClick={() => {
                            pushTo.Todo()
                        }}>
                            Todo List
                        </button>
                    </li>
                    <li className={"header__nav-item"}>
                        <button className={"header__button"} type={'button'} onClick={() => {
                            pushTo.TicTacToe()
                        }}>
                            Tic Tac Toe
                        </button>
                    </li>
                    <li className={"header__nav-item"}>
                        <button className={"header__button"} type={'button'} onClick={() => {pushTo.Weather()}}>
                            Weather
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header