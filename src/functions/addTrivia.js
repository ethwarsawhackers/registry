module.exports = async function (state, action, handler) {
    if(!state.trivias[action.input.address]){
        state.trivias[action.input.address]=[]
    }
    state.trivias[action.input.address].push(action.input.id)
    return {state}
}
/*function-description
Add trivia to your registry.
function-description*/