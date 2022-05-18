/* eslint-disable no-unused-vars */

import detail from './detail';

export default (axios, baseUrl) => ({
  detail: detail(axios, baseUrl),
});
