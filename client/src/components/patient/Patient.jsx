import { Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";
import { CreateMedicalRecord } from "./CreateMedicalRecord";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "inline-grid",
    gridTemplateColumns: "auto auto auto",
    gap: theme.spacing(1),
    alignItems: "center",
  },
}));

export const Patient = () => {
  const classes = useStyles();

  return (
    <Box>
      <h3>Create Medical Record </h3>

      <div className={classes.container}>
        <CreateMedicalRecord />
      </div>
    </Box>
  );
};
