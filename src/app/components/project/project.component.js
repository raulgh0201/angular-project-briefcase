"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectComponent = void 0;
const core_1 = require("@angular/core");
const project_1 = require("src/app/models/project");
const project_service_1 = require("src/app/services/project.service");
const global_1 = require("../../services/global");
let ProjectComponent = class ProjectComponent {
    constructor(_projectService, _router, _route) {
        this._projectService = _projectService;
        this._router = _router;
        this._route = _route;
        this.url = global_1.Global.url;
        this.project = new project_1.Project('asdf', 'sdf', 'asd', 'asfd', new Date().getFullYear(), 'asdf', 'asdf');
        this.confirm = false;
    }
    ngOnInit() {
        this._route.params.subscribe(params => {
            let id = params['id'];
            this.getProject(id);
        });
    }
    getProject(id) {
        this._projectService.getProject(id).subscribe(response => {
            this.project = response.project;
        }, error => {
            console.log(error);
        });
    }
    deleteProject(id) {
        this._projectService.deleteProject(id).subscribe(response => {
            if (response.project) {
                this._router.navigate(['/projects'])
                    .then(nav => {
                    console.log(nav);
                }, err => {
                    console.log(err);
                });
            }
        }, error => {
            console.log(error);
        });
    }
    setConfirm(confirm) {
        if (this.confirm) {
            this.confirm = false;
        }
        else {
            this.confirm = true;
        }
    }
};
ProjectComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-project',
        templateUrl: './project.component.html',
        styleUrls: ['./project.component.css'],
        providers: [project_service_1.ProjectService]
    })
], ProjectComponent);
exports.ProjectComponent = ProjectComponent;
