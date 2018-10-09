import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ConfigService{

    public langLoaded =  new Subject<void>();

    constructor(private translate: TranslateService){

    }

    setLanguage(lang: string){
        this.translate.use(lang).subscribe(() =>{
            this.langLoaded.next();
        } )
        //this.translate.use(lang);
    }
}