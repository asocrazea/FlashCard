import React from "react";
import { Route, Switch, useRouteMatch, useEffect } from "react-router-dom";
import { listDecks } from "../utils/api";
function DeckList() {
  const [decks, setDecks] = useState();
  useEffect(() => {
    async function getDecks() {
      const dataFromAPI = await listDecks();
      setDecks(dataFromAPI);
    }
    getDecks();
  }, []);
  return (
    <Switch>
      <Route exact Path=""></Route>
    </Switch>
  );
}
export default DeckList;
