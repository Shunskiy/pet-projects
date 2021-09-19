import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {toWeather} from "../../Features/PageSelect/PageSelectSlice";

const Weather = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = "Pet Project 😺 | Weather"
        dispatch(toWeather())
    }, [dispatch])

    return (
        <h1>
            Weather ☁
        </h1>
    )
}

export default Weather