import styled from "styled-components";
import Image from "next/image";

import { IInfo } from "@typings/info";

interface IProps {
  info: IInfo;
}

type TitlePropsType = {
  isDigit?: boolean;
};

function InfoCard({ info }: IProps) {
  return (
    <Container>
      <CardFront>
        <ImageWrap>
          <Image
            src="/assets/images/poster_img.jpg"
            layout="fill"
            alt="posterImg"
          />
        </ImageWrap>
      </CardFront>
      <CardBack>
        <h3 className="backTitle">{info.title}</h3>
        <span className="genres">{info.genres.join(", ")}</span>
        <p className="overview">{info.overview}</p>
      </CardBack>
      <InfoBox>
        <div className="rank">{info.rank}</div>
        <Title isDigit={info.rank && info.rank < 10 ? true : false}>
          {info.title}
        </Title>
      </InfoBox>
    </Container>
  );
}

export default InfoCard;

const CardBack = styled.div`
  opacity: 0;
  position: absolute;
  width: 17.5rem;
  height: 25rem;
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  z-index: 1;
  border-radius: 5px;
  padding: 2rem 1.8rem;

  .backTitle {
    color: #ffffff;
    font-size: 1.8rem;
    line-height: 1.2;
    margin-bottom: 0.7rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .genres {
    display: inline-block;
    color: #c3c3c3;
    font-size: 1.4rem;
    margin-bottom: 1.8rem;
  }

  .overview {
    color: #a4a4a4;
    font-size: 1.2rem;
    line-height: 1.4;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    word-wrap: break-word;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const CardFront = styled.div`
  width: 17.5rem;
  height: 25rem;
`;

const Container = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ${CardBack} {
      opacity: 1;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
`;

const InfoBox = styled.div`
  display: flex;

  .rank {
    color: #f1f1f1;
    font-size: 5rem;
    font-weight: bold;
    margin: -2.3rem 1rem 0 0.2rem;
    z-index: 3;
    text-shadow: 5px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Title = styled.span<TitlePropsType>`
  font-size: 1.5rem;
  color: #bbbbbb;
  margin-top: 1rem;
  width: ${(props) => (props.isDigit ? "12.5rem" : "10rem")};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;