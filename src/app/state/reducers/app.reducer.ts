import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../interfaces/app-state.interface';
import { DetailsPageReducer } from './details-page.reducer';
import { LocalStorageReducer } from './local-storage.reducer';
import { NotificationsReducer } from './notification.reducer';
import { ExplorePageReducer } from './explore-page.reducer';
import { CastPageReducer } from './cast-page.reducer';
import { InfoPageReducer } from './info-page.reducer';

const reducers: ActionReducerMap<AppState> = {
  LocalStorage: LocalStorageReducer,
  Details: DetailsPageReducer,
  Notifications: NotificationsReducer,
  Explore: ExplorePageReducer,
  Cast: CastPageReducer,
  Info: InfoPageReducer
};

export const appReducer = reducers;
