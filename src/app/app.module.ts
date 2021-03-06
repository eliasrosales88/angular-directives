import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { DemoComponent } from './demo/demo.component';
import { BasicDirective } from './basic.directive';
import { BasicExampleDirectiveComponent } from './basic-example-directive/basic-example-directive.component';
import { BetterApproachDirective } from './better-approach.directive';
import { BetterApproachExampleDirectiveComponent } from './better-approach-example-directive/better-approach-example-directive.component';
import { HostlistenerDecoratorDirective } from './hostlistener-decorator.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgStyleComponent,
    NgClassComponent,
    NgForComponent,
    DemoComponent,
    BasicDirective,
    BasicExampleDirectiveComponent,
    BetterApproachDirective,
    BetterApproachExampleDirectiveComponent,
    HostlistenerDecoratorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
