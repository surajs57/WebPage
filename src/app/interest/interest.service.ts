import{Injectable} from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { IInterest } from './interest';
import { Observable } from 'rxjs';
import { map  } from 'rxjs/operators';

@Injectable()
export class InterestService{


    private url: string="https://localhost:44316/api/interest";
    constructor(private http: HttpClient){}

    getInterest():Observable<IInterest[]>{
        return this.http.get<IInterest[]>(this.url);
    }
}