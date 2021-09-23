import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {toTicTacToe} from "../../Features/PageSelect/PageSelectSlice";
import './TicTacToe.css'
import {RootState} from "../../Store/Store";
import {setCell} from "../../Features/TicTacToeSlice/TicTacToeSlice";

const TicTacToe = () => {
    const dispatch = useDispatch()
    const gameField = useSelector((state: RootState) => state.ticTacToe)

    const [player, setPlayer] = useState(0)
    const [xoField, setXoField] = useState(['', '', '', '' , '' , '', '', '', ''])
    const [gameIsOn, setGameIsOn] = useState(true)
    const [winner, setWinner] = useState('')

    const playerMove = (cell: { id: number, value: string }) => {
        if (gameIsOn) {
            if (cell.value === '') {
                let value: "" | "X" | "O"

                if (player === 0) {
                    value = "X"
                    dispatch(setCell({id: cell.id, value: value}))
                    setPlayer(1)
                }
                if (player === 1) {
                    value = "O"
                    dispatch(setCell({id: cell.id, value: value}))
                    setPlayer(0)
                }
            }

            if (cell.value !== '') {
                alert("Клетка занята")
            }
        }

        if (!gameIsOn) {
            alert("Игра закончена!")
        }
    }

    const WinningCombination = [
        [0, 1, 2],
        [0, 4, 8],
        [0, 3, 6],
        [1, 5, 7],
        [2, 4, 6],
        [2, 5, 8],
        [3, 4, 5],
        [6, 7, 8]
    ]


    const checkWin = () => {
        gameField.forEach((cell) => {
            let newXoField = xoField;
            newXoField[cell.id] = cell.value
            setXoField(newXoField)
        })

        WinningCombination.forEach((item) => {
            if (xoField[item[0]] === "X" && xoField[item[1]] === "X" && xoField[item[2]] === "X") {
                setGameIsOn(false)
                setWinner('X')
            }

            if (xoField[item[0]] === "O" && xoField[item[1]] === "O" && xoField[item[2]] === "O") {
                setGameIsOn(false)
                alert("Победил O")
                setWinner("O")
            }
        })
    }
    useEffect(() => {
        document.title = "Pet Project 😺 | Tic-tac-toe"
        dispatch(toTicTacToe())
    }, [dispatch])

    useEffect(() => {
        checkWin()
    })

    return (
        <section className="tictactoe">
            <h1 className="tictactoe__title">TicTacToe 😎</h1>
            {!gameIsOn
                ? <h2 className="tictactoe__winner">Победили {winner}</h2>
                : null
            }
            <table className="tictactoe__game game">
                <tbody>
                <tr className="game__row">
                    {
                        gameField.map((cell, key) => {
                            if (cell.id < 3) {
                                return (
                                    <td className="game__cell" key={key} onClick={() => {
                                            playerMove(cell)
                                    }}>{cell.value}</td>
                                )
                            } else {
                                return null
                            }
                        })
                    }
                </tr>
                <tr className="game__row">
                    {
                        gameField.map((cell, key) => {
                            if (cell.id < 6 && cell.id > 2) {
                                return (
                                    <td className="game__cell" key={key} onClick={() => {
                                        playerMove(cell)
                                    }}>{cell.value}</td>
                                )
                            } else {
                                return null
                            }
                        })
                    }
                </tr>
                <tr className="game__row">
                    {
                        gameField.map((cell, key) => {
                            if (cell.id < 9 && cell.id > 5) {
                                return (
                                    <td className="game__cell" key={key} onClick={() => {
                                        playerMove(cell)
                                    }}>{cell.value}</td>
                                )
                            } else {
                                return null
                            }
                        })
                    }
                </tr>
                </tbody>
            </table>
        </section>
    )
}

export default TicTacToe