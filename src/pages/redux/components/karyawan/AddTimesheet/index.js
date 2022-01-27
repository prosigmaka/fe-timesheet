import React, { useState, useEffect } from 'react';
import {Box, Card, Button, CardContent, FormControl, Grid, InputLabel,MenuItem, Stack, TextField, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import {makeStyles} from "@mui/styles";
import { useDispatch, useSelector } from 'react-redux';
import {addTimesheet, getListTimesheet, updateTimesheet, openModal} from '../../../actions/karyawan/timesheetAction';




const useStyles = makeStyles((theme) => ({
    card: {
        height: '100%',
        display: 'flex',
        width: '400px',
        flexDirection: 'column',
        marginTop: '2px',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
        
    },
}));


const project_id = [
    {
      value: 1,
      label: 'Project 1',
    },
    {
      value: 2,
      label: 'Project 2',
    },
    {
      value: 3,
      label: 'Project 3',
    },
  ];


const status_id = [
    {
      value: 1,
      label: 'Bekerja',
    },
    {
      value: 2,
      label: 'Cuti',
    },
    {
      value: 3,
      label: 'Sakit',
    },
    {
        value: 4,
        label: 'Izin',
    },
  ];




function AddTimesheet() {
    const classes = useStyles();

    const dispatch = useDispatch();

    const {addTimesheetResult, detailTimesheetResult, updateTimesheetResult, openModalResult} = useSelector((state) => state.TimesheetReducer);

    const [formData, setFormData] = useState({
        id:"",
        project_id: "",
        date: "",
        status_id: "",
        working_start: "00:00",
        working_end: "00:00",
        overtime_start: "00:00",
        overtime_end: "00:00",
        activity: ""
    });

    const handleChange = e => {
        let data = {...formData};
        data[e.target.name] = e.target.value;
        console.log(data)
        setFormData(data)
    }


    const closeHandler = e => {
        e.preventDefault();
        dispatch(openModal(false))
        setFormData({
            project_id: "",
            date: "",
            status_id: "",
            working_start: "00:00",
            working_end: "00:00",
            overtime_start: "00:00",
            overtime_end: "00:00",
            activity: ""
        })
        // setOpen(false)
        
    }

    

    const handleSubmit = e => {
        e.preventDefault();

        // saat ada id update timesheet
        if(formData.id){
            // update kontak
            dispatch(updateTimesheet({
                id: formData.id,
                project_id: formData.project_id,
                date: formData.date,
                status_id: formData.status_id,
                working_start: formData.working_start,
                working_end: formData.working_end,
                overtime_start: formData.overtime_start,
                overtime_end: formData.overtime_end,
                activity: formData.activity,
            }))
            
        }
        // saat tidak ada id maka add timesheet
        else{
            // add timesheet
            dispatch(addTimesheet({
                project_id: formData.project_id,
                date: formData.date,
                status_id: formData.status_id,
                working_start: formData.working_start,
                working_end: formData.working_end,
                overtime_start: formData.overtime_start,
                overtime_end: formData.overtime_end,
                activity: formData.activity,
            }))
            
        }
    }

    


    useEffect(()=>{
        if (addTimesheetResult) {
            // console.log('6. Masuk komponen did update')
            dispatch(getListTimesheet())
            setFormData({
                project_id: "",
                date: "",
                status_id: "",
                working_start: "00:00",
                working_end: "00:00",
                overtime_start: "00:00",
                overtime_end: "00:00",
                activity: ""
            })
            
        }
    },[addTimesheetResult, dispatch])


    useEffect(()=>{
        if (detailTimesheetResult) {
            // console.log('6. Masuk komponen did update')
            // dispatch(getListKontak())
            setFormData({
                id: detailTimesheetResult.id,
                project_id: detailTimesheetResult.project_id,
                date: detailTimesheetResult.date,
                status_id: detailTimesheetResult.status_id,
                working_start: detailTimesheetResult.working_start,
                working_end: detailTimesheetResult.working_end,
                overtime_start: detailTimesheetResult.overtime_start,
                overtime_end: detailTimesheetResult.overtime_end,
                activity: detailTimesheetResult.activity
            })
            
        }
    },[detailTimesheetResult, dispatch])


    useEffect(()=>{
        if (updateTimesheetResult) {
            // console.log('6. Masuk komponen did update')
            dispatch(getListTimesheet())
            setFormData({
                project_id: "",
                date: "",
                status_id: "",
                working_start: "00:00",
                working_end: "00:00",
                overtime_start: "00:00",
                overtime_end: "00:00",
                activity: ""
            })
        }
    },[updateTimesheetResult, dispatch])


    // useEffect(()=>{
    //     if (openModalResult === false) {
    //         setFormData({
    //             project_id: "",
    //             date: "",
    //             status_id: "",
    //             working_start: "00:00",
    //             working_end: "00:00",
    //             overtime_start: "00:00",
    //             overtime_end: "00:00",
    //             activity: ""
    //         })
    //     }
    // })

    

    return(
        <>
                <Card className={classes.card}>
                <Stack
                    alignItems="center"
                >
                   <CardContent className={classes.cardContent} style={{textAlign:'center'}}>

                    <Typography 
                        gutterBottom 
                        component="div"  
                        style={{fontWeight:'bold', fontSize:'12pt', marginTop:'10px', marginBottom:'25px'}}
                    >
                        {formData.id? "Edit Activity" : "Add Activity"}
                    </Typography>
                    <Stack
                        component="form"
                        sx={{
                            width: '35ch',
                        }}
                        spacing={2}
                        noValidate
                        autoComplete="off"
                    >
                    <FormControl variant="standard">
                        <InputLabel shrink>
                            Project Name
                        </InputLabel>
                        <TextField
                            id="projectname"
                            select
                            size="small"
                            label="Select Project"
                            name="project_id"
                            value={formData.project_id}
                            onChange={handleChange}
                            style={{marginTop:'25px'}} 
                        >
                            {project_id.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                    
                    <FormControl variant="standard">
                        <InputLabel shrink>
                            Date
                        </InputLabel>
                        <TextField 
                            id="date" 
                            name="date" 
                            type="date" 
                            variant="outlined" 
                            size="small" 
                            value={formData.date} 
                            onChange={handleChange} 
                            style={{marginTop:'25px'}}
                        />
                    </FormControl>
                   
                    <FormControl variant="standard">
                        <InputLabel shrink>
                            Status
                        </InputLabel>
                        <TextField
                            id="status"
                            select
                            label="Select Status"
                            size="small"
                            name="status_id"
                            value={formData.status_id}
                            onChange={handleChange}
                            style={{marginTop:'25px'}}
                        >
                            {status_id.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                    
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
                        <FormControl variant="standard">
                            <InputLabel shrink>
                                Working Hour
                            </InputLabel>
                            <TextField 
                                id="startworkinghour" 
                                name="working_start" 
                                type="time"
                                label="Start" 
                                variant="outlined"
                                size='small' 
                                value={formData.working_start} 
                                onChange={handleChange}
                                style={{marginTop:'25px'}}
                            />
                        </FormControl>
                        <TextField 
                                id="endworkinghour"
                                name="working_end"
                                type="time" 
                                label="End" 
                                size='small' 
                                variant="outlined" 
                                value={formData.working_end} 
                                onChange={handleChange}
                                style={{marginTop:'25px'}}
                        />
                        
                    </Stack>


                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
                        <FormControl variant="standard">
                            <InputLabel shrink>
                                Overtime
                            </InputLabel>
                            <TextField 
                                id="startovertime" 
                                name="overtime_start" 
                                label='Start'
                                type="time" 
                                size='small' 
                                variant="outlined" 
                                value={formData.overtime_start} 
                                onChange={handleChange}
                                style={{marginTop:'25px'}}
                            />
                        </FormControl>
                        
                        <TextField 
                            id="endovertime" 
                            name="overtime_end" 
                            type="time"
                            label="End"
                            size='small' 
                            variant="outlined" 
                            value={formData.overtime_end} 
                            onChange={handleChange}
                            style={{marginTop:'25px'}}
                        />
                    </Stack>

                    <FormControl variant="standard">
                        <InputLabel shrink>
                            Activity
                        </InputLabel>
                        <TextField 
                            id="activity" 
                            name="activity" 
                            type="text" 
                            multiline 
                            value={formData.activity} 
                            onChange={handleChange}
                            style={{marginTop:'25px'}}
                        />
                    </FormControl>
                    
                    <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
                        <Button variant='contained' onClick={handleSubmit}>Submit</Button>
                        <Button variant='contained' onClick={closeHandler}>Cancel</Button>
                    </Stack>

                    </Stack>




                    </CardContent>



                </Stack>
                
            </Card>


            
        </>
    )
}

export default AddTimesheet;