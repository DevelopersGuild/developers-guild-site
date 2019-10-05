import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


const RolesRaw: React.FC = () => {
    return(
        <React.Fragment>
            <Container>
                
            </Container>
        </React.Fragment>
    )
}


/**
 * Memoizing component to prevent useless re-rendering
 */
const Roles = React.memo(RolesRaw);

export default Roles;