const logger = store => next => action => {
    console.group(action.type)
    console.log("Action: ", action)
    console.log("PrevState: ", store.getState())
    const returnValue = next(action)
    console.log("NewState:  ", store.getState())
    console.groupEnd()
    return returnValue
}

export default logger