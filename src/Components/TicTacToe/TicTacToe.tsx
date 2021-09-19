import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toTicTacToe} from "../../Features/PageSelect/PageSelectSlice";

const TicTacToe = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = "Pet Project 😺 | Tic-tac-toe"
        dispatch(toTicTacToe())
    }, [dispatch])

    return (
        <h1>TicTacToe 😎</h1>
    )
}

export default TicTacToe