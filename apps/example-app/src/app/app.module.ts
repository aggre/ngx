import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';

import { GridLayoutModule } from '@lacolaco/ngx-grid-layout';
import { StoreModule, STORE_MIDDLEWARE } from '@lacolaco/ngx-store';
import { Middleware } from '@lacolaco/reactive-store';

export function loggingMiddleware(next: Middleware) {
  return state => {
    state = next(state);
    console.log(`[State Update]`, state);
    return state;
  };
}

@NgModule({
  imports: [BrowserModule, GridLayoutModule, StoreModule.forRoot({})],
  providers: [{ provide: STORE_MIDDLEWARE, useValue: loggingMiddleware, multi: true }],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
