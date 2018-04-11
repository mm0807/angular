//our root app component
import {Component, Compiler, ViewContainerRef, ViewChild, ComponentRef, ComponentFactory, ComponentFactoryResolver} from '@angular/core'
import {HelloComponent} from './hello.component'

@Component({
  selector: 'my-app',
  providers: [],
  template: `
    <div>
      <h2>Dynamicaly Add Elements</h2>
      <button (click)="addItem()">add hello</button>
      <div #placeholder></div>
    </div>
  `,
  entryComponents: [HelloComponent]
})
export class App {
  @ViewChild('placeholder', {read: ViewContainerRef}) viewContainerRef;
  private componentFactory: ComponentFactory<any>;
  
  constructor(componentFactoryResolver: ComponentFactoryResolver, compiler: Compiler) {
    this.componentFactory = componentFactoryResolver.resolveComponentFactory(HelloComponent);
    //this.componentFactory = compiler.compileComponentSync(HelloComponent);
  }
  
  addItem () {
    let instance  = this.viewContainerRef.createComponent(this.componentFactory, 0).instance;
    instance.message = "some text!!";
  }
//   private loadComponent(): void {
//         const componentFactory = this.factoryResolver.resolveComponentFactory(MyInputComponent);

//         const viewContainerRef = this.componentHost.viewContainerRef;
//         viewContainerRef.clear();

//         const componentRef = viewContainerRef.createComponent(componentFactory);
//         (<IComponent>componentRef.instance).data = data;
// }
  //this.componentRef.instance.variableName = 'abc'; 
 //this.componentRef.instance.observeVariabel.subscribe(result => { this.v = result;  // here observeVariabel is a Observable in dynamic component
}
