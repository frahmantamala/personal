const fs = require('fs-extra');

import * as functions from 'firebase-functions';
const universal = require(`${process.cwd()}/dist/server`).app();

export const ssr = functions.https.onRequest(universal);

(async () => {

  const src = '../dist';
  const copy = './dist';

  await fs.remove(copy);
  await fs.copy(src, copy);

})();