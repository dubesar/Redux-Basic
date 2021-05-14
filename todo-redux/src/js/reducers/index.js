import { ADD_TASK } from "../constants/action-type";

let initialState = {
    currentTask : ["take bath and come"]
}

function rootReducer(currentState = initialState, action) {

    switch(action.type) {
        case ADD_TASK :
            console.log("hello")
            return Object.assign({}, currentState, {
                currentTask: currentState.currentTask.concat(action.payload)
            });
        default:
            return currentState
    }
}

export default rootReducer;