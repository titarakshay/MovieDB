
import List from "./Contents/List";
import GenreList from "./GenreList";

export default function HomePage() {
 
  return (
    <>
      <div className="main-container">
        <div className="sub-container-1">

        <GenreList/>
        </div>
        <div className="sub-container-2">

       <List/>
        </div>
   
      </div>
    </>
  );
}
