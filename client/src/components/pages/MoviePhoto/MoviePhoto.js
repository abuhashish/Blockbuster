import React from 'react'

const MoviePhoto = () => {

    const bb = "https://www.somagnews.com/wp-content/uploads/2021/06/Shazam-2-2.jpg"

    const style ={
        back:{
            backgroundImage: "url(" + bb + ")",
            color:"white",
            height:"15cm",
        },
        kkk:{
            textAlign:"Left",
            width:"550px",
            height:"15cm",
            padding:"2cm",
            backgroundColor:"rgba(0, 0, 0, 0.63)",
        },
        box:{
            margin:"0.5cm",
            width:"100px",
            border:"1px solid black",
            backgroundColor:"rgba(255, 0, 0)",
            textAlign:"center"
        }
    }
    return (
        <div style={style.back}>
            <header class="jss211" style={style.kkk}>
            <h1 class="MuiTypography-root jss213 MuiTypography-h1 MuiTypography-colorInherit">watchmen</h1>
            <p class="MuiTypography-root jss217 MuiTypography-body1 MuiTypography-colorInherit">set in an alternate history where “superheroes” are treated as outlaws, “watchmen” embraces the nostalgia of the original groundbreaking graphic novel while attempting to break new ground of its own.</p>
            <h4 class="MuiTypography-root jss214 MuiTypography-h4 MuiTypography-colorInherit">By: damon lindelof</h4>
            <p style={style.box} class="MuiTypography-root jss215 MuiTypography-body1 MuiTypography-colorInherit">60 min</p>
            <p style={style.box} class="MuiTypography-root jss216 MuiTypography-body1 MuiTypography-colorInherit">drama</p>
            </header>
        </div>
    )
}

export default MoviePhoto
