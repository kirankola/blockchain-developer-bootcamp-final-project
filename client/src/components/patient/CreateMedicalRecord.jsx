import { useState, useEffect, memo } from "react";
import { useNotifications } from "@usedapp/core";

import { useCreateMedicalRecord } from "../../hooks/useCreateMedicalRecord";

import {
  Button,
  Input,
  Select,
  MenuItem,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";

import Alert from "@material-ui/lab/Alert";
export const CreateMedicalRecord = () => {
  const { createMedicalRecord, createMedicalRecordState } =
    useCreateMedicalRecord();
  const { notifications } = useNotifications();

  const [ipfsHash, setIpfsHash] = useState(0);
  const [price, setPrice] = useState("0");
  const [medicalRecordType, setMedicalRecordType] = useState("Scan");

  const [showCreateSuccess, setShowCreateSuccess] = useState(false);

  const handleCloseSnack = () => {
    showCreateSuccess && setShowCreateSuccess(false);
  };

  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "create medical record"
      ).length > 0
    ) {
      !showCreateSuccess && setShowCreateSuccess(true);
    }
  }, [notifications, showCreateSuccess]);

  const isMining = createMedicalRecordState.status === "Mining";

  const handleMedicalRecordChange = (event) => {
    setMedicalRecordType(event.target.value);
  };
  const handleIPFSHASHChange = (event) => {
    setIpfsHash(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const submitCreate = () => {
    return createMedicalRecord(ipfsHash, medicalRecordType, price);
  };
  return (
    <>
      <Select
        value={medicalRecordType}
        label="Medical Record Type"
        onChange={handleMedicalRecordChange}
      >
        <MenuItem value={"Scan"}>Scan</MenuItem>
        <MenuItem value={"Blood Report"}>Blood Report</MenuItem>
        <MenuItem value={"Urine Report"}>Urine Report</MenuItem>
      </Select>

      <Input placeholder="enter IPFSHASH" onChange={handleIPFSHASHChange} />
      <Input
        placeholder="enter your price in ether"
        onChange={handlePriceChange}
      />
      <Button color="primary" size="large" onClick={submitCreate}>
        {isMining ? <CircularProgress size={26} /> : "Submit"}
      </Button>

      <Snackbar
        open={showCreateSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
          {`Successfully created  `}
        </Alert>
      </Snackbar>
    </>
  );
};
