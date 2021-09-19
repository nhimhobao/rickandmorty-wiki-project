import Likes from "../data/Likes";
import _filter from "lodash/filter";
import Characters from "../data/Characters";

export async function insertUpdateLike({ email, characterId }) {
  const found = await Likes.findOne({ user: email, characterId });
  if (found) {
    return Likes.update(
      { id: found.id },
      {
        updated_date: Date.now(),
      }
    );
  } else {
    return Likes.insert({
      user: email,
      characterId,
      updated_date: Date.now(),
    });
  }
}

export async function getLikesByUser({ email }) {
  const likes = await Likes.find({ user: email });
  const likedCharacterIds = likes.map((l) => l.characterId);
  const allCharacters = await Characters.find();
  return _filter(allCharacters, (c) => likedCharacterIds.includes(c.id));
}

export async function checkLike({ email, characterId }) {
  const found = await Likes.find({ user: email, characterId });
  return found.length > 0;
}
