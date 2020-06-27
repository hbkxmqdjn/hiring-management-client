import {combinedReducers} from 'redux'
function xxx(state = 0,action){
    return state;
}
function yyy(state = 0,action){
    return state;
}
export default combinedReducers({
    xxx,
    yyy
})