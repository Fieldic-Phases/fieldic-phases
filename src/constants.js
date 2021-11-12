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
    jon: {
        image: () => {
            return <StaticImage src={"./images/jon.png"}/>
        },
        description: "The jon phase",
        title: "Jon Arbuckle"
    },
    nermal: {
        image: () => {
            return <StaticImage src={"./images/nermal.jpg"}/>
        },
        description: "The nermal phase",
        title: "Nermal"
    },
    drliz: {
        image: () => {
            return <StaticImage src={"./images/drliz.jpeg"}/>
        },
        description: "The Dr Liz Wilson phase",
        title: "Dr. Liz Wilson"
    },
    arlene: {
        image: () => {
            return <StaticImage src={"./images/arlene.png"}/>
        },
        title: "Arlene",
        description: "The Arlene phase"
    },
    pookie: {
        image: () => {
            return <StaticImage src={"./images/pookie.jpeg"}/>
        },
        title: "Pookie",
        description: "The pookie phase"
    }
};

export const PHASE = [
    {
        key: "garfield",
        number: 0
    },
    {
        key: "odie",
        number: 4
    },
    {
        key: "nermal",
        number: 1
    },
    {
        key: "jon",
        number: 2
    },
    {
        key: "arlene",
        number: 3
    },
    {
        key: "drliz",
        number: 5
    },
    {
        key: "pookie",
        number: 6
    }
];
