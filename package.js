Package.describe({
  name: 'leesangwon:bootstrap-less',
  version: '0.9.1',
  summary: 'Bootstrap wrapper with less files',
  git: '',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');

  api.use('jquery', 'client');
  api.imply(['less']);

  api.addFiles([
    'bootstrap-less.js',
    '3.3.4/js/transition.js',
    '3.3.4/js/alert.js',
    '3.3.4/js/button.js',
    '3.3.4/js/carousel.js',
    '3.3.4/js/collapse.js',
    '3.3.4/js/dropdown.js',
    '3.3.4/js/modal.js',
    '3.3.4/js/tooltip.js',
    '3.3.4/js/popover.js',
    '3.3.4/js/scrollspy.js',
    '3.3.4/js/tab.js',
    '3.3.4/js/affix.js'
  ], 'client');

  api.addFiles([
    '3.3.4/fonts/glyphicons-halflings-regular.eot',
    '3.3.4/fonts/glyphicons-halflings-regular.svg',
    '3.3.4/fonts/glyphicons-halflings-regular.ttf',
    '3.3.4/fonts/glyphicons-halflings-regular.woff',
    '3.3.4/fonts/glyphicons-halflings-regular.woff2'
  ], 'client', { isAsset: true });

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('leesangwon:bootstrap-less');
  api.addFiles('bootstrap-less-tests.js');
});
