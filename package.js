Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-layout',
  summary: 'Fork of iron:layout for Firestorm',
  version: '1.0.4',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-layout'
});

Package.on_use(function (api) {
  api.versionsFrom('METEOR@2.2');

  // so our default_layout gets compiled
  api.use('templating@1.4.0');
  api.use('blaze@2.4.0');

  // some utils
  api.use('underscore');
  api.use('tracker'); // for Deps

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.4');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.4');

  // dynamic templates
  api.use('meteorhubdotnet:firestorm-iron-dynamic-template@1.0.4');

  // if you use iron-layout you should get iron-dynamic-template for free!
  api.imply('meteorhubdotnet:firestorm-iron-dynamic-template@1.0.4');

  // error messages to remove old packages
  // api.use('cmather:blaze-layout@0.2.5', {weak: true});
  // api.use('cmather:iron-layout@0.2.0', {weak: true});

  // api.add_files('version_conflict_errors.js');
  api.add_files('default_layout.html');
  api.add_files('layout.js');
});

Package.on_test(function (api) {
  api.versionsFrom('METEOR@2.2');

  api.use('meteorhubdotnet:firestorm-iron-layout@1.0.4');
  api.use('tinytest');
  api.use('test-helpers');
  api.use('templating');
  api.use('deps');

  api.add_files('layout_test.html', 'client');
  api.add_files('layout_test.js', 'client');
});
