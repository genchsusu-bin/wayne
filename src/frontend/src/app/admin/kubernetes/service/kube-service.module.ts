import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { KubeServiceComponent } from './kube-service.component';
import { ListServiceComponent } from './list-service/list-service.component';
import { KubernetesClient } from '../../../shared/client/v1/kubernetes/kubernetes';
import { DeletionDialogModule } from '../../../shared/deletion-dialog/deletion-dialog.module';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    DeletionDialogModule
  ],
  providers: [
    KubernetesClient
  ],
  exports: [
    KubeServiceComponent,
    ListServiceComponent
  ],
  declarations: [
    KubeServiceComponent,
    ListServiceComponent
  ]
})

export class KubeServiceModule {
}
