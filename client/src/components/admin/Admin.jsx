import { Box, Tab } from "@material-ui/core";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { Typography, makeStyles } from "@material-ui/core";
import { RegisterPatient } from "./RegisterPatient";
import { RegisterRequester } from "./RegisterRequester";
const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-grid",
    gridTemplateColumns: "auto auto auto",
    gap: theme.spacing(1),
    alignItems: "center",
  },
}));

export const Admin = () => {
  const classes = useStyles();
  const registrations = ["patient", "requester"];
  const [selectedRegistration, setSelectedRegistration] = useState(
    registrations[0]
  );
  const handleAdminChange = (event, newValue) => {
    setSelectedRegistration(newValue);
  };
  return (
    <Box>
      <TabContext value={selectedRegistration}>
        <TabList onChange={handleAdminChange} aria-label="Admin Manager">
          <Tab
            label={"Patient Registrations"}
            value={registrations[0]}
            key={registrations[0]}
          />

          <Tab
            label={"Requester Registrations"}
            value={registrations[1]}
            key={registrations[1]}
          />
        </TabList>
        <TabPanel value={registrations[0]} key={registrations[0]}>
          <div className={classes.container}>
            <RegisterPatient />
          </div>
        </TabPanel>
        <TabPanel value={registrations[1]} key={registrations[1]}>
          <div className={classes.container}>
            <RegisterRequester />
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
};
