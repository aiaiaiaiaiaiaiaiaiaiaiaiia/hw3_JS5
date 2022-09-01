const booksLoaded = (newBooks) => {
    return {
        type: "FETCH_BOOKS_SUCCES", 
        payload: newBooks,
    }
}

export {booksLoaded};