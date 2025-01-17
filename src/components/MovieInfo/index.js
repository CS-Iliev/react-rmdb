import react, { useContext } from "react";
import API from '../../API';

//Components
import Thumb from "../Thumb";
import Rate from "../Rate";
import Button from "../Button";

//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

//Image
import NoImage from '../../images/no_image.jpg';

//Styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

//Context
import { Context } from '../../context';

const MovieInfo = ({ movie, trailer }) =>
{

    const [user] = useContext(Context);

    const handleRating = async value =>
    {
        const rate = await API.rateMovie(user.sessionId, movie.id, value);
    }

    return (
        <Wrapper backdrop={movie.backdrop_path}>
            <Content>
                <Thumb
                    image={
                        movie.poster_path
                            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                            : NoImage
                    }
                    clickable={false}
                />
                <Text>
                    <h1>{movie.title}</h1>
                    <h3>PLOT</h3>
                    <p>{movie.overview}</p>
                    <div className="content-wrapper">
                        <div className="content-wrapper-child-left">
                            <div className='rating-directors'>
                                <div>
                                    <h3>RATING</h3>
                                    <div className='score'>{movie.vote_average}</div>
                                </div>
                                <div className='director'>
                                    <h3>DIRECTOR{movie.directors.length > 1 ? 'S' : ''}</h3>
                                    {movie.directors.map(director => (
                                        <p key={director.credit_id}>{director.name}</p>
                                    ))}
                                </div>
                            </div>
                            {user && (
                                <div>
                                    <Rate callback={handleRating} />
                                    <div class="watchlist-button"><Button text="Add to Watchlist" /></div>
                                </div>
                            )}
                        </div>
                        {trailer != "No trailer" && (<div className="trailer">
                            <iframe className="iframe" src={trailer} allowFullScreen="allowFullScreen">
                            </iframe>
                        </div>
                        )}
                    </div>
                </Text>
            </Content>
        </Wrapper>
    );
};

export default MovieInfo;