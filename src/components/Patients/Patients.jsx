import React, { useState, useEffect } from "react";
import {
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  TableCell,
} from "@material-ui/core";
import classNames from 'classnames';
import './Patients.scss';
import * as patients from '../../services/patients';
import { toast } from "react-toastify";

const Patients = () => {

    const [data, setData] = useState([]);

    

    useEffect(() => {
      patients.getAll()
        .then((response) => setData(response.data))
        .catch(err => toast.error(err.response.data.message));
    }, [])


    

    return (
        <div className="d-flex flex-column align-items-center"> 
            <h3>Patients</h3>
            <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Médecin traitant</TableCell>
                <TableCell align="left">Statut paiement</TableCell>
                <TableCell align="left">N° sécu</TableCell>
                <TableCell align="left">Date de naissance</TableCell>
                <TableCell align="left">Groupe sanguin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="left">
                    {row.utilisateur.name}
                  </TableCell>
                  <TableCell align="center">
                      <span className={classNames('fas', row.statutPaiement ? 'green fa-check' : 'red fa-times')} />
                    </TableCell>
                  <TableCell align="left">{row.numeroSecu}</TableCell>
                  <TableCell align="left">{row.dateNaissance}</TableCell>
                  <TableCell align="left">{row.groupeSanguin}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
    )
};

export default Patients;