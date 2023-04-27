Package.describe({
  name: 'meteorhubdotnet:firestorm-iron-layout',
  summary: 'Fork of iron:layout for Firestorm',
  version: '1.0.15',
  git: 'https://github.com/meteorhubdotnet/firestorm-iron-layout'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@2.11.0');

  // so our default_layout gets compiled
  api.use('templating@1.4.2');
  api.use('blaze@2.6.2');

  // some utils
  api.use('underscore');
  api.use('tracker'); // for Deps

  api.use('meteorhubdotnet:firestorm-iron-core@1.0.15');
  api.imply('meteorhubdotnet:firestorm-iron-core@1.0.15');

  // dynamic templates
  api.use('meteorhubdotnet:firestorm-iron-dynamic-template@1.0.15');

  // if you use iron-layout you should get iron-dynamic-template for free!
  api.imply('meteorhubdotnet:firestorm-iron-dynamic-template@1.0.15');

  // error messages to remove old packages
  // api.use('cmather:blaze-layout@0.2.5', {weak: true});
  // api.use('cmather:iron-layout@0.2.0', {weak: true});

  // api.addFiles('version_conflict_errors.js');
  api.addFiles('default_layout.html');
  api.addFiles('layout.js');
});
