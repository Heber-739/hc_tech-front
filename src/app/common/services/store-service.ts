import { BehaviorSubject, first, firstValueFrom } from "rxjs";

class StoreService {

  private store: {[key:string]:BehaviorSubject<any>} = {}

  get<T>(key:string):T{
    return this.store[key]?.getValue() as T;
  }

  set<T>(key:string,data:T){
    if(!this.store[key]){
      this.store[key] = new BehaviorSubject<T>(data)
    } else {
      this.store[key].next(data);
    }
  }

  async getWhenExist<T>(key:string):Promise<T>{
    if(!this.store[key]) {
      this.set(key, undefined)
    }
    return firstValueFrom(this.store[key].pipe(
      first((value)=> !!value)
    ));
  }

  getObservable<T>(key:string): BehaviorSubject<T>{
    if(!this.store[key]) {
      this.set(key, undefined)
    }
    return this.store[key];
  }

  clear(){
    this.store = {};
  }

}
const storeService = new StoreService();

export default storeService;
