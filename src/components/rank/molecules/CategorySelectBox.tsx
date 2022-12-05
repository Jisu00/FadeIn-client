import { useState } from "react";
import styled from "styled-components";
import ComboBox from "@components/common/ComboBox";

const genreMenuInfo = [
  "장르 전체",
  "드라마",
  "로맨스",
  "코미디",
  "액션",
  "애니메이션",
  "모험",
  "범죄",
  "다큐멘터리",
  "가족",
  "판타지",
  "역사",
  "공포",
  "음악",
  "미스터리",
  "SF",
  "TV영화",
  "스릴러",
  "전쟁",
  "서부",
  "액션&모험",
  "키즈",
  "뉴스",
  "리얼리티",
  "SF판타지",
  "연속극",
  "토크",
  "전쟁&정치",
];
const typeMenuInfo = ["분류 전체", "영화", "TV 프로그램"];

const CategorySelectBox = () => {
  const [selectedGenre, setSelectedGenre] = useState(genreMenuInfo[0]);
  const [selectedType, setSelectedType] = useState(typeMenuInfo[0]);

  return (
    <Box>
      <ComboBox
        info={genreMenuInfo}
        selectedMenu={selectedGenre}
        setSelectedMenu={setSelectedGenre}
      />
      <ComboBox
        info={typeMenuInfo}
        selectedMenu={selectedType}
        setSelectedMenu={setSelectedType}
      />
    </Box>
  );
};

export default CategorySelectBox;

const Box = styled.div`
  display: flex;
  gap: 2rem;
`;