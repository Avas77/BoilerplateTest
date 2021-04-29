/**
 *
 * Asynchronously loads the component for ImageGrid
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
