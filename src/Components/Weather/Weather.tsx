import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {toWeather} from "../../Features/PageSelect/PageSelectSlice";
import axios from "axios";

const Weather = () => {
    interface Data {
        temperature?: string,
        wind?: string,
        description?: string
        forecast?: []
    }


    const dispatch = useDispatch()

    const [city, setCity] = useState('moskow')
    const [data, setData] = useState<Data>({})
    const [error, setError] = useState('')
    const url = `https://goweather.herokuapp.com/weather/${city}`

    const updateData = () => {
        if (city) {
            axios.get(url).then((response) => {
                setData(response.data)
            })
        }

        if (!city) {
            alert("Введите город")
        }
    }

    const upperFirstChar = (text: string) => {
        let finalText = text
        return text.charAt(0).toUpperCase() + finalText.substr(1, finalText.length - 1)
    }

    useEffect(() => {
        document.title = "Pet Project 😺 | Weather"
        dispatch(toWeather())
    }, [dispatch])

    useEffect(() => {
        updateData()
    }, [])

    return (
        <section className="weather">
            <h1 className="weather__title">
                Weather ☁
            </h1>
            <h2 className="weather__city">
                {upperFirstChar(city)}
            </h2>
            {!error ? <h2>{error}</h2> : null}
            <ul className="weather__info">
                <li>
                    <b>Temperature:</b> {data.temperature}
                </li>
                <li>
                    <b>Wind:</b> {data.wind}
                </li>
                <li>
                    <b>About:</b> {data.description}
                </li>
            </ul>
            <input value={city} onChange={(e) => {
                setCity(e.target.value)
            }}/>
            <button onClick={() => {
                updateData()
            }}>Узнать
            </button>
        </section>
    )
}

export default Weather