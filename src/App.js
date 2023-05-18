import "./app.css";
import { TVShowAPI } from "./api/tv-show";
import { useState, useEffect } from "react";
import { BACKDROP_BASE } from "./config";
import { TVShowDetails } from "./components/TVShowDetails/TVShowDetails";
import { Logo } from "./components/Logo/Logo";
import LogoImg from "./assets/images/logo.png";
import { TVShowList } from "./components/TVShowList/TVShowList";

//TVShowAPI.fetchRecommendations(1402)
function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationsList, setRecommendationsList] = useState([])

  async function fetchPopulars() {
    const populars = await TVShowAPI.fetchPopulars();
    if (populars.length > 0) {
      setCurrentTVShow(populars[10]);
    }
  }

  async function fetchRecommendations(TVShowId) {
    const recommendations = await TVShowAPI.fetchRecommendations(TVShowId);
    if (recommendations.length > 0) {
      setRecommendationsList(recommendations.slice(0, 10)) //on garde que les 10 premiers films
    }
  }
  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => { //ce Useeffect permet de placer sur écouter CurrentTVShow afin qu'il active la fonction
    if(currentTVShow){  //fetchRecommendations dès qu'il change d'état. Car on base les recommdantions sur ce 
      fetchRecommendations(currentTVShow.id) //quoi l'utilisateur clique. On base notre fecth sur l'id (donc sur currentTVShow.id)
  }
}, [currentTVShow]);

// console.log("1",recommendations)

  function setCurrentTVShowFromRecommendation(TVShow){
    alert(JSON.stringify(TVShow))
  }

  //console.log("tv", currentTVShow);
  //console.log("recommndations", recommendationsList)
  return (
    <div
      className="container"
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,045)), url("${BACKDROP_BASE}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className="header">
        <div className="row">
          <div className="col-4">
            <Logo
              title="Wattoshow"
              subtitle="find a show you may like"
              image={LogoImg}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className="tv_show_header">
        {currentTVShow && <TVShowDetails TVShow={currentTVShow} />}
      </div>
      <div className="recommendations">
        {recommendationsList && recommendationsList.length > 0 && 
        <TVShowList 
          onClickItem={setCurrentTVShow}
          TVShowList={recommendationsList} />}
      </div>
    </div>
  );
}

//quand on demande {currentTVShow && <TVShowDetails , c'est car notre 1er render dans useEffect renvoie d'abord un tableau vide avant
//que le await de fetchPopular alimente la variable, du coup pour éviter que ca crash on demande d'abord si valeur est bien remplie avant de procéder
//ce crash apparait dans les videso de cours d'UDEMY mais mois ca marche sans ca, peut etre une nouvelle version de React?
export default App;
