import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {toWeather} from "../../Features/PageSelect/PageSelectSlice";
import axios from "axios";
import "./Weather.css"

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
        console.log('rdrdr')
        if (city) {
                axios.get(url).then((response) => {
                    setData(response.data)
                    setError('')
                }).catch(() => {
                    setError("Error")
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
                { error ? "Error" : upperFirstChar(city)}
            </h2>
            {!error ? <h2>{error}</h2> : null}
            <ul className="weather__info">
                <li className="weather__info-item">
                    <b>Temperature:</b> {error ? "error" : data.temperature}
                </li>
                <li className="weather__info-item">
                    <b>Wind:</b> {error ? "error" : data.wind}
                </li>
                <li className="weather__info-item">
                    <b>About:</b> {error ? "error" : data.description}
                </li>
            </ul>
            <input className="weather__input" value={city} onChange={(e) => {
                setCity(e.target.value)
            }}/>
            <button className="weather__button" onClick={() => {
                updateData()
            }}>Узнать
            </button>
        </section>
    )
}

export default Weather