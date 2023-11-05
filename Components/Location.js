import React from "react"
/*
title: "Sydney Opera House",
location: "Austrlia",
googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
startDate: "27 May, 2021",
endDate: "8 Jun, 2021",
description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
imageUrl: "https://source.unsplash.com/JmuyB_LibRo"
*/
export default function Location(props) {
    return (
        <div className="location">
            <img src={props.item.imageUrl} className="location-image"/>
            <div className="location-details">
                <p className="actual-location"><span className="country">{props.item.location.toUpperCase()}</span> <a href={props.item.googleMapsUrl}>View on Google Maps</a></p>
                <h2>{props.item.title}</h2>
                <p className="dates"><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}