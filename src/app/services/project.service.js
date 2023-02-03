"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const core_1 = require("@angular/core");
const http_1 = require("@angular/common/http");
const global_1 = require("./global");
let ProjectService = class ProjectService {
    constructor(_http) {
        this._http = _http;
        this.url = global_1.Global.url;
    }
    init() {
        console.log(this.url);
    }
    testService() {
        return 'Testing angular service';
    }
    saveProject(project) {
        let params = JSON.stringify(project);
        let headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'save-project', params, { headers: headers });
        //return this._http.post(this.url + 'save-project', params, {headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
    }
    getProjects() {
        let headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'projects', { headers: headers });
    }
    getProject(id) {
        let headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'project/' + id, { headers: headers });
    }
    deleteProject(id) {
        let headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'project/' + id, { headers: headers });
    }
    updateProject(project) {
        let params = JSON.stringify(project);
        let headers = new http_1.HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'project/' + project._id, params, { headers: headers });
    }
};
ProjectService = __decorate([
    (0, core_1.Injectable)()
], ProjectService);
exports.ProjectService = ProjectService;
