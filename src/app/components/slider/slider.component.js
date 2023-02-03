"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SliderComponent = void 0;
const core_1 = require("@angular/core");
let SliderComponent = class SliderComponent {
    constructor() {
        this.getAuthor = new core_1.EventEmitter();
        this.width = 0;
        this.captions = false;
        this.author = {
            name: 'Raul Garcia Hidalgo',
            website: 'rghweb.com'
        };
    }
    ngOnInit() {
        $('.slider').bxSlider({
            slideWidth: this.width,
            captions: this.captions
        });
        this.getAuthor.emit(this.author);
    }
    launch(event) {
        console.log(event);
        this.getAuthor.emit(this.author);
    }
};
__decorate([
    (0, core_1.Input)()
], SliderComponent.prototype, "width", void 0);
__decorate([
    (0, core_1.Input)()
], SliderComponent.prototype, "captions", void 0);
__decorate([
    (0, core_1.Output)()
], SliderComponent.prototype, "getAuthor", void 0);
SliderComponent = __decorate([
    (0, core_1.Component)({
        selector: 'slider',
        templateUrl: './slider.component.html',
        styleUrls: ['./slider.component.css']
    })
], SliderComponent);
exports.SliderComponent = SliderComponent;
