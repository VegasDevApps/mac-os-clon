import { Injectable } from '@angular/core';
import { BaseStore } from './base-store';
import { State } from './state.interface';
import { DESKTOP } from '../config/applications';
import { Observable } from 'rxjs';

const initialState: State = {
    activeApplication: DESKTOP,
    selectedFolderIds: [],
    deletedFolderIds: [],
    folders: []
}

@Injectable({providedIn: 'root'})
export class StoreService extends BaseStore{
    
    activeApplication$: Observable<string> = this.select((state) => {
        return state.activeApplication;
    });

    constructor() {
        super(initialState);
    }
    
    setActiveApplication(activAppId = DESKTOP){
        this.setState({
            activeApplication: activAppId
        });
    }
}