/*!
 * shorturl
 * Copyright(c) 2016-2016 toantang <thuutoan91@gmail.com>
 */
'use strict';

const level = require('level');
const sublevel = require('level-sublevel');
const path = require('path');
const db = path.resolve(__dirname, '../', process.env.DB);
module.exports = sublevel(level(db));