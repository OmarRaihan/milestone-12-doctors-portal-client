import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, index, setDeletingDoctor, refetch }) => {
  const { name, specialty, image, email } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="w-16 rounded">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialty}</td>
      <td>
        <label onClick={() => setDeletingDoctor(doctor)} htmlFor="delete-modal" className="btn btn-xs btn-error">
          Delete
        </label>
      </td>
    </tr>
  );
};

export default DoctorRow;
