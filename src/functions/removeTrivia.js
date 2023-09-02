module.exports = async function (state, action, handler) {
    if(!state.trivias[action.caller]){
        state.trivias[action.caller]=[]
    }
    state.trivias[action.caller]= state.trivias[action.caller].filter(t=>t!=action.input.id)
    return {state}
}
/*function-description
Remove trivia from your registry.
function-description*/