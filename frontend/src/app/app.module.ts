// Base
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Material
import {MatToolbarModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

// Custom
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

// Service
import { IssueService } from './issue.service';

const routes: Routes = [
    { path: 'create', component: CreateComponent },
    { path: 'edit/:id', component: EditComponent },
    { path: 'list', component: ListComponent },
    { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
    declarations: [
        AppComponent,
        ListComponent,
        CreateComponent,
        EditComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        // Material
        MatToolbarModule,
        MatExpansionModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatCardModule
    ],
    providers: [IssueService],
    bootstrap: [AppComponent]
})
export class AppModule { }
