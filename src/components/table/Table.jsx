import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143,
      product: "Acer Nitro 5",
      img: "https://picsum.photos/200",
      customer: "mamad",
      date: "1 march",
      amount: 782,
      method: "cash on Delivery",
      status: "Approved",
    },
    {
      id: 1143,
      product: "Acer Nitro 5",
      img: "https://picsum.photos/200",
      customer: "mamad",
      date: "1 march",
      amount: 782,
      method: "cash on Delivery",
      status: "Approved",
    },
    {
      id: 1143,
      product: "Acer Nitro 5",
      img: "https://picsum.photos/200",
      customer: "mamad",
      date: "1 march",
      amount: 782,
      method: "cash on Delivery",
      status: "Pending",
    },
    {
      id: 2254,
      product: "Acer Nitro 5",
      img: "https://picsum.photos/200",
      customer: "mamad",
      date: "9 march",
      amount: 782,
      method: "cash on Delivery",
      status: "Pending",
    },
    {
      id: 6584,
      product: "Acer Nitro 5",
      img: "https://picsum.photos/200",
      customer: "mamad",
      date: "2 march",
      amount: 782,
      method: "cash on Delivery",
      status: "Approved",
    },
    {
      id: 7894,
      product: "Acer Nitro 5",
      img: "https://picsum.photos/200",
      customer: "mamad",
      date: "7 march",
      amount: 782,
      method: "cash on Delivery",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
