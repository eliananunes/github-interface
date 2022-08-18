import React from "react";
import useGithub from "../../hooks/githubHooks";

function Profile() {

    const { githubInfo } = useGithub();

    return(
        <div>
            <img
                src={githubInfo.user.avatar_url}
                alt="user"
            />
            <h1>{githubInfo.user.name}</h1>
            <h3>Username</h3>
            <a
                href={githubInfo.user.html_url}

            >
                {githubInfo.user.login}
            </a>
            <h3>Redes</h3>
            <a
                href={githubInfo.user.blog}

            >
                Contato
            </a>
            <h3>Repositórios</h3>
            <span> {githubInfo.user.public_repos}</span>
        </div>
    );
}

export default Profile;