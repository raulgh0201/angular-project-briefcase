"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditComponent = void 0;
const core_1 = require("@angular/core");
const project_1 = require("src/app/models/project");
const project_service_1 = require("src/app/services/project.service");
const upload_service_1 = require("src/app/services/upload.service");
const global_1 = require("../../services/global");
let EditComponent = class EditComponent {
    constructor(_projectService, _route, _router, _uploadServide) {
        this._projectService = _projectService;
        this._route = _route;
        this._router = _router;
        this._uploadServide = _uploadServide;
        this.title = 'Edit Project';
        this.url = global_1.Global.url;
        this.project = new project_1.Project('', '', '', '', new Date().getFullYear(), '', '');
        this.status = '';
        this.filesToUpload = [];
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
    onSubmit(form) {
        this._projectService.updateProject(this.project).subscribe(response => {
            if (response.project) {
                if (this.filesToUpload) {
                    this._uploadServide.makeFileRequest(global_1.Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image')
                        .then((result) => {
                        this.saveProject = result.project;
                        this.status = 'true';
                    });
                }
                else {
                    this.saveProject = response.project;
                    this.status = 'true';
                }
            }
            else {
                this.status = 'false';
                console.log('error');
            }
        }, error => {
            console.log(error);
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
};
EditComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-edit',
        templateUrl: './edit.component.html',
        styleUrls: ['./edit.component.css'],
        providers: [project_service_1.ProjectService, upload_service_1.UploadService]
    })
], EditComponent);
exports.EditComponent = EditComponent;
