import React from "react";
import { useEffect } from "react";
import { atom, useRecoilState } from "recoil";

const repostate = atom({
  key: "api",
  default: [],
});

const Reocil = () => {
  const [repos, setRepos] = useRecoilState(repostate);

  useEffect(() => {
    const getRepos = async () => {
      const url = `${import.meta.VITE_API}fulldata`;
      const resp = await fetch(url);
      const body = await resp.json();
      setRepos(body);
    };
    getRepos();
  }, []);

  console.log(repos);

  return <div></div>;
};

export default Reocil;
