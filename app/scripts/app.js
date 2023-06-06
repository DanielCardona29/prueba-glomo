(function() {
  'use strict';

  window.CellsPolymer.start({
    routes: {
      'login': '/',
      'another': '/another',
      'forgetPassword': '/forgetPassword',
      'register': '/register',
      'routerExample': '/routerExample/:queryStringToPrettyUrl'
    }
  });
}(document));
