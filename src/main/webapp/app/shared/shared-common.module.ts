import { NgModule } from '@angular/core';

import { ItAssetMcSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ItAssetMcSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ItAssetMcSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ItAssetMcSharedCommonModule {}
