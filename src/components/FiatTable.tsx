import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

const FiatTable = (props: { data; title }) => {
  const createDataRow = (x, p) => {
    return { x: x / 10, p };
  };
  const { data, title } = props;
  const rows: Array<{ x: number; p: number }> = [];

  for (let i = 1; i < 10; i++) {
    let value = data[i / 10];
    rows.push(createDataRow(i, value));
  }

  return (
    <div>
      <Typography
        sx={{ flex: "1 1 100%" }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
      <TableContainer component={Paper}>
        <Table
          // sx={{ height: 500 }}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>x</TableCell>
              <TableCell align="right">p</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.x}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.x}
                </TableCell>
                <TableCell align="right">{row.p}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default FiatTable;
