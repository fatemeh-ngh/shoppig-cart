const shorter = title => {
    const splitedTitle = title.split(" ");
    const newTitle = `${splitedTitle[0]} ${splitedTitle[1]}`;
    return newTitle;
}

const isInCart = (state, id) => {
    const result = !!state.selectedItems.find(item => item.id === id)
    return result;
}
const quantityCount = (state, id) => {
    const Index = state.selectedItems.findIndex(item => item.id === id);
    if(Index === -1) {
        return false
    } else{
        return state.selectedItems[Index].quantity
    }
}

export {shorter, isInCart, quantityCount}