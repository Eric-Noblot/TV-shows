import "./app.css";
import { TVShowAPI } from "./api/tv-show";

TVShowAPI.fetchPopulars()

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>Subtitles</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{width: "100%"}} type="text" />
          </div>
        </div>
      </div>
      <div className="tv_show_header">details</div>
      <div className="recommendations">recommandations</div>
    </div>
  );
}

export default App;
