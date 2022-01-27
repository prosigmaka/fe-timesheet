import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListEmployee, detailEmployee, openModal } from "../../../actions/admin/employeeAction";
import AddEmployee from "../AddEmployee";
import AddIcon from "@mui/icons-material/Add";

import { Box, Button, Card, Modal, Stack, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from "@mui/material";

function ListEmployee() {
  const openHandler = (e) => {
    e.preventDefault();
    dispatch(openModal(true));
    // setOpen(true)
  };

  const { getListEmployeeResult, getListEmployeeLoading, getListEmployeeError, openModalResult } = useSelector((state) => state.EmployeeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getlisttimesheet
    console.log("1. use effect component did mount");
    dispatch(getListEmployee());
  }, [dispatch]);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
        <Typography variant="h4" gutterBottom>
          Employee
        </Typography>
        <Button variant="contained" onClick={openHandler}>
          New Employee
          <AddIcon />
        </Button>
      </Stack>

      <Modal open={openModalResult} style={{ marginTop: "20px", marginLeft: "500px" }}>
        <div>
          {/* <Button onClick={closeHandler}><CloseIcon/></Button> */}
          <AddEmployee />
        </div>
      </Modal>

      <Card style={{ display: "flex" }}>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Employee Name</TableCell>
                <TableCell>Project Name</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getListEmployeeResult ? (
                getListEmployeeResult.map((p) => {
                  return (
                    <TableRow key={p.id}>
                      <TableCell>{p.employeename}</TableCell>
                      <TableCell>{p.projectname}</TableCell>
                      <TableCell>{p.sdate}</TableCell>
                      <TableCell>{p.edate}</TableCell>
                      <TableCell>
                        <Button
                          type="button"
                          onClick={(e) => {
                            openHandler(e);
                            dispatch(detailEmployee(p));
                          }}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : getListEmployeeLoading ? (
                <TableRow>
                  <TableCell>Loading...</TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell>{getListEmployeeError ? getListEmployeeError : "Data Kosong"}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>
      </Card>
    </>

    //   {/* <TablePagination
    //     component="div"

    //     onPageChange={handlePageChange}
    //     onRowsPerPageChange={handleLimitChange}
    //     page={page}
    //     rowsPerPage={limit}
    //     rowsPerPageOptions={[5, 10, 25]}
    //   />
    //  */}
  );
}

export default ListEmployee;
