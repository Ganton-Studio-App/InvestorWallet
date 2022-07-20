interface AuthState {
	pending: boolean;
	token: string | null;
}

const initialState: AuthState = {
	pending: false,
	token: null,
};

export default (
	state = initialState,
	action: { type: string; payload: any }
): AuthState => {
	const { type } = action;
	console.log('tes', action, type);
	return state;
};
