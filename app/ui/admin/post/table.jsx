function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>License Plate</th>
          <th>Repair</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((data, index) => (
          <tr key={index}>
            <td>{data.license_plate}</td>
            <td>
              <ul>
                {data?.maintains?.map((repair, index) => (
                  <li key={index}>{repair.repair}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
