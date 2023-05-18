import "./TVShowListItem.css"
import { SMALL_IMG_COVER_URL } from "../../config"

export function TVShowListItem({TVShow, onClick}) {
    // console.log("1",SMALL_IMG_COVER_URL)
    // console.log("2",TVShow.backdrop_path)

    return (// ici onClick appelle onclick car on a besoin de lui passer TVShow
        <div onClick={() => onClick(TVShow)} className="item_container"> 
            <img alt={TVShow.name} src={SMALL_IMG_COVER_URL + TVShow.backdrop_path} className="item_img" />
            <div className="item_title">{TVShow.name}</div>
        </div>
    )
}

