import axios from "axios";
import Promise from "bluebird";
import Characters from "../data/Characters";

async function insertUpdateCharacter(character) {
  const found = await Characters.findOne({ id: character.id });
  if (!found) {
    return Characters.insert(character);
  }
}
async function getPageCount() {
  const resp = await axios.get("https://rickandmortyapi.com/api/character");
  return resp.data.info.pages;
}
export async function syncCharacters() {
  const pageCount = await getPageCount();
  await Promise.mapSeries(Array(pageCount), async (_, index) => {
    const resp = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${index + 1}`
    );
    const results = resp.data.results;
    return Promise.mapSeries(results, insertUpdateCharacter);
  });
}

export async function getCharacters(page = 1, limit = 20) {
  const offset = (page - 1) * limit;
  const total = await Characters.count({});
  const characters = await Characters.find({})
    .sort({ id: 1 })
    .skip(offset)
    .limit(limit);
  return { characters, page, hasMore: offset + limit < total };
}
