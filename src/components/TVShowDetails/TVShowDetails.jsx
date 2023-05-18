import { FiveStarRating } from "../FiveStarRating/FiveStarRating"
import "./TVShowDetails.css"
export function TVShowDetails({TVShow}){
    const rating = TVShow.vote_average / 2
    return (
        <div>
            <div className="title">{TVShow.name}</div>
            <div className = "rating_container">
                <FiveStarRating rating={rating} />
                <div className="vote">{rating} /5</div>
            </div>
            <div className="overview">{TVShow.overview}</div>
        </div>
    )
}   