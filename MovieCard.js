// import React from "react";

const MovieCard = ({m}) => {

    // console.log(m);
    
    return (
        <div className="movie">
            <div>
                <p>{m.Year}</p>
            </div>

            <div>
                <img src={m.Poster !== 'N/A' ? m.Poster : console.log('heh') } alt={m.Tilte}/>
            </div>

            <div>
                <span>{m.Type}</span>
                <h3>{m.Tilte}</h3>
            </div>

        </div>
    );
}

export default MovieCard;