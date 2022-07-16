import { Alert, Container } from "@mui/material";
import React from "react";

interface IErrorProps {
  error: { message: string; statusCode: string };
}

const Error: React.FC<IErrorProps> = ({ error }) => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        mt: 4,
      }}
    >
      <Alert severity="error" sx={{ width: "100%" }}>
        {error.message}
      </Alert>
    </Container>
  );
};

export default Error;
