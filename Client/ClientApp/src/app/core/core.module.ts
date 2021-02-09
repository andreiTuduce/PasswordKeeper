import { NgModule } from "@angular/core";
import { SessionStateStorageService } from "./services/session-state-storage";

@NgModule({
  providers: [
    SessionStateStorageService
  ]
})

export class CoreModule { }