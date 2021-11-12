import {StaticImage} from "gatsby-plugin-image";
import * as React from "react"

export const epoch = -770947200000; // jim davis' birthday

export const phases = {
    garfield: {
        image: () => {
            return <StaticImage src={"./images/garfield.jpg"}/>
        },
        description: "The garfield phase",
        title: "Garfield"
    },
    odie: {
        image: () => {
            return <StaticImage src={"./images/odie.png"}/>
        },
        description: "The odie phase",
        title: "Odie"
    },

};
