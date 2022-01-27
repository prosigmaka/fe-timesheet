import React from "react";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Icon } from "@iconify/react";
// import employeeIcon from '@iconify/icons-raphael/employee';
// material
import { alpha, styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "170px",
    width: "155px",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    // backgroundColor: theme.palette.secondary.lighter,
    color: theme.palette.secondary.contastText,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    height: "115px",
  },
}));

function MenuCards() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" style={{ marginTop: "30px" }}>
        <Grid container spacing={5}>
          <Card className={classes.card} sx={{ backgroundColor: "#C8FACD" }}>
            <CardContent>
              <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid item>
                  <Typography gutterBottom variant="overline">
                    Jumlah Karyawan
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card} sx={{ backgroundColor: "#D6E4FF" }}>
            <CardContent>
              <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                <Grid item>
                  <Typography gutterBottom variant="overline">
                    Placement
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card} sx={{ backgroundColor: "#D6E4FF" }}>
            <CardContent>
              <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid item>
                  <Typography gutterBottom variant="overline" align="center">
                    Idle
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card} sx={{ backgroundColor: "#FFF7CD" }}>
            <CardContent>
              <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid item>
                  <Typography gutterBottom variant="overline">
                    Cuti
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card} sx={{ backgroundColor: "#FFE7D9" }}>
            <CardContent>
              <Grid container spacing={3} sx={{ justifyContent: "center" }}>
                <Grid item>
                  <Typography gutterBottom variant="overline">
                    Resign
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default MenuCards;
