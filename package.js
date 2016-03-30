Package.describe({
  name: 'cristo:subscription-organizer',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Cache & Share same subscriptions between many views/places. Dependant under subscriptions',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/cristo-rabani/subscription-organizer',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ejson');
  api.use('ecmascript');
  api.use('tracker');
  api.use('meteor');
  api.addFiles('subscription-organizer.js');
  api.export('SubscriptionImprover');
  api.export('SubscriptionOrganizer');
});
