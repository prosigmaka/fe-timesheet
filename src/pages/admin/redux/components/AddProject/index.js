import React, { useState, useEffect } from "react";
import { Box, Card, Button, CardContent, FormControl, Grid, InputLabel, MenuItem, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { addProject, getListProject, updateProject, openModal } from "../../actions/projectActions";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    width: "400px",
    flexDirection: "column",
    margin: "5px",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const projectname = [
  {
    value: "Project 1",
    label: "Project 1",
  },
  {
    value: "Project 2",
    label: "Project 2",
  },
  {
    value: "Project 3",
    label: "Project 3",
  },
];

function AddProject() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { addProjectResult, detailProjectResult, updateProjectResult } = useSelector((state) => state.ProjectReducer);

  const [formProject, setFormProject] = useState({
    id: "",
    projectname: "",
    placement: "",
    speriode: "",
    eperiode: "",
  });

  const handleChange = (e) => {
    let data = { ...formProject };
    data[e.target.name] = e.target.value;
    console.log(data);
    setFormProject(data);
  };

  const closeHandler = (e) => {
    e.preventDefault();
    dispatch(openModal(false));
    // setOpen(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // saat ada id update timesheet
    if (formProject.id) {
      // update kontak
      dispatch(
        updateProject({
          id: formProject.id,
          projectname: formProject.projectname,
          placement: formProject.placement,
          speriode: formProject.speriode,
          eperiode: formProject.eperiode,
        })
      );
      dispatch(openModal(false));
    }
    // saat tidak ada id maka add timesheet
    else {
      // add timesheet
      dispatch(
        addProject({
          projectname: formProject.projectname,
          placement: formProject.placement,
          speriode: formProject.speriode,
          eperiode: formProject.eperiode,
        })
      );
    }
  };

  useEffect(() => {
    if (addProjectResult) {
      // console.log('6. Masuk komponen did update')
      dispatch(getListProject());
      setFormProject({
        projectname: "",
        placement: "",
        speriode: "",
        eperiode: "",
      });
    }
  }, [addProjectResult, dispatch]);

  useEffect(() => {
    if (detailProjectResult) {
      // console.log('6. Masuk komponen did update')
      // dispatch(getListKontak())
      setFormProject({
        id: detailProjectResult.id,
        projectname: detailProjectResult.projectname,
        placement: detailProjectResult.placement,
        speriode: detailProjectResult.speriode,
        eperiode: detailProjectResult.eperiode,
      });
    }
  }, [detailProjectResult, dispatch]);

  useEffect(() => {
    if (updateProjectResult) {
      // console.log('6. Masuk komponen did update')
      dispatch(getListProject());
      setFormProject({
        projectname: "",
        placement: "",
        speriode: "",
        eperiode: "",
      });
    }
  }, [updateProjectResult, dispatch]);

  return (
    <>
      <Card className={classes.card}>
        <Stack alignItems="center">
          <CardContent className={classes.cardContent} style={{ textAlign: "center" }}>
            <Typography gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "12pt", marginTop: "10px", marginBottom: "25px" }}>
              {formProject.id ? "Edit Project" : "Add Project"}
            </Typography>
            <Stack
              component="form"
              sx={{
                width: "35ch",
              }}
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <FormControl variant="standard">
                <InputLabel shrink>Project Name</InputLabel>
                <TextField id="project" name="projectname" type="text" variant="outlined" multiline value={formProject.projectname} onChange={handleChange} autoFocus />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Placement Address</InputLabel>
                <TextField id="project" name="placement" type="text" variant="outlined" multiline value={formProject.placement} onChange={handleChange} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Start Date</InputLabel>
                <TextField id="date" name="speriode" type="date" variant="outlined" size="small" value={formProject.speriode} onChange={handleChange} style={{ marginTop: "25px" }} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>End Date</InputLabel>
                <TextField id="date" name="eperiode" type="date" variant="outlined" size="small" value={formProject.eperiode} onChange={handleChange} style={{ marginTop: "25px" }} />
              </FormControl>

              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button variant="contained" onClick={closeHandler}>
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </CardContent>
        </Stack>
      </Card>
    </>
  );
}

export default AddProject;
