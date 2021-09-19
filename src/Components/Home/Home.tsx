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
                <Switch>
                    <Route exact path={['/', '/todo']} component={Todo}/>
                    <Route exact path={'/tictactoe'} component={TicTacToe}/>
                    <Route exact path={'/weather'} component={Weather}/>
                </Switch>
            </main>
        </>
    )
}

export default Home