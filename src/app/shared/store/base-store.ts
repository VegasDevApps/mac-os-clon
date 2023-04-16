import { BehaviorSubject, Observable, distinctUntilChanged, map } from "rxjs";
import { State } from "./state.interface";

export class BaseStore {
    private state$: BehaviorSubject<State>;

    protected get state(): State {
        return this.state$.getValue();
    }

    constructor(initialState: State){
        this.state$ = new BehaviorSubject<State>(initialState);
    }

    protected select<K>(mapFn: (state: State) => K): Observable<K>{
        return this.state$.asObservable().pipe(
            map((state: State) => mapFn(state)),
            distinctUntilChanged()
        );
    }

    protected setState(newState: Partial<State>){
        this.state$.next({
            ...this.state,
            ...newState
        });
    }
}