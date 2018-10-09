import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Fruit, ExampleFruitsService } from '../../services/example-fruits';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { ToastService } from '../../services/toast';


@Component({
  selector: 'page-detail-fruit',
  templateUrl: 'detail-fruit.html',
})

export class DetailFruitPage implements OnInit {

  public fruit: Fruit;
  public form: FormGroup;

  isLoading: boolean = false;
  isError: boolean = false;
  private subscription: Subscription;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private toastService: ToastService,
    private formBuilder: FormBuilder,
    private exampleFruitsService: ExampleFruitsService) {

      this.exampleFruitsService = exampleFruitsService;
  }

  ngOnInit(): void {
    this.fruit = this.navParams.get('fruit');
    this.form = this.formBuilder.group({
      description: [this.fruit.description],
    });
  }

  formFruitDetailSubmitted(){
    this.isLoading = true;
    this.fruit.description = this.form.value.description;
    this.subscription = this.exampleFruitsService.updateFruit(this.fruit)
      .subscribe( () => {
        this.isLoading = false;
        this.isError = false;
        this.toastService.showToast(true,`Actualización realizada con éxito sobre ${this.fruit.name}`);
      },() => {
        this.isLoading = false;
        this.isError = true;
        this.toastService.showToast(false,`Actualización realizada con éxito sobre ${this.fruit.name}`);
      });
  }
}
