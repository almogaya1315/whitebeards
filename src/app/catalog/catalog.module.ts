import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CatalogComponent } from "./catalog.component";
import { SharedModule } from "../Shared/shared.module";
import { EnrollComponent } from './enroll.component';
import { OrderByPipe } from "./order-by.pipe";
//import { CatalogRepositoryService } from "./catalog-repository.service";
//import { FilterClassesService } from "./filter-classes.service";

@NgModule({
        imports: [SharedModule, RouterModule],
        declarations: [CatalogComponent, EnrollComponent, OrderByPipe],
        exports: [],
        providers: [] //CatalogRepositoryService, FilterClassesService
})
export class CatalogModule {};