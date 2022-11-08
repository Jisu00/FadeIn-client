import styled from "styled-components";

import SEO from "@components/common/SEO";
import Calendar from "@components/review/organisms/Calendar";

const ReviewPage = () => {
  return (
    <Wrap>
      <SEO title="review" />
      <Calendar />
    </Wrap>
  );
};

export default ReviewPage;

const Wrap = styled.div``;
