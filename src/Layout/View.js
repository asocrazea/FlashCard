import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api/index";

function View({}) {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  const rows = decks.map(({ name, description }, index) => (
    <tr key={index}>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  ));
  return (
    <div>
      <table>
        <thread>
          <tr>
            <th>Name</th>
            <th>description</th>
          </tr>
        </thread>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default View;
