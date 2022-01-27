import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProject, openModal, detailProject } from "../../../actions/admin/projectActions";
import { AddProject } from "../..";
import AddIcon from "@mui/icons-material/Add";

import { Box, Button, Card, Modal, Stack, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, Typography } from "@mui/material";

function ListProject() {
  const openHandler = (e) => {
    e.preventDefault();
    dispatch(openModal(true));
  };

  const { getListProjectResult, getListProjectLoading, getListProjectError, openModalResult } = useSelector((state) => state.ProjectReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // panggil action getlisttimesheet
    console.log("1. use effect component did mount");
    dispatch(getListProject());
  }, [dispatch]);

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
        <Typography variant="h4" gutterBottom>
          Project
        </Typography>
        <Button variant="contained" onClick={openHandler}>
          New Project
          <AddIcon />
        </Button>
      </Stack>

      <Modal open={openModalResult} style={{ marginTop: "20px", marginLeft: "500px" }}>
        <div>
          {/* <Button onClick={closeHandler}><CloseIcon/></Button> */}
          <AddProject />
        </div>
      </Modal>

      <Card style={{ display: "flex" }}>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell>Placement Address</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>End Date</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {getListProjectResult ? (
                getListProjectResult.map((p) => {
                  return (
                    <TableRow key={p.id}>
                      <TableCell>{p.projectname}</TableCell>
                      <TableCell>{p.placement}</TableCell>
                      <TableCell>{p.speriode}</TableCell>
                      <TableCell>{p.eperiode}</TableCell>
                      <TableCell>
                        <Button
                          type="button"
                          onClick={(e) => {
                            openHandler(e);
                            dispatch(detailProject(p));
                          }}
                        >
                          Edit
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : getListProjectLoading ? (
                <TableRow>
                  <TableCell>Loading...</TableCell>
                </TableRow>
              ) : (
                <TableRow>
                  <TableCell>{getListProjectError ? getListProjectError : "Data Kosong"}</TableCell>
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

export default ListProject;
