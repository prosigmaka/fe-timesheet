import React, { useState, useEffect } from "react";
import { Box, Card, Button, CardContent, FormControl, Grid, InputLabel, MenuItem, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, getListEmployee, updateEmployee, openModal } from "../../../actions/admin/employeeAction";

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

function AddEmployee() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { addEmployeeResult, detailEmployeeResult, updateEmployeeResult } = useSelector((state) => state.ProjectReducer);

  const [employeeData, setEmployeeData] = useState({
    id: "",
    employeename: "",
    projectname: "",
    sdate: "",
    edate: "",
  });

  const handleChange = (e) => {
    let data = { ...employeeData };
    data[e.target.name] = e.target.value;
    console.log(data);
    setEmployeeData(data);
  };

  const closeHandler = (e) => {
    e.preventDefault();
    dispatch(openModal(false));
    // setOpen(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // saat ada id update Employee
    if (employeeData.id) {
      // update kontak
      dispatch(
        updateEmployee({
          id: employeeData.id,
          employeename: employeeData.employeename,
          projectname: employeeData.projectname,
          sdate: employeeData.sdate,
          edate: employeeData.edate,
        })
      );
    }
    // saat tidak ada id maka add Employee
    else {
      // add Employee
      dispatch(
        addEmployee({
          employeename: employeeData.employeename,
          projectname: employeeData.projectname,
          sdate: employeeData.sdate,
          edate: employeeData.edate,
        })
      );
    }
  };

  useEffect(() => {
    if (addEmployeeResult) {
      // console.log('6. Masuk komponen did update')
      dispatch(getListEmployee());
      setEmployeeData({
        employeename: "",
        projectname: "",
        sdate: "",
        edate: "",
      });
    }
  }, [addEmployeeResult, dispatch]);

  useEffect(() => {
    if (detailEmployeeResult) {
      // console.log('6. Masuk komponen did update')
      // dispatch(getListKontak())
      setEmployeeData({
        id: detailEmployeeResult.id,
        employeename: detailEmployeeResult.employeename,
        projectname: detailEmployeeResult.projectname,
        sdate: detailEmployeeResult.sdate,
        edate: detailEmployeeResult.edate,
      });
    }
  }, [detailEmployeeResult, dispatch]);

  useEffect(() => {
    if (updateEmployeeResult) {
      // console.log('6. Masuk komponen did update')
      dispatch(getListEmployee());
      setEmployeeData({
        employeename: "",
        projectname: "",
        sdate: "",
        edate: "",
      });
    }
  }, [updateEmployeeResult, dispatch]);

  return (
    <>
      <Card className={classes.card}>
        <Stack alignItems="center">
          <CardContent className={classes.cardContent} style={{ textAlign: "center" }}>
            <Typography gutterBottom component="div" style={{ fontWeight: "bold", fontSize: "12pt", marginTop: "10px", marginBottom: "25px" }}>
              {employeeData.id ? "Edit Employee" : "Add Employee"}
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
                <TextField id="employee" name="employeename" type="text" multiline value={employeeData.employeename} onChange={handleChange} style={{ marginTop: "25px" }} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Project Name</InputLabel>
                <TextField id="employee" select size="small" label="Select Project" name="projectname" value={employeeData.projectname} onChange={handleChange} style={{ marginTop: "25px" }}>
                  {projectname.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Start Date</InputLabel>
                <TextField id="sdate" name="sdate" type="date" variant="outlined" size="small" value={employeeData.sdate} onChange={handleChange} style={{ marginTop: "25px" }} />
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink>Start Date</InputLabel>
                <TextField id="edate" name="edate" type="date" variant="outlined" size="small" value={employeeData.edate} onChange={handleChange} style={{ marginTop: "25px" }} />
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
