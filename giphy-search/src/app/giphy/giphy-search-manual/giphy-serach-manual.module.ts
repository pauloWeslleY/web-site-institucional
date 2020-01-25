import { NgModule } from '@angular/core';
import { GiphySearchService } from '../giphy-searh.service';

import { GiphySearchManualComponent } from './giphy-search-manual.component';

@NgModule({
  imports: [],
  exports: [ GiphySearchManualComponent ],
  declarations: [ GiphySearchManualComponent ],
  providers: [ GiphySearchService ],
})
export class GiphySearchManualComponentModule { }
