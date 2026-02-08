import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { Practise1Component } from './practise1/practise1.component';
import { Practise2Component } from './practise2/practise2.component';
import { Practise3Component } from './practise3/practise3.component';
import { Practise4Component } from './practise4/practise4.component';
import { Practise5Component } from './practise5/practise5.component';
import { Practise10Component } from './practise10/practise10.component';
import { Practise6Component } from './practise6/practise6.component';
import { Practise7Component } from './practise7/practise7.component';
import { Practise8Component } from './practise8/practise8.component';
import { Practise9Component } from './practise9/practise9.component';
import { Practise11Component } from './practise11/practise11.component';
import { Practise12Component } from './practise12/practise12.component';
import { Practise13Component } from './practise13/practise13.component';
import { Practise14Component } from './practise14/practise14.component';
import { Practise15Component } from './practise15/practise15.component';
import { Practise111Component } from './practise11/practise11-1/practise11-1.component';
import { Practise16Component } from './practise16/practise16.component';
import { Practise17Component } from './practise17/practise17.component';
import { Practise18Component } from './practise18/practise18.component';
import { Practise19Component } from './practise19/practise19.component';
import { Practise20Component } from './practise20/practise20.component';
import { Practise21Component } from './practise21/practise21.component';
import { Practise22Component } from './practise22/practise22.component';
import { Practise23Component } from './practise23/practise23.component';
import { Practise24Component } from './practise24/practise24.component';
import { Practise25Component } from './practise25/practise25.component';
import { Practise26Component } from './practise26/practise26.component';
import { Practise27Component } from './practise27/practise27.component';
import { Practise28Component } from './practise28/practise28.component';
import { Practise29Component } from './practise29/practise29.component';
import { Practise30Component } from './practise30/practise30.component';
import { Practise31Component } from './practise31/practise31.component';
import { Practise32Component } from './practise32/practise32.component';
import { Practise33Component } from './practise33/practise33.component';
import { FirstComponentComponent } from './practise10/first-component/first-component.component';
import { SecondComponentComponent } from './practise10/second-component/second-component.component';
import { FirstPageComponent } from './practise24/first-page/first-page.component';
import { SecondPageComponent } from './practise24/second-page/second-page.component';
import { ThirdPageComponent } from './practise24/third-page/third-page.component';

//設定初始畫面為list(使用full判斷如果網址後面沒有路由就跳頁至list)
export const routes: Routes = [
  { path: 'practise1', component: Practise1Component },
  { path: 'practise2', component: Practise2Component },
  { path: 'practise3', component: Practise3Component },
  { path: 'practise4', component: Practise4Component },
  { path: 'practise5', component: Practise5Component },
  { path: 'practise6', component: Practise6Component },
  { path: 'practise7', component: Practise7Component },
  { path: 'practise8', component: Practise8Component },
  { path: 'practise9', component: Practise9Component },
  {
    path: 'practise10', component: Practise10Component,
    children: [
      { path: 'FirstComponent', component: FirstComponentComponent },
      { path: 'SecondComponent', component: SecondComponentComponent }
    ]
  },
  {
    path: 'practise11', component: Practise11Component,
    children: [
      { path: 'practise11_1', component: Practise111Component },
    ]
  },
  { path: 'practise12', component: Practise12Component },
  { path: 'practise13', component: Practise13Component },
  { path: 'practise14', component: Practise14Component },
  { path: 'practise15', component: Practise15Component },
  { path: 'practise16', component: Practise16Component },
  { path: 'practise17', component: Practise17Component },
  { path: 'practise18', component: Practise18Component },
  { path: 'practise19', component: Practise19Component },
  { path: 'practise20', component: Practise20Component },
  { path: 'practise21', component: Practise21Component },
  { path: 'practise22', component: Practise22Component },
  { path: 'practise23', component: Practise23Component },
  {
    path: 'practise24', component: Practise24Component,
    children: [
      { path: 'FirstPage', component: FirstPageComponent },
      { path: 'SecondPage', component: SecondPageComponent },
      { path: 'ThirdPage', component: ThirdPageComponent },
      { path: '', redirectTo:'/practise24/FirstPage', pathMatch:'prefix' }
    ]
  },
  { path: 'practise25', component: Practise25Component },
  { path: 'practise26', component: Practise26Component },
  { path: 'practise27', component: Practise27Component },
  { path: 'practise28', component: Practise28Component },
  { path: 'practise29', component: Practise29Component },
  { path: 'practise30', component: Practise30Component },
  { path: 'practise31', component: Practise31Component },
  { path: 'practise32', component: Practise32Component },
  { path: 'practise33', component: Practise33Component },
  { path: 'list', component: ListComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
