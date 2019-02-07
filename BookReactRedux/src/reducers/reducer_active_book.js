//state argument != app state, == state reducer responsible for
export default function(state=null, action) {
    //don't modify old state here, return a new state to replace old one
    switch(action.type) {
        case "BOOK_SELECTED":
            console.log("active payload->",action.payload);
            return action.payload;
    }
    return state;
}