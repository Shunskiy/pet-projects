import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {toWeather} from "../../Features/PageSelect/PageSelectSlice";
import axios from "axios";
import {
    Alert,
    Button,
    Card,
    CardContent,
    CircularProgress,
    Grid,
    Snackbar,
    TextField,
    Typography
} from "@mui/material";
import './Weather.css'

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
    const [snack, setSnack] = useState(false)
    const url = `https://goweather.herokuapp.com/weather/${city}`

    const updateData = () => {
        if (city) {
            setSnack(false)
                axios.get(url).then((response) => {
                    setData(response.data)
                })
        }

        if (!city) {
            setSnack(true)
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

            <Grid className="weather__info-wrapper" container wrap="wrap" spacing={2}>
                <Grid item md={4} xs={12}>
                    <Card>
                        <CardContent>
                            {data.temperature ?  <Typography>Temperature: {data.temperature}</Typography> : <CircularProgress/>}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                    <Card>
                        <CardContent>
                            {data.wind ?  <Typography>Wind: {data.wind}</Typography> : <CircularProgress/>}
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item md={4} xs={12} >
                    <Card>
                        <CardContent>
                            {data.description ?  <Typography>About: {data.description}</Typography> : <CircularProgress/>}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <div className="weather__input-wrapper">
                <TextField className="weather__input" label="Город" variant="outlined" value={city} onChange={(e) => {
                    setCity(e.target.value)
                }} sx={{marginBottom: "10px"}}/>

                <Button className="weather__button" variant="contained" onClick={() => {
                    updateData()
                }}>Узнать</Button>
            </div>

            <Snackbar open={snack} autoHideDuration={6000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    Введите город
                </Alert>
            </Snackbar>
        </section>
    )
}

export default Weather