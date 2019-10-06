import React from "react";
import styled from "@emotion/styled";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

import cardsData from "./cards.json";

const StyledHomePage = styled.section`
  display: flex;
  flex-direction: row;
  aside {
    flex: 0 0 60px;
    max-width: 60px;
    min-width: 60px;
    width: 60px;
    position: relative;
    min-height: 100vh;
  }

  section.main {
    background: ${props => props.theme.colors.gray["50"]};
    padding-bottom: 2rem;
    main {
      padding: 4rem 5rem;

      .cards-container {
        display: flex;
        flex-wrap: wrap;

        div.card {
          width: 32%;
          margin-right: 2%;
          margin-bottom: 2%;

          &:nth-of-type(3n) {
            margin-right: 0;
          }
        }

        @media (max-width: 1000px) {
          div.card {
            width: 48%;
            margin-right: 2%;
            margin-bottom: 2%;

            &:nth-of-type(3n) {
              margin-right: 0;
            }
          }
        }
        @media (max-width: 700px) {
          div.card {
            width: 100%;
          }
        }
      }
    }
  }
`;

const CardList = props =>
  props.cards.map(card => <Card key={card.id} {...card} />);

const HomePage = () => {
  return (
    <StyledHomePage>
      <aside>
        <Sidebar />
      </aside>

      <section className="main">
        <Header />
        <main>
          <Hero />
          <div className="cards-container">
            <CardList cards={cardsData} />
          </div>
        </main>
        <Footer />
      </section>
    </StyledHomePage>
  );
};

export default HomePage;
