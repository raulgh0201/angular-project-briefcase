"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsComponent = void 0;
const core_1 = require("@angular/core");
const project_service_1 = require("src/app/services/project.service");
const global_1 = require("src/app/services/global");
let ProjectsComponent = class ProjectsComponent {
    constructor(_projectService) {
        this._projectService = _projectService;
        this.projects = [];
        this.url = global_1.Global.url;
    }
    ngOnInit() {
        this.getProjects();
    }
    getProjects() {
        this._projectService.getProjects().subscribe(response => {
            if (response.projects) {
                this.projects = response.projects;
            }
        }, error => {
            console.log(error);
        });
    }
};
ProjectsComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-projects',
        templateUrl: './projects.component.html',
        styleUrls: ['./projects.component.css'],
        providers: [project_service_1.ProjectService]
    })
], ProjectsComponent);
exports.ProjectsComponent = ProjectsComponent;
