import React, { useState, useEffect } from "react";
import { Box, Card, Button, CardContent, FormControl, Grid, InputLabel, MenuItem, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, getListEmployee, updateEmployee, openModal } from "../../actions/employeeAction";

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

function AddEmployee() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { addEmployeeResult, detailEmployeeResult, updateEmployeeResult } = useSelector((state) => state.TimesheetReducer);

  const [formData, setFormData] = useState({
    id: "",
    projectname: "",
    date: "",
    status: "",
    startworkinghour: "00:00",
    endworkinghour: "00:00",
    startovertime: "00:00",
    endovertime: "00:00",
    activity: "",
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

    // saat ada id update Employee
    if (formData.id) {
      // update kontak
      dispatch(
        updateEmployee({
          id: formData.id,
          projectname: formData.projectname,
          date: formData.date,
          status: formData.status,
          startworkinghour: formData.startworkinghour,
          endworkinghour: formData.endworkinghour,
          startovertime: formData.startovertime,
          endovertime: formData.startovertime,
          activity: formData.activity,
        })
      );
    }
    // saat tidak ada id maka add Employee
    else {
      // add Employee
      dispatch(
        addEmployee({
          projectname: formData.projectname,
          date: formData.date,
          status: formData.status,
          startworkinghour: formData.startworkinghour,
          endworkinghour: formData.endworkinghour,
          startovertime: formData.startovertime,
          endovertime: formData.startovertime,
          activity: formData.activity,
        })
      );
    }
  };

  useEffect(() => {
    if (addEmployeeResult) {
      // console.log('6. Masuk komponen did update')
      dispatch(getListEmployee());
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
  }, [addEmployeeResult, dispatch]);

  useEffect(() => {
    if (detailEmployeeResult) {
      // console.log('6. Masuk komponen did update')
      // dispatch(getListKontak())
      setFormData({
        id: detailEmployeeResult.id,
        projectname: detailEmployeeResult.projectname,
        date: detailEmployeeResult.date,
        status: detailEmployeeResult.status,
        startworkinghour: detailEmployeeResult.startworkinghour,
        endworkinghour: detailEmployeeResult.endworkinghour,
        startovertime: detailEmployeeResult.startovertime,
        endovertime: detailEmployeeResult.endovertime,
        activity: detailEmployeeResult.activity,
      });
    }
  }, [detailEmployeeResult, dispatch]);

  useEffect(() => {
    if (updateEmployeeResult) {
      // console.log('6. Masuk komponen did update')
      dispatch(getListEmployee());
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
  }, [updateEmployeeResult, dispatch]);

  return (
    <>
      <Card className={classes.card}>
        <Stack alignItems="center">
          <CardContent className={classes.cardContent} style={{ textAlign: "center" }}>
            <Typography gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "12pt", marginTop: "10px", marginBottom: "25px" }}>
              {formData.id ? "Edit Employee" : "Add Employee"}
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
                <InputLabel shrink>Employee Name</InputLabel>
                <TextField id="activity" name="activity" type="text" multiline value={formData.activity} onChange={handleChange} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Project Name</InputLabel>
                <TextField id="projectname" select size="small" label="Select Project" name="projectname" value={formData.projectname} onChange={handleChange} style={{ marginTop: "25px" }}>
                  {projectname.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Start Date</InputLabel>
                <TextField id="date" name="date" type="date" variant="outlined" size="small" value={formData.sdate} onChange={handleChange} style={{ marginTop: "25px" }} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Start Date</InputLabel>
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

export default AddEmployee;
