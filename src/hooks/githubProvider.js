import React, { createContext, useState } from "react";

export const GithubContext = createContext({
    user: {},
    repositories: [],
});

function GitHubProvider({ children }) {
    const [githubInfo, setGithubInfo] = useState({
        user: {
            avatar_url: undefined,
            name: undefined,
            login: undefined,
            html_url: undefined,
            blog: undefined,
            public_repos: 0,
        },
        repositories: [],
    });

    const contextValue = {
        githubInfo
    }

    return(
        <GithubContext.Provider value={contextValue}>
            {children}
        </GithubContext.Provider>
    );
}

export default GitHubProvider;