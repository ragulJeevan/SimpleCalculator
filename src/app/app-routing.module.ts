import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { StandardComponent } from './components/standard/standard.component';

const routes: Routes = [
  {path:'standard',component:StandardComponent},
  {path:'converter',component:ConverterComponent},
  {path:'currency',component:CurrencyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
