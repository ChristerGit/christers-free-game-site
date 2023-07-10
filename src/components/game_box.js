import React from "react"

import { StaticImage } from "gatsby-plugin-image"

import { Link } from 'gatsby'

export default function Game_box(props) {
    return (
    <a href={props.linkTo}>
        <StaticImage src="../images/game_previews/test_game_1.png" alt="Test game 1" />
    </a>
    );
  }