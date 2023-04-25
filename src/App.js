import "./styles.css";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { reset } from "./store";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    // The approach used below of using two dispatch functions
    // to reset both of the songs and movies state
    // is not the "Redux" way
    // In Redux, we wanna reduce the number of dispatch() calls s
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
