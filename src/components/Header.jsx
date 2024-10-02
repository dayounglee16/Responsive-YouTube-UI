import styled from "styled-components";

const Header = () => {
  return (
    <HeaderWrap className="header_wrap">
      <HeaderLeft className="header_left">
        <div className="header_icon">&#9776;</div>
        <h4 className="header_logo">YOUTUE</h4>
      </HeaderLeft>
      <HeaderCenter className="header_center">
        <form>
          <input
            className="header_input"
            type="text"
            placeholder="검색어를 입력해주세요"
          />
          <button className="header_serarch">검색</button>
        </form>
      </HeaderCenter>
      <HeaderRight className="header_right">
        <div className="header_right_search">🔍</div>
        <div className="header_right_profill"></div>
      </HeaderRight>
    </HeaderWrap>
  );
};

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  height: 60px;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  border-bottom: 1px solid #eee;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  background-color: #fff;
`;

const HeaderLeft = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.5rem;

  .header_icon {
    cursor: pointer;
  }

  .header_logo {
    cursor: pointer;
  }
`;

const HeaderCenter = styled.div`
  width: 45%;
  padding: 10px 0;

  form {
    max-width: 100%;
    display: flex;

    .header_input {
      width: calc(100% - 60px);
      height: 40px;
      padding: 0 20px;
      outline: none;
      border: none;
      border: 1px solid #ccc;
      border-radius: 30px 0px 0px 30px;
    }
    .header_serarch {
      width: 60px;
      height: 40px;
      padding: 0 6px;
      border: 1px solid #ccc;
      border-left: none;
      border-radius: 0 30px 30px 0;
    }

    @media screen and (max-width: 1281px) {
      display: none;
    }
  }
`;

const HeaderRight = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;

  .header_right_search {
    font-size: 1.8rem;
    cursor: pointer;
    display: none;
  }

  .header_right_profill {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #333;
  }

  @media screen and (max-width: 1281px) {
    .header_right_search {
      display: block;
    }
  }
`;
