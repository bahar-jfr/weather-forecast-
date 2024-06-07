import { Container, Typography } from "@mui/material";

export function HomePage(){
    return(
       <Container component="main" maxWidth="xs" sx={{pt:2}}>
        <Typography variant="h4" component="h4">Weather App</Typography>
       </Container>
    )
}