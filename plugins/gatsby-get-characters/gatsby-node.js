// constants for your GraphQL Character and Author types
const fetch = require("node-fetch");
const CHARACTER_NODE_TYPE = `Character`;

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions;

  const characters = await fetch("https://rickandmortyapi.com/api/character");
  const charactersJSON = await characters.json();

  // loop through data and create Gatsby nodes
  charactersJSON.results.forEach((character) =>
    createNode({
      ...character,
      id: createNodeId(`${CHARACTER_NODE_TYPE}-${character.id}`),
      parent: null,
      children: [],
      internal: {
        type: CHARACTER_NODE_TYPE,
        contentDigest: createContentDigest(character),
      },
    })
  );
};
