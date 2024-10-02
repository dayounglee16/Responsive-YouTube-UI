import styled from "styled-components";
import { datas } from "../datas";

const Thumbnail = () => {
  return (
    <ThumbnailWrap>
      {datas.mockData.map((data) => {
        return (
          <ThumbnaiItem key={data.id}>
            <div className="thumbnail"></div>
            <div className="thumbnail_info">
              <div className="thumbnail_profile"></div>
              <ul className="thumbnail_text">
                <li className="thumbnail_title">{data.title}</li>
                <li className="thumbnail_name">{data.name}</li>
                <li className="thumbnail_text_bottom">
                  <span className="thumbnail_viewCount">{data.viewCount}</span>
                  <span className="thumbnail_timeAgo">{data.timeAgo}</span>
                </li>
              </ul>
            </div>
          </ThumbnaiItem>
        );
      })}
    </ThumbnailWrap>
  );
};

export default Thumbnail;

const ThumbnailWrap = styled.div`
  width: calc(100% - 13vw);
  gap: 2%;
  margin: 80px 13vw;
  padding: 0 20px;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 1025px) and (max-width: 1300px) {
    margin: 80px 13vw;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    margin: 80px auto;
    padding: 0;
    width: 95%;
    padding-left: 67px;
  }
  @media screen and (max-width: 599px) {
    margin: 80px auto;
    justify-content: center;
    width: 98%;
  }
`;

const ThumbnaiItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.4%;

  .thumbnail {
    aspect-ratio: 16/9;
    background-color: #ccc;
    border-radius: 5px;
  }
  .thumbnail_info {
    margin: 20px 0 30px 0;
    display: flex;
    gap: 15px;

    .thumbnail_profile {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #999;
    }
    .thumbnail_title {
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    }
    .thumbnail_name {
      color: #777;
    }
    .thumbnail_text_bottom {
      font-size: 14px;
      color: #999;
      display: flex;
      gap: 5px;
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1300px) {
    width: 32%;
  }

  @media screen and (min-width: 600px) and (max-width: 1024px) {
    width: 49%;
  }
  @media screen and (max-width: 599px) {
    width: 100%;
  }
`;
