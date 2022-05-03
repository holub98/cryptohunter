import { Container, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme)=> ({
    banner:{
        backgroundImage: "url(./banner2.jpg)",
       
        
    },
    bannerContent: {
        heigh: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: " 40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
}));

const Banner = () => {
    const classes = useStyles();
  return (
    <div className={classes.banner}>
        <Container className={classes.banerContent}>
            <div className={classes.tagline}>
                <Typography
                 variant="h2"
                 style={{
                     fontWeight: "bold",
                     marginBottom: 15,
                     fontFamilly: "Montserrat",
                 }}>
                     Crypto Hunter
                </Typography> 
                <Typography
                    variant="subtitle2"
                    style={{
                        color: "darkgray",
                        textTransform: "capitalize",
                        fontFamily: "Montserrat",
                    }}>
                    Get all the Info regarding your favorite Crypto Currencies
                </Typography>
            </div>
            <Carousel/>
        </Container>
        
    </div>
  );
}

export default Banner