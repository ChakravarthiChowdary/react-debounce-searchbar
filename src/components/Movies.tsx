import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

import { useAppSelector } from "../store/store";
import { Movie } from "../store/reducer";

const Movies = () => {
  const { movies } = useAppSelector((state) => state.data);

  if (movies.length === 0) {
    return null;
  }

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper", mt: 3 }}>
      {movies.map((movie: Movie) => (
        <React.Fragment key={movie._id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={movie.title}
              secondary={
                <React.Fragment>
                  {`This movies is released in the year ${movie.year}`}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="fullWidth" component="li" />
        </React.Fragment>
      ))}
    </List>
  );
};

export default Movies;
