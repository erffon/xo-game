import { useRouter } from "next/router";

const Result = () => {
  const router = useRouter();

  return <div>{router.query.winner}</div>;
};

export default Result;
