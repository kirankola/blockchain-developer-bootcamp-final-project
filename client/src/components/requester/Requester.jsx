import { useGetMedicalRecords } from "../../hooks/useGetMedicalRecords";
import { Box } from "@material-ui/core";
import { Record } from "./Record";
import { makeStyles } from "@material-ui/core";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-grid",
    gridTemplateColumns: "auto auto auto",
    gap: theme.spacing(1),
    alignItems: "center",
  },
}));

export const Requester = () => {
  const classes = useStyles();
  const records = useGetMedicalRecords();
  console.log(records);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>IPFSHash</TableCell>
            <TableCell>Record Type</TableCell>
            <TableCell>Patient</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records &&
            records.map((record) => {
              return <Record record={record} />;
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
