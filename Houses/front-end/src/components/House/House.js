import React, { Component } from 'react';

import './House.css';

const House= (props) =>(
    <div className="House" onMouseEnter={()=> props.houseHoverEvent(props.id)}>
    <img src={props.imageUrl}></img>
    </div>
)

export default House;
