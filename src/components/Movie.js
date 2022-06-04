import react from "react";
import { useParams } from 'react-router-dom';

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

//Components
import Grid from './Grid';
import Spinner from './Spinner';
import BreadCrumb from "./BreadCrumb";
import MovieInfo from "./MovieInfo";
import MovieInfoBar from "./MovieInfoBar";
import Actor from './Actor';

import MapSection from './Map/Map' // import the map here

//Hook
import { useMovieFetch } from '../Hooks/useMovieFetch';

//Helper
import { filterTrailerURL } from "../helpers";

//Image
import NoImage from '../images/no_image.jpg';

const Movie = () =>
{

    const { movieId } = useParams();

    const { state: movie, loading, error } = useMovieFetch(movieId);

    if (loading) return <Spinner />;
    if (error) return <div>Something went wrong...</div>;

    const trailerURL = filterTrailerURL(movie);

    const location = {
        address: 'Paradise Center, Blvd "Cherni Vryh", Sofia.',
        lat: 42.65872,
        lng: 23.31569,
    }

    return (
        <>
            <BreadCrumb movieTitle={movie.original_title} />
            <MovieInfo movie={movie} trailer={trailerURL} />
            <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
            <Grid header='Actors'>
                {movie.actors.map(actor => (
                    <Actor
                        key={actor.credit_id}
                        name={actor.name}
                        character={actor.character}
                        imageUrl={
                            actor.profile_path
                                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                                : NoImage
                        }
                    />
                ))}
            </Grid>
            <MapSection location={location} zoomLevel={17} />
        </>
    );
}

export default Movie;