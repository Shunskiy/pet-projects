import React from "react";
import Header from "../Header/Header";
import Todo from "../Todo/Todo";
import TicTacToe from "../TicTacToe/TicTacToe";
import Weather from "../Weather/Weather";
import {Route, Switch} from "react-router";

const Home = () => {
    return (
        <>
            <Header/>
            <main className="main">
                <React.Suspense fallback={"<div> Загрузка...</div"}>
                    <Switch>
                        <Route exact path={['/', '/todo']} component={Todo}/>
                        <Route exact path={'/tictactoe'} component={TicTacToe}/>
                        <Route exact path={'/weather'} component={Weather}/>
                    </Switch>
                </React.Suspense>
            </main>
        </>
    )
}

export default Home