import React from 'react';

const Glossary = (props) => {
    return (
        <div>
            <h4>The document uses few terminologies which are described as follows:</h4>
            <ol>
                <li className="boldList">Web Application File Path:</li>
                <p>The file path of FARRMS application frontend files in the application server. This is where a patch is normally dropped while applying.</p>
                <li className="boldList">SVN URL Base Path:</li>
                <p>This is the URL of the base path of the application where the repository of the version has been placed.</p>
                <li className="boldList">SSIS Env Var Name:</li>
                <p>A windows environmental variable name normally in the DB server to hold the path of SSIS XML configuration file.</p>
                <li className="boldList">SSIS Config File Path:</li>
                <p>The file path of SSIS XML configuration file, normally in DB server, which is also set in SSIS Env Var Name</p>
                <li className="boldList">SSIS Package Base Path:</li>
                <p>The base file path of SSIS packages. Each package is put in its own directory.</p>
                <li className="boldList">SSIS Data Source Base Path:</li>
                <p>The base file path of data files used by SSIS packages. Each package of data is put in its own directory.</p>
                <li className="boldList">Default Values:</li>
                <p>Default values of the above parameters for common servers are listed below:</p>
            </ol>
            <h4>Change Introduction Method</h4>
            <ul>
                <li className="boldList">SVN Commit / Update:</li>
                <p>By committing the code in SVN repository. This is normally done in Development (e.g., DEV01) and Demo servers, where Hudson auto deploys the committed code from SVN repositories and executes on the respective database.</p>
                <li className="boldList">Patch:</li>
                <p>Change can only be introduced by applying a patch (hotfix). This is normally applicable to UAT and PROD servers.</p>
            </ul>
            <h4>Accessibility</h4>
            <p> What are the permissions available for Pioneer. Full means all permissions available.</p>
        </div>
    )
}

export default Glossary;