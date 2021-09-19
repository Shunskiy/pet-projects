import Header from "../Header/Header";
import Todo from "../Todo/Todo";
import {Route, Switch} from "react-router";

const Home = () => {
    return(
        <>
            <Header/>
            <main className={"main"}>
                <Switch>
                    <Route exact path='/' component={Todo}/>
                </Switch>
            </main>
        </>
    )
}

export default Home