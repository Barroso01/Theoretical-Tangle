import React from 'react';
import { withAuthenticator} from '@aws-amplify/ui-react';

import {
    NavBarHeader,
    ProjectCollection,
    MarketingFooter
   } from '../ui-components';
import './ProjectPage.css'; 

const ProjectsPage = () => {
    return (
        
        <div>

            <NavBarHeader className="navbar-header" width={'100vw'} />

            {/* Projects Section */}
            <div className="project-collection-container">
            <ProjectCollection width={'90vw'}/>
            </div>

            {/* Footer */}
            <MarketingFooter width={'100vw'} />

        </div>
    );
};

export default withAuthenticator(ProjectsPage);