import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { GatewayappregisSharedModule } from 'app/shared/shared.module';
import { GatewayappregisCoreModule } from 'app/core/core.module';
import { GatewayappregisAppRoutingModule } from './app-routing.module';
import { GatewayappregisHomeModule } from './home/home.module';
import { GatewayappregisEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { JhiMainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    GatewayappregisSharedModule,
    GatewayappregisCoreModule,
    GatewayappregisHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    GatewayappregisEntityModule,
    GatewayappregisAppRoutingModule
  ],
  declarations: [JhiMainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [JhiMainComponent]
})
export class GatewayappregisAppModule {}
