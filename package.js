Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-layout',
  summary: 'Fork of iron:layout for Firestorm',
  version: '1.0.7',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-layout'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.7.3');

  // so our default_layout gets compiled
  api.use('templating');
  api.use('blaze@2.6.1');

  // some utils
  api.use('underscore');
  api.use('tracker'); // for Deps

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.7');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.7');

  // dynamic templates
  api.use('meteorhubdotnet:firestorm-iron-dynamic-template@1.0.7');

  // if you use iron-layout you should get iron-dynamic-template for free!
  api.imply('meteorhubdotnet:firestorm-iron-dynamic-template@1.0.7');

  // error messages to remove old packages
  // api.use('cmather:blaze-layout@0.2.5', {weak: true});
  // api.use('cmather:iron-layout@0.2.0', {weak: true});

  // api.addFiles('version_conflict_errors.js');
  api.addFiles('default_layout.html');
  api.addFiles('layout.js');
});

Package.onTest(function (api) {
  api.versionsFrom('METEOR@2.7.3');

  api.use('meteorhubdotnet:firestorm-iron-layout@1.0.7');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('templating');
  api.use('deps');

  api.addFiles('layout_test.html', 'client');
  api.addFiles('layout_test.js', 'client');
});
