import DataStore from "nedb-promises";

const Characters = new DataStore({
  filename: "data/characters.db",
  autoload: true,
});

export default Characters;
