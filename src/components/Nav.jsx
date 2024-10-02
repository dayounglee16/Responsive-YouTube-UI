import styled from "styled-components";

const Nav = () => {
  return (
    <NavWrap className="nav_wrap">
      <li className="nav_item">
        <button className="nav_icon"></button>
        <span className="nav_menu">홈</span>
      </li>
      <li className="nav_item">
        <button className="nav_icon"></button>
        <span className="nav_menu">Shorts</span>
      </li>
      <li className="nav_item">
        <button className="nav_icon"></button>
        <span className="nav_menu">구독</span>
      </li>
    </NavWrap>
  );
};

export default Nav;

const NavWrap = styled.div`
  width: 13vw;
  height: 100vh;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 10;

  .nav_item {
    max-width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 15px;
    align-items: center;
    cursor: pointer;
    border-radius: 10px;

    .nav_icon {
      width: 32px;
      height: 32px;
      border-radius: 15%;
      background-color: #666;
    }

    .nav_menu {
      width: calc(100% - 40px);
      text-align: center;
      color: #333;
    }
  }
  .nav_item:hover {
    background-color: #ccc;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 67px;

    .nav_menu {
      display: none;
    }
  }
  @media screen and (max-width: 599px) {
    display: none;
  }
`;
