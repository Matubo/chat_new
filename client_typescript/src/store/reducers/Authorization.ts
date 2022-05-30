import {
	AuthorizationActionTypes,
	AuthorizationAction,
} from '../../types/actions/AuthorizationActions';
import { IAuthorization } from '../../types/states/AuthorizationTypes';

const initialState: IAuthorization = {
	authorized: false,
	username: null,
};

export const authorizationReducer = (
	state = initialState,
	action: AuthorizationAction
): IAuthorization => {
	switch (action.type) {
		case AuthorizationActionTypes.LOG_IN:
			const { username } = action.payload;
			return {
				authorized: true,
				username,
			};
		case AuthorizationActionTypes.LOG_OUT:
			return {
				authorized: false,
				username: null,
			};
		default:
			return state;
	}
};
