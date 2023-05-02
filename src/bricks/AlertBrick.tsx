import { brick } from 'react-bricks';
import type { BrickSchema } from '@react-bricks/core';

import Alert from '../components/Alert';

const AlertBrick = brick(Alert, {
    name: 'Alert Brick',
    category: 'Components',
  }) as BrickSchema<typeof Alert>;
  
  export default AlertBrick;
  


