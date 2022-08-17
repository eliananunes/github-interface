import React from "react";

function RepositorieItems({ name, fullname, repo }) {
    return(
        <div>
            <h2>{name}</h2>
            <h4>Full name</h4>
            <a
                href={repo}
            >
                {fullname}
            </a>
        </div>
    );
}

export default RepositorieItems;