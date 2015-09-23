// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  classes = require('bespoke-classes'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  state = require('bespoke-state'),
  scale = require('bespoke-scale'),
  hash = require('bespoke-hash'),
  progress = require('bespoke-progress'),
  bullets = require('bespoke-bullets'),
  sync = require('bespoke-sync/client'),
  notes = require('bespoke-notes');

// Bespoke.js
bespoke.from('article', [
  classes(),
  keys(),
  touch(),
  state(),
  scale(),
  hash(),
  progress(),
  bullets(),
  sync
  ({
    log: false,
    ssePath: '/sse-slides/',
    xhrPath: '/slide/'
  }),
  notes
  ({
    key: 0x4e, // Key that toggles notes, default: 0x4e ('n' key)
    visible: false, // Whether to display notes on startup, default: false
    slideWidth: 640 // Slide width, default: 800)
  })
]);
