"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateComponent = void 0;
//Components
const core_1 = require("@angular/core");
//Models
const project_1 = require("src/app/models/project");
//Services
const project_service_1 = require("src/app/services/project.service");
const upload_service_1 = require("src/app/services/upload.service");
const global_1 = require("src/app/services/global");
let CreateComponent = class CreateComponent {
    constructor(_projectService, _uploadService) {
        this._projectService = _projectService;
        this._uploadService = _uploadService;
        this.filesToUpload = new Array();
        this.title = 'Create Project';
        this.status = '';
        this.project = new project_1.Project('', '', '', '', new Date().getFullYear(), '', '');
    }
    ngOnInit() {
    }
    sendData(form) {
        // Guardar datos básicos
        this._projectService.saveProject(this.project).subscribe(response => {
            if (response.project) {
                // Subir la imagen
                if (this.filesToUpload) {
                    this._uploadService.makeFileRequest(global_1.Global.url + "upload-image/" + response.project._id, [], this.filesToUpload, 'image')
                        .then((result) => {
                        this.saveProject = result.project;
                        this.status = 'true';
                        form.reset();
                    });
                }
                else {
                    this.saveProject = response.project;
                    this.status = 'true';
                    form.reset();
                }
            }
            else {
                this.status = 'false';
            }
        }, error => {
        });
    }
    fileChangeEvent(fileInput) {
        this.filesToUpload = fileInput.target.files;
    }
};
CreateComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-create',
        templateUrl: './create.component.html',
        styleUrls: ['./create.component.css'],
        providers: [project_service_1.ProjectService, upload_service_1.UploadService]
    })
], CreateComponent);
exports.CreateComponent = CreateComponent;
