import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';
const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
  tablecol:{
      width: '15%'
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
class PrintData extends Component {
  state={
    result:[]
  }
  componentDidMount(){
    axios.post(`http://localhost:1234/fetch`)
      .then(res => {
         this.setState({
           result: res && res.data.result
         })
      })
  }
    render(){
        const { classes} = this.props;
        const {result }=this.state
        return (
            <Paper className={classes.root}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell className={classes.tablecol} align="center">Ind_aggregation</TableCell>
                    <TableCell className={classes.tablecol} align="center">Ind_code</TableCell>
                    <TableCell className={classes.tablecol} align="center">Ind_name</TableCell>
                    <TableCell className={classes.tablecol} align="center">Units</TableCell>
                    <TableCell className={classes.tablecol} align="center">value</TableCell>
                    <TableCell className={classes.tablecol} align="center">Year</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {result && result.map((row,index) => (
                    <TableRow key={index}>
                        <TableCell className={classes.tablecol} align="center">{row.Industry_aggregation_NZSIOC}</TableCell>
                        <TableCell className={classes.tablecol} align="center">{row.Industry_code_ANZSIC06}</TableCell>
                        <TableCell className={classes.tablecol} align="center">{row.Industry_name_NZSIOC}</TableCell>
                        <TableCell className={classes.tablecol} align="center">{row.Units}</TableCell>
                        <TableCell className={classes.tablecol} align="center">{row.Value}</TableCell>
                        <TableCell className={classes.tablecol} align="center">{row.Year}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </Paper>
        );
  }
}
export default withStyles(styles)(PrintData);
