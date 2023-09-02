module.exports = async function (state, action, handler) {
    if(!state.trivias[action.input.address]){
        state.trivias[action.input.address]=[]
    }
    state.trivias[action.input.address]= state.trivias[action.input.address].filter(t=>t!=action.input.id)
    return {state}
}
/*function-description
Remove trivia from your registry.
function-description*/