import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router'; 

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  path: string;
}

export const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 50, 
    name: 'Zakwan', 
    weight: 1.79, 
    symbol: 'H',
    path: '/productDetail'
  },
  {
    position: 100, 
    name: 'Hydrogen', 
    weight: 1.0079, 
    symbol: 'H',
    path: '/productDetail'
  },
  {
    position: 2, 
    name: 'Helium', 
    weight: 4.0026, 
    symbol: 'He',
    path: '/productDetail'
  },
  {
    position: 1, 
    name: 'Hydrogen', 
    weight: 1.0079, 
    symbol: 'H',
    path: '/productDetail'
  },
  {
    position: 2, 
    name: 'Helium', 
    weight: 4.0026, 
    symbol: 'He',
    path: '/productDetail'
  },
  {
    position: 1, 
    name: 'Hydrogen', 
    weight: 1.0079, 
    symbol: 'H',
    path: '/productDetail'
  },
  {
    position: 2, 
    name: 'Helium', 
    weight: 4.0026, 
    symbol: 'He',
    path: '/productDetail'
  }
];

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrl: './product-index.component.scss'
})
export class ProductIndexComponent {

  constructor(private router: Router) {
  }

  dataSource: PeriodicElement[] = ELEMENT_DATA;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  selectedProduct : any;
  @ViewChild('tableRef') tableRef: ElementRef | undefined;
  movePage( data : any ): void{
    this.router.navigate([data.path])
  }

  exportColumns!: ExportColumn[];
  cols!: Column[];
  

  ngOnInit() {
    this.cols = [
      {
        field: 'dataSource.position', header: 'position', customExportHeader: 'position'
      },
      {
        field: 'name', header: 'name', customExportHeader: 'name'
      },
      {
        field: 'weight', header: 'weight', customExportHeader: 'weight'
      },
      {
        field: 'symbol', header: 'symbol', customExportHeader: 'symbol'
      }
    ];
    this.exportColumns = this.cols.map((col) => ({ title: col.header, dataKey: col.field }));
  }
}