import { React } from 'react';
import { Link } from 'react-router-dom';

import "./TeamTitle.scss";

export const TeamTitle = ({ teamName }) => {
    return (
      <div className="TeamTitle">
          <h1>
              <Link to={`/teams/${teamName}`}>
                  {teamName}
              </Link>
          </h1>
      </div>
    );
}