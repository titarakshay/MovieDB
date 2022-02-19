import List from "./Contents/List";
import GenreList from "./GenreList";

export default function Landing(handleClick, movieList) {
  return (
    <div className="main-container">
      <div className="sub-container-1">
        <GenreList handleClick={handleClick} />
      </div>
      <div className="sub-container-2">
        <List movieList={movieList} />
      </div>
    </div>
  );
}
