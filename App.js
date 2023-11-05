import React from "react"
import Header from "./Components/Header"
import Location from "./Components/Location"
import locationsData from "./data.js"

export default function App() {
    console.log(locationsData)
    const locations = locationsData.map(item => {
        return <Location item={item}/>
    })
    return (
        <>
            <Header />
            <section className="locations">
                	{locations}
            </section>
        </>
    )
}