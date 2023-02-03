"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/common/http");
const app_routing_module_1 = require("./app-routing.module");
const app_routing_module_2 = require("./app-routing.module");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const about_component_1 = require("./components/about/about.component");
const contact_component_1 = require("./components/contact/contact.component");
const create_component_1 = require("./components/create/create.component");
const projects_component_1 = require("./components/projects/projects.component");
const project_component_1 = require("./components/project/project.component");
const edit_component_1 = require("./components/edit/edit.component");
const slider_component_1 = require("./components/slider/slider.component");
const highlighted_directive_1 = require("./highlighted.directive");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            create_component_1.CreateComponent,
            projects_component_1.ProjectsComponent,
            project_component_1.ProjectComponent,
            edit_component_1.EditComponent,
            slider_component_1.SliderComponent,
            highlighted_directive_1.HighlightedDirective
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_2.AppRoutingModule,
            app_routing_module_1.routing,
            http_1.HttpClientModule,
            forms_1.FormsModule
        ],
        providers: [app_routing_module_1.AppRoutingProviders],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
