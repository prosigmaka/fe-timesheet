import React, { useState, useEffect } from "react";
import { Box, Card, Button, CardContent, FormControl, Grid, InputLabel, MenuItem, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { addTimesheet, getListTimesheet, updateTimesheet, openModal } from "../../actions/projectActions";

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

const status = [
  {
    value: "Bekerja",
    label: "Bekerja",
  },
  {
    value: "Cuti",
    label: "Cuti",
  },
  {
    value: "Sakit",
    label: "Sakit",
  },
];

function AddProject() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { addTimesheetResult, detailTimesheetResult, updateTimesheetResult } = useSelector((state) => state.TimesheetReducer);

  const [formData, setFormData] = useState({
    id: "",
    projectname: "",
    placement: "",
    sdate: "",
    edate: "",
  });

  const handleChange = (e) => {
    let data = { ...formData };
    data[e.target.name] = e.target.value;
    console.log(data);
    setFormData(data);
  };

  const closeHandler = (e) => {
    e.preventDefault();
    dispatch(openModal(false));
    // setOpen(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // saat ada id update timesheet
    if (formData.id) {
      // update kontak
      dispatch(
        updateTimesheet({
          id: formData.id,
          projectname: formData.projectname,
          placement: formData.placement,
          sdate: formData.date,
          edate: formData.edate,
        })
      );
    }
    // saat tidak ada id maka add timesheet
    else {
      // add timesheet
      dispatch(
        addTimesheet({
          projectname: formData.projectname,
          placement: formData.placement,
          sdate: formData.date,
          edate: formData.edate,
        })
      );
    }
  };

  useEffect(() => {
    if (addTimesheetResult) {
      // console.log('6. Masuk komponen did update')
      dispatch(getListTimesheet());
      setFormData({
        projectname: "",
        placement: "",
        sdate: "",
        edate: "",
      });
    }
  }, [addTimesheetResult, dispatch]);

  useEffect(() => {
    if (detailTimesheetResult) {
      // console.log('6. Masuk komponen did update')
      // dispatch(getListKontak())
      setFormData({
        id: detailTimesheetResult.id,
        projectname: detailTimesheetResult.projectname,
        date: detailTimesheetResult.date,
        status: detailTimesheetResult.status,
        startworkinghour: detailTimesheetResult.startworkinghour,
        endworkinghour: detailTimesheetResult.endworkinghour,
        startovertime: detailTimesheetResult.startovertime,
        endovertime: detailTimesheetResult.endovertime,
        activity: detailTimesheetResult.activity,
      });
    }
  }, [detailTimesheetResult, dispatch]);

  useEffect(() => {
    if (updateTimesheetResult) {
      // console.log('6. Masuk komponen did update')
      dispatch(getListTimesheet());
      setFormData({
        projectname: "",
        date: "",
        status: "",
        startworkinghour: "00:00",
        endworkinghour: "00:00",
        startovertime: "00:00",
        endovertime: "00:00",
        activity: "",
      });
    }
  }, [updateTimesheetResult, dispatch]);

  return (
    <>
      <Card className={classes.card}>
        <Stack alignItems="center">
          <CardContent className={classes.cardContent} style={{ textAlign: "center" }}>
            <Typography gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "12pt", marginTop: "10px", marginBottom: "25px" }}>
              {formData.id ? "Edit Project" : "Add Project"}
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
                <TextField id="activity" name="projectname" type="text" variant="outlined" multiline value={formData.projectname} onChange={handleChange} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Placement Addres</InputLabel>
                <TextField id="activity" name="projectname" type="text" variant="outlined" multiline value={formData.placement} onChange={handleChange} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Start Date</InputLabel>
                <TextField id="date" name="date" type="date" variant="outlined" size="small" value={formData.sdate} onChange={handleChange} style={{ marginTop: "25px" }} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>End Date</InputLabel>
                <TextField id="date" name="date" type="date" variant="outlined" size="small" value={formData.edate} onChange={handleChange} style={{ marginTop: "25px" }} />
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
