import { useState, useEffect } from "react";
import { useNotifications } from "@usedapp/core";

import { useRegisterRequester } from "../../hooks/useRegisterRequester";
import {
  Button,
  Input,
  Select,
  MenuItem,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
export const RegisterRequester = () => {
  const { registerRequester, registerRequesterState } = useRegisterRequester();
  const { notifications } = useNotifications();

  const [type, setType] = useState(0);
  const [name, setName] = useState("");
  const [address, setAddress] = useState();
  const [region, setRegion] = useState();

  const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);

  const handleCloseSnack = () => {
    showRegisterSuccess && setShowRegisterSuccess(false);
  };

  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "register Requester"
      ).length > 0
    ) {
      !showRegisterSuccess && setShowRegisterSuccess(true);
    }
  }, [notifications, showRegisterSuccess]);

  const isMining = registerRequesterState.status === "Mining";

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const submitRegisterRequester = () => {
    return registerRequester(address, type, name, region);
  };
  return (
    <>
      <Select value={type} label="Requestor Type" onChange={handleTypeChange}>
        <MenuItem value={0}>Company</MenuItem>
        <MenuItem value={1}>Doctor</MenuItem>
        <MenuItem value={2}>Research Student</MenuItem>
      </Select>
      <Input
        placeholder="Enter requestor full name"
        onChange={handleNameChange}
      />

      <Input placeholder="City, State, Country" onChange={handleRegionChange} />
      <Input
        placeholder="Type requester address here..."
        onChange={handleAddressChange}
      />
      <Button color="primary" size="large" onClick={submitRegisterRequester}>
        {isMining ? <CircularProgress size={26} /> : "Submit"}
      </Button>

      <Snackbar
        open={showRegisterSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
          {`Successfully registered requester ${address}`}
        </Alert>
      </Snackbar>
    </>
  );
};
