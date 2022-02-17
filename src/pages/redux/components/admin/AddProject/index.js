import React, { useState, useEffect } from "react";
import { Box, Card, Button, CardContent, FormControl, Grid, InputLabel, MenuItem, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { addProject, getListProject, updateProject, openModal } from "../../../actions/admin/projectActions";

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
    project_name: "",
    placement_address: "",
    start_date: "",
    end_date: "",
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
          project_name: formProject.project_name,
          placement_address: formProject.placement_address,
          start_date: formProject.start_date,
          end_date: formProject.end_date,
        })
      );
      dispatch(openModal(false));
    }
    // saat tidak ada id maka add timesheet
    else {
      // add timesheet
      dispatch(
        addProject({
          project_name: formProject.project_name,
          placement_address: formProject.placement_address,
          start_date: formProject.start_date,
          end_date: formProject.end_date,
        })
      );
      dispatch(openModal(false));
    }
  };

  useEffect(() => {
    if (addProjectResult) {
      // console.log('6. Masuk komponen did update')
      dispatch(getListProject());
      setFormProject({
        project_name: "",
        placement_address: "",
        start_date: "",
        end_date: "",
      });
    }
  }, [addProjectResult, dispatch]);

  useEffect(() => {
    if (detailProjectResult) {
      // console.log('6. Masuk komponen did update')
      // dispatch(getListKontak())
      setFormProject({
        id: detailProjectResult.id,
        project_name: detailProjectResult.project_name,
        placement_address: detailProjectResult.placement_address,
        start_date: detailProjectResult.start_date,
        end_date: detailProjectResult.end_date,
      });
    }
  }, [detailProjectResult, dispatch]);

  useEffect(() => {
    if (updateProjectResult) {
      // console.log('6. Masuk komponen did update')
      dispatch(getListProject());
      setFormProject({
        project_name: "",
        placement_address: "",
        start_date: "",
        end_date: "",
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
                <TextField id="project" name="project_name" type="text" variant="outlined" multiline value={formProject.project_name} onChange={handleChange} autoFocus style={{ marginTop: "25px" }} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Placement Address</InputLabel>
                <TextField id="project" name="placement_address" type="text" variant="outlined" multiline value={formProject.placement_address} onChange={handleChange} style={{ marginTop: "25px" }} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Start Date</InputLabel>
                <TextField id="date" name="start_date" type="date" variant="outlined" size="small" value={formProject.start_date} onChange={handleChange} style={{ marginTop: "25px" }} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>End Date</InputLabel>
                <TextField id="date" name="end_date" type="date" variant="outlined" size="small" value={formProject.end_date} onChange={handleChange} style={{ marginTop: "25px" }} />
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
