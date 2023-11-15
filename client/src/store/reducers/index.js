import uiReducer from "./uiReducer";
import agenciesReducer from "./agenciesReducer";
import authReducer from "./authReducer";

const reducers = {
    agencies: agenciesReducer,
    auth: authReducer,
    ui: uiReducer
}

export default reducers