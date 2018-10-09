import { Injectable } from "@angular/core";

import { ToastController } from 'ionic-angular';

@Injectable()
export class ToastService {

  constructor(private toastCtrl: ToastController ) {

  }

 showToast(vote: boolean, message: string) {
    let toast = this.toastCtrl.create({
      duration: 3000,
      position: 'bottom',
      message: message,
    });

    (vote === true) ? toast.setCssClass('GreenToast') : toast.setCssClass('RedToast');
    toast.present();
  }

}