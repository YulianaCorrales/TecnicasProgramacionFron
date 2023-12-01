import { Routes } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Festivo } from 'src/app/entidades/festivo';
import { ColumnMode, SelectionType } from 'swimlane/ngx-datatable';
import { Tipo } from'src/app/servicios/festivo.servicios';

@Component ({
    selector: 'app-festivos',
    templateUrl: 'festivos.component.html',
    styleUrls: ['/festivos.component.css']
})
export class FestivosComponent implements OnInit{
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    public idFestivos: number = 0;
    public festivos : Festivos [] = [];
    public idTipos: number = 0;
    public tipo: Tipo[] = []

    public columnas = [
        
    ]
}
export const routes: Routes = [];
