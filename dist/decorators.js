"use strict";
//  function Log(constructor: Function) {
//     //console.log(constructor)
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Component(config) {
    return function (Constructor) {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
                const element = document.querySelector(config.selector);
                element.innerHTML = config.template;
            }
        };
    };
}
let CardComponent = class CardComponent {
    constructor(name) {
        this.name = name;
    }
    loName() {
        console.log(` Conponent Name: ${this.name} `);
    }
};
CardComponent = __decorate([
    Component({
        selector: "#card",
        template: `
        <div class="card">
            <div class="card-content>
                <span class="card-title">Card Component</span>
            </div>
        </div>
    `
    })
], CardComponent);
const card = new CardComponent("My Card");
