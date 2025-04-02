export function getBook(books, id) {
  return books.findIndex((book) => book.id === Number(id))
}
