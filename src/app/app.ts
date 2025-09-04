import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchBar } from './componentes/search-bar/search-bar';
import { ChartComponent } from './componentes/chart-component/chart-component';
import { HeaderComponent } from './componentes/header-component/header-component';
import { InstrumentItemComponent } from './componentes/instrument-item-component/instrument-item-component';
import { InstrumentListComponent } from './componentes/instrument-list-component/instrument-list-component';
import { SummaryComponent } from './componentes/summary-component/summary-component';
import { TabComponent } from './componentes/tab-component/tab-component';

@Component({
  selector: 'app-root',
  imports: [SearchBar, ChartComponent, HeaderComponent, InstrumentItemComponent, InstrumentListComponent, SummaryComponent, TabComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('market');
}
