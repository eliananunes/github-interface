import { useContext } from "react";
import { GithubContext } from "./githubProvider";

function useGithub() {
    const { githubInfo } = useContext(GithubContext);
    return { githubInfo };
}

export default useGithub;