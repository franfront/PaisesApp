import { SeeCountryComponent } from './pais/pages/see-country/see-country.component';
import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ForCapitalComponent } from './pais/pages/for-capital/for-capital.component';
import { ForRegionComponent } from './pais/pages/for-region/for-region.component';
import { ForCountryComponent } from './pais/pages/for-country/for-country.component';


const routes: Routes =[
    {
        path:'',
        component: ForCountryComponent,
        pathMatch: 'full'
    },
    {
        path:'region',
        component: ForRegionComponent
    },
    {
        path:'capital',
        component: ForCapitalComponent
    },
    {
        path: 'country/:id',
        component: SeeCountryComponent,
    },
    {
        path:'**',
        redirectTo: '',
    }
]


@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ],
})
export class AppRoutingModule{

}