import styled from "styled-components";

import { useRecoilValue, useRecoilState } from "recoil";
import { isKakaoInitState } from "@states/contents";

import useContentDetail from "@hooks/useContentDetail";

import ShareBtn from "../atoms/ShareBtn";

const ShareBox = () => {
  const { data } = useContentDetail();
  const url = "http://www.naver.com"; // 배포한 뒤 수정 필요
  const encodedUrl = encodeURI(encodeURIComponent(url));
  const [isKakaoInit, setIsKakaoInit] = useRecoilState(isKakaoInitState);
  const naverBlogReqUrl =
    "https://share.naver.com/web/shareView.nhn?url=" +
    encodedUrl +
    "&title=" +
    `[FADE-IN] ${data.title}`;

  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const shareKakao = () => {
    if (!isKakaoInit) {
      //@ts-ignore
      Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
      setIsKakaoInit(true);
    }

    //@ts-ignore
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: data.title,
        description: data.overview || "",
        imageUrl: data.poster,
        link: {
          webUrl: "http://localhost:3000",
        },
      },
      buttons: [
        {
          title: "웹으로 이동",
          link: {
            webUrl: "http://localhost:3000",
          },
        },
      ],
      installTalk: true,
    });
  };

  const shareNaverBlog = () => window.open(naverBlogReqUrl);

  return (
    <Box>
      <h3 className="title">공유하기</h3>
      <div className="boxContainer">
        <ShareBtn
          imgUrl="/assets/images/copy_url_icon.svg"
          handleClick={copyUrl}
        >
          링크 복사
        </ShareBtn>
        <ShareBtn
          imgUrl="/assets/images/kakao_icon.svg"
          handleClick={shareKakao}
        >
          카카오톡
        </ShareBtn>
        <ShareBtn
          imgUrl="/assets/images/naver_blog_icon.svg"
          handleClick={shareNaverBlog}
        >
          네이버 블로그
        </ShareBtn>
      </div>
    </Box>
  );
};

export default ShareBox;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.5rem;

  .title {
    font-size: 1.8rem;
  }

  .boxContainer {
    display: flex;
    width: 100%;
    gap: 1rem;
  }
`;