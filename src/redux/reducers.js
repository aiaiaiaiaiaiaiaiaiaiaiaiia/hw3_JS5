const initialaState = {
    books: [
        {
            title: "Harry",
            id: 1,
            auctor: "Tima",
            price: 18,
        },
        {
            title: "Harry",
            id: 2,
            auctor: "Tima",
            price: 18,
        },
        {
            title: "Harry",
            id: 3,
            auctor: "Tima",
            price: 18,
        }
    ],
    loading: true,
    error: false,
}

const reducer = (state = initialaState, action) => {
    switch(action.type) {
        case "FETCH_BOOKS_SUCCES":
        return {
            ...state,
            loading: false,
            error: false,
        }
        default:
            return state;
    }
}

export default reducer;