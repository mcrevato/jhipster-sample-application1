import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ItAssetMcSharedLibsModule, ItAssetMcSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ItAssetMcSharedLibsModule, ItAssetMcSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ItAssetMcSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItAssetMcSharedModule {
  static forRoot() {
    return {
      ngModule: ItAssetMcSharedModule
    };
  }
}
