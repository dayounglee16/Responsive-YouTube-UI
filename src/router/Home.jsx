import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Thumbnail from "../components/Thumbnail";

const Home = () => {
  return (
    <HomeWrap>
      <Header />
      <Nav />
      <Thumbnail />
    </HomeWrap>
  );
};

export default Home;

const HomeWrap = styled.div`
  width: 100%;
`;
