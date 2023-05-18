import { TVShowListItem } from "../TVShowListItem/TVShowListItem"
import "./TVShowList.css"
export function TVShowList({ TVShowList, onClickItem }) {
    return (
        <>
        <div className = "title_list">You may also like:</div>
        <div className = "list">
            {TVShowList.map((TVShow) => {
                return (
                    <span key={TVShow.id} className = "tv_show_list_item">
                        <TVShowListItem onClick={onClickItem} TVShow={TVShow}  />
                    </span>
                )
            })}
        </div>
    </>
)}
// ici le fait de faire passer le click permet aux items de récuperer la fonction setCurrentTVShow
// qui va permettre de faire changer l'image a chaque fois qu'on cliquera dessus (grace aux props
// on fait passer le clique de onClickItem qui est égal ici a la fonction setCurrentTVShow)