import React from "react";
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Icon } from "@iconify/react";
// import employeeIcon from '@iconify/icons-raphael/employee';
import ListAltIcon from "@mui/icons-material/ListAlt";
import { alpha, styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "200px",
    width: "200px",
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    backgroundColor: theme.palette.primary.lighter,
    color: theme.palette.primary.darker,
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
    height: "115px",
  },
}));

function MenuCardsKaryawan() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md" style={{ marginTop: "30px" }}>
        <Grid container spacing={2}>
          <Card className={classes.card}>
            <CardContent>
              <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography gutterBottom variant="overline">
                    Project List
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent>
              <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography gutterBottom variant="overline">
                    Delivery Performance
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardContent>
              <Grid container spacing={3} sx={{ justifyContent: "space-between" }}>
                <Grid item>
                  <Typography gutterBottom variant="overline">
                    Timesheet Collections
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

export default MenuCardsKaryawan;
