"use strict";
var router_1 = require('@angular/router');
var about_component_1 = require('./components/pages/about.component');
var home_component_1 = require('./components/pages/home.component');
exports.routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map