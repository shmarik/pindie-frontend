import {data} from "./data"

export const getGamesByCategory = (category) => {
    return data.filter((game) => {
      return game.category.find((item) => {
        return item.name === category;
      });
    });
  }

  export const getGameById = (id) => {
    return data.find((game) => game.id === Number(id));
  }

  export const checkIfUserVoted = (game, userId) => {
    return game.users.find((user) => user.id === userId);
  };