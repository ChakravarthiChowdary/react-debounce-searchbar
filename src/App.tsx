import { CircularProgress, Container } from "@mui/material";
import { Dispatch, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";

import { useDispatch } from "react-redux";
import { getMovies } from "./store/action";
import Movies from "./components/Movies";
import { useAppSelector } from "./store/store";
import Error from "./components/Error";

function App() {
  const dispatch: Dispatch<any> = useDispatch();
  const { loading, error, apiCallsCount } = useAppSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const renderList = () => {
    if (loading) {
      return <CircularProgress sx={{ mt: 3 }} />;
    }

    if (error) {
      return <Error error={error} />;
    }

    return <Movies />;
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        mt: 4,
        flexDirection: "column",
      }}
    >
      <h2 className="home__title">Debounce Search bar</h2>
      <h4 className="home__title">API calls count = {apiCallsCount}</h4>

      <SearchBar />
      {renderList()}
    </Container>
  );
}

export default App;
