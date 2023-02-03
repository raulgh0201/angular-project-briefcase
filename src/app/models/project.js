"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    constructor(_id, name, description, category, year, langs, image) {
        this._id = _id;
        this.name = name;
        this.description = description;
        this.category = category;
        this.year = year;
        this.langs = langs;
        this.image = image;
    }
}
exports.Project = Project;
