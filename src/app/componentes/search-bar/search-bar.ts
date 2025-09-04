import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  imports: [],
  templateUrl: './search-bar.html',
  styles: [`.input { width: 100%; padding: .5rem .75rem; border: 1px solid #ccc; border-radius: .5rem; }`],
  host: { class: 'block w-full' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  })
export class SearchBar {

}
