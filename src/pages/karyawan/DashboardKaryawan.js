import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import {
  Box,
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';

import DashboardNavbar from '../../layout/dashboardNavbar';
import DashboardSidebar from '../../layout/dashboardSidebar';


// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

// ----------------------------------------------------------------------

export default function DashboardKaryawan() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
        <Typography variant="h4" gutterBottom>
          Timesheet
        </Typography>
        </Stack>
        <Card>
          <Box sx={{ minWidth: 1050 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    Date
                  </TableCell>
                  <TableCell>
                    Working Hour
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                <TableCell>
                  01/01/22
                </TableCell>
                <TableCell>
                  09:00-10:00
                </TableCell>
              </TableBody>
            </Table>
          </Box>
        </Card>
      
      </MainStyle>
    </RootStyle>
  );
}
