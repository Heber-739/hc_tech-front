import { firstValueFrom, Observable } from "rxjs";
import { PromiseResult } from "../../../interfaces/promise-response";
import storeService from "../../services/store-service";

export const promiseHandler = async <T>(observable:Observable<T>): Promise<PromiseResult<T>> => {
  try {
    const response: T = await firstValueFrom(observable);
    return { data:response, error:null }
  } catch (error:any) {
    return { data:null, error:error }

  }

}
