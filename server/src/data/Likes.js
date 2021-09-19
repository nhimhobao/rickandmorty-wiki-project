import DataStore from "nedb-promises";

const Likes =  new DataStore({ filename: "data/likes.db", autoload: true })
export default Likes