//  function Log(constructor: Function) {
//     //console.log(constructor)
// }

// function Log2(target:any, propName: string | Symbol) { // targen - class | propName - variable
//     // console.log(target);
//     // console.log(propName)
// }   

// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) { 
//     console.log("target ",target);
//     console.log("propName ",propName);
//     console.log("descriptor ",descriptor);
// }

interface ComponentDecorator {
    selector: string
    template: string
}

function Component(config: ComponentDecorator) {
    return function
        <T extends { new(...args: any[]): object }>
        (Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args);

                const element = document.querySelector(config.selector)!
                element.innerHTML = config.template
            }
        }
    }
}

@Component({
    selector: "#card",
    template: `
        <div class="card">
            <div class="card-content>
                <span class="card-title">Card Component</span>
            </div>
        </div>
    `
})
class CardComponent {
    constructor(public name: string) { }

    loName(): void {
        console.log(` Conponent Name: ${this.name} `)
    }
}

const card = new CardComponent("My Card");