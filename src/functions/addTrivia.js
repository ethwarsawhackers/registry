module.exports = async function (state, action, handler) {
    if(!state.trivias[action.caller]){
        state.trivias[action.caller]=[]
    }
    state.trivias[action.caller].push(action.input.id)
    return {state}
}
/*function-description
Add trivia to your registry.
function-description*/