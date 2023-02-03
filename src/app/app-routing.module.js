"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routing = exports.AppRoutingProviders = exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const app_component_1 = require("./app.component");
const about_component_1 = require("./components/about/about.component");
const contact_component_1 = require("./components/contact/contact.component");
const create_component_1 = require("./components/create/create.component");
const projects_component_1 = require("./components/projects/projects.component");
const project_component_1 = require("./components/project/project.component");
const edit_component_1 = require("./components/edit/edit.component");
const slider_component_1 = require("./components/slider/slider.component");
const routes = [
    { path: '', component: app_component_1.AppComponent },
    { path: 'about-me', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'create', component: create_component_1.CreateComponent },
    { path: 'edit-project/:id', component: edit_component_1.EditComponent },
    { path: 'projects', component: projects_component_1.ProjectsComponent },
    { path: 'project/:id', component: project_component_1.ProjectComponent },
    { path: 'slider', component: slider_component_1.SliderComponent },
    { path: '**', component: about_component_1.AboutComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.AppRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);
