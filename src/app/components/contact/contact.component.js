"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactComponent = void 0;
const core_1 = require("@angular/core");
let ContactComponent = class ContactComponent {
    constructor() {
        this.widthSlider = 0;
        this.captionsSlider = false;
        this.anchuraToSlider = 0;
    }
    ngOnInit() {
        console.log(document.querySelector('#text'));
    }
    loadSlider() {
        this.anchuraToSlider = this.widthSlider;
    }
    resetSlider() {
        this.anchuraToSlider = false;
    }
    getAuthor(event) {
        this.author = event;
        console.log(this.author);
    }
};
ContactComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css']
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
