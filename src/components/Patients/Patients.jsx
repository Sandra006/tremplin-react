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
import classNames from "classnames";
import "./Patients.scss";
import * as patients from "../../services/patients";
import { toast } from "react-toastify";

const Patients = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    patients
      .getAll()
      .then((response) => setData(response.data))
      .catch((err) => toast.error(err.response.data.message));
  }, []);

  return (
    <div className="d-flex flex-column align-items-center">
      <h3>Patients</h3>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Nom</TableCell>
              <TableCell align="center">Date de naissance</TableCell>
              <TableCell align="center">N° sécu</TableCell>
              <TableCell align="center">Groupe sanguin</TableCell>
              <TableCell align="center">Médecin traitant</TableCell>
              <TableCell align="center">Statut paiements</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.dateNaissance}</TableCell>
                <TableCell align="center">{row.numeroSecu}</TableCell>
                <TableCell align="center">
                  {row.groupeSanguin + row.rhesus}
                </TableCell>
                <TableCell align="center">{row.utilisateur.name}</TableCell>
                <TableCell align="center">
                  <span
                    className={classNames(
                      "fas",
                      row.statutPaiement ? "green fa-check" : "red fa-times"
                    )}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Patients;
