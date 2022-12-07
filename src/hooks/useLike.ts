import useSWR from "swr";
import like from "@lib/api/likeAPI";

import { useRecoilValue } from "recoil";
import { isSignInState } from "@states/users";

const useLike = () => {
  const isSignIn = useRecoilValue(isSignInState);
  const { data } = useSWR(
    [isSignIn ? "like" : null],
    () => {
      if (isSignIn) return like.getLikeList();
    },
    {
      revalidateOnFocus: false,
    }
  );

  return {
    movie: data ? data.movie : null,
    tv: data ? data.tv : null,
    isLoading: !data,
  };
};

export default useLike;
