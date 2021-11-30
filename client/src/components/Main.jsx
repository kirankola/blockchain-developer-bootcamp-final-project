import { Admin } from "./admin/Admin";
import { Patient } from "./patient/Patient";
import { Requester } from "./requester/Requester";

import { Box, Tab } from "@material-ui/core";
import { useState } from "react";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
export const Main = () => {
  const tabs = ["admin", "patient", "requester"];
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const handleTapChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  return (
    <div>
      <Box>
        <TabContext value={selectedTab}>
          <TabList onChange={handleTapChange} aria-label="Admin Manager">
            <Tab label={"Admin Manager"} value={tabs[0]} key={tabs[0]} />

            <Tab label={"Patient Management"} value={tabs[1]} key={tabs[1]} />
            <Tab label={"Requester Management"} value={tabs[2]} key={tabs[2]} />
          </TabList>
          <TabPanel value={tabs[0]} key={tabs[0]}>
            <Admin />
          </TabPanel>
          <TabPanel value={tabs[1]} key={tabs[1]}>
            <Patient />
          </TabPanel>
          <TabPanel value={tabs[2]} key={tabs[2]}>
            <Requester />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
