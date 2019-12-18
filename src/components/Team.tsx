import React from 'react';
import loftlyTheme from './Theme';
import { Grommet} from 'grommet'
import Menu from './menu';

const Team: React.FC = () =>  {
  return(
    <Grommet theme={loftlyTheme} >
      <Menu/>
    </Grommet>
  )
}

export default Team;
