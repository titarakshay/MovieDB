
import List from "./Contents/List";
import GenreList from "./GenreList";

export default function HomePage() {
 
  return (
    <>
      <div className="d-flex flex-wrap container-xl justify-content-between p-1">
        <div className="w-30">
        <GenreList/>
        </div>
       <List/>
   
      </div>
    </>
  );
}
