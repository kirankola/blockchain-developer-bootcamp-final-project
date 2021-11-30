import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useNotifications } from "@usedapp/core";
import { makeStyles, CircularProgress, Snackbar } from "@material-ui/core";
import TableCell from "@mui/material/TableCell";
import { formatUnits } from "@ethersproject/units";
import TableRow from "@mui/material/TableRow";
import { useBuyMedicalRecord } from "../../hooks/useBuyMedicalRecord";
import Alert from "@material-ui/lab/Alert";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-grid",
    gridTemplateColumns: "auto auto auto",
    gap: theme.spacing(1),
    alignItems: "center",
  },
}));

export const Record = ({ record }) => {
  const [showBuySuccess, setShowBuySuccess] = useState(false);
  const classes = useStyles();
  const { notifications } = useNotifications();
  console.log(record.price);
  const { BuyMedicalRecord, BuyMedicalRecordState } = useBuyMedicalRecord();
  const handleBuy = () => {
    console.log(record.price.toString());
    return BuyMedicalRecord(record.id.toString(), record.price.toString());
  };
  const handleCloseSnack = () => {
    showBuySuccess && setShowBuySuccess(false);
  };

  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "buy Record"
      ).length > 0
    ) {
      !showBuySuccess && setShowBuySuccess(true);
    }
  }, [notifications, showBuySuccess]);
  const isMining = BuyMedicalRecordState.status === "Mining";
  return (
    <>
      <TableRow
        key={record.id}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {record.id.toString()}
        </TableCell>
        <TableCell>{record.IPFShash}</TableCell>
        <TableCell>{record.recordType}</TableCell>
        <TableCell>{record.patient}</TableCell>
        <TableCell>
          {parseFloat(formatUnits(record.price.toString(), 18))}
        </TableCell>
        <TableCell>
          <Button color="secondary" onClick={handleBuy}>
            {" "}
            {isMining ? <CircularProgress size={26} /> : "Buy Now"}
          </Button>{" "}
        </TableCell>
      </TableRow>

      <Snackbar
        open={showBuySuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
          {`Successfully Purchased  `}
        </Alert>
      </Snackbar>
    </>
  );
};
