import React, { useEffect, useState } from "react";
import listDecks from "../utils/api/index";
function DeckList() {
  //   const list = listDecks.map(({ name, description }, index) => (
  //     <tr key={index}>
  //       <td>{name}</td>
  //       <td>{description}</td>
  //     </tr>
  //   ));

  return (
    <div>
      <table>
        <thread>
          <tr>Deck List test page</tr>
        </thread>
        <tbody>{}</tbody>
      </table>
    </div>
  );
}
export default DeckList;

// const list = DeckList.map(({ name, description }, index) => (
//     <tr key={index}>
//       <td>{name}</td>
//       <td>{description}</td>
//     </tr>
//   ));

//   return (
//     <table>
//       <thread>
//         <tr>Deck List</tr>
//       </thread>
//       <tbody>{list}</tbody>
//     </table>
//   );
