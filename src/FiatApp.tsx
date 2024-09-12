import {
  AppBar,
  Box,
  Button,
  Drawer,
  FormControl,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import * as React from "react";
import { FiatChart } from "./components/FiatCharts";
import FiatTable from "./components/FiatTable";
import MenuIcon from "@mui/icons-material/Menu";
import FiatAppBar from "./components/FiatAppBar";
import { getBeta } from "./data/api";

const FiatApp = () => {
  const [mean, setMean] = React.useState("");
  const [variance, setVariance] = React.useState("");
  const [betaData, setBetaData] = React.useState({});
  const [open, setOpen] = React.useState(false);
  const getBetaData = async () => {
    try {
      const response = await getBeta({
        mean: parseFloat(mean),
        variance: parseFloat(variance),
        p: 0.0,
      });
      // })
      setBetaData(response);
    } catch (error) {
      alert("Invalid Model Paremters");
      setBetaData({});
    } finally {
      setOpen(false)
    }
  };

  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FiatAppBar toggleDrawer={toggleDrawer}/>
      <Drawer open={open} onClose={toggleDrawer()} anchor="right">
          <Box
            component="form"
            sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
            noValidate
            autoComplete="off"
          >
            <FormControl>
            <TextField
              id="outlined-basic"
              label="Mean"
              variant="outlined"
              value={mean}
              onChange={(event) => {
                setMean(event.target.value);
              }}
            />
            <TextField
              id="filled-basic"
              label="Variance"
              variant="outlined"
              value={variance}
              onChange={(event) => {
                setVariance(event.target.value);
              }}
            />
            </FormControl>
          </Box>
            <Button variant="contained" onClick={getBetaData}>
              Apply
            </Button>
      </Drawer>
      <Grid container className="App">
        <Grid item xs={9}>
          <FiatChart title="Beta CDF" data={betaData} />
          {/* <FiatChart title="Lognormal CDF" data={logData} color="palevioletred" /> */}
          {/* <DoubleChart data1={betaData} data2={logData} /> */}
        </Grid>
        <Grid item xs={3}>
          <FiatTable data={betaData} title="Beta Table" />
          {/* <FiatTable data={logData} title="Lognormal Table"/> */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default FiatApp;
