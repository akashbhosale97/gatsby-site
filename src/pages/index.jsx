import { graphql } from "gatsby";
import * as React from "react";
import Card from "../components/card";
import '../styles/index.css'

export const query = graphql`query MyQuery {
  allCharacter {
    totalCount
    nodes {
      name
      url
      image
      gender
      species
      status
      id
      type
    }
  }
}`


const IndexPage = ({ data }) => {
  const { allCharacter: { nodes } } = data
  return (
    <>
      <div className="main_wrapper">
        {
          nodes.map((character) => <Card name={character.name} img={character.image} key={character.id} />)
        }
      </div>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
