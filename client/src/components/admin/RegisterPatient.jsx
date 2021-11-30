import { useState, useEffect } from "react";
import { useNotifications } from "@usedapp/core";

import { useRegisterPatient } from "../../hooks/useRegisterPatient";
import {
  Button,
  Input,
  Select,
  MenuItem,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
export const RegisterPatient = () => {
  const { registerPatient, registerPatientState } = useRegisterPatient();
  const { notifications } = useNotifications();

  const [gender, setGender] = useState(0);
  const [ageRange, setAgeRange] = useState("1-5");
  const [address, setAddress] = useState();
  const [region, setRegion] = useState();
  const ageRanges = [
    "1-5",
    "6-10",
    "11-15",
    "16-20",
    "21-25",
    "26-30",
    "31-35",
    "36-40",
    "41-45",
    "46-50",
    "51-55",
    "56-60",
    "61-65",
    "66-70",
    "71-75",
    "76-80",
    "81-85",
    "86-90",
    "91-95",
    "96-100",
    "Above 100",
  ];
  const [showRegisterSuccess, setShowRegisterSuccess] = useState(false);

  const handleCloseSnack = () => {
    showRegisterSuccess && setShowRegisterSuccess(false);
  };

  useEffect(() => {
    if (
      notifications.filter(
        (notification) =>
          notification.type === "transactionSucceed" &&
          notification.transactionName === "register Patient"
      ).length > 0
    ) {
      !showRegisterSuccess && setShowRegisterSuccess(true);
    }
  }, [notifications, showRegisterSuccess]);

  const isMining = registerPatientState.status === "Mining";

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  const handleAgeRangeChange = (event) => {
    setAgeRange(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };
  const submitRegisterPatient = () => {
    return registerPatient(address, region, ageRange, gender);
  };
  return (
    <>
      <Select value={gender} label="Gender" onChange={handleGenderChange}>
        <MenuItem value={0}>Male</MenuItem>
        <MenuItem value={1}>Female</MenuItem>
        <MenuItem value={2}>Other</MenuItem>
      </Select>
      <Select value={ageRange} label="Age" onChange={handleAgeRangeChange}>
        {ageRanges.map((age) => {
          return <MenuItem value={age}>{age}</MenuItem>;
        })}
      </Select>
      <Input placeholder="City, State, Country" onChange={handleRegionChange} />
      <Input
        placeholder="Type patient address here..."
        onChange={handleAddressChange}
      />
      <Button color="primary" size="large" onClick={submitRegisterPatient}>
        {isMining ? <CircularProgress size={26} /> : "Submit"}
      </Button>

      <Snackbar
        open={showRegisterSuccess}
        autoHideDuration={5000}
        onClose={handleCloseSnack}
      >
        <Alert onClose={handleCloseSnack} severity="success">
          {`Successfully registered patient ${address}`}
        </Alert>
      </Snackbar>
    </>
  );
};
