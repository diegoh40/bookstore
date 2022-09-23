export const getApiBooks = async () => {
  const res = await fetch('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SNrfPmddfbkjkjFTEEyB/books');
  const data = await res.json();

  const books = Object.entries(data)
    .map(([id, book]) => {
      const { title, author, category } = book[0];
      return {
        id,
        title,
        author,
        category,
      };
    })
    .sort((c, d) => c.title.localeCompare(d.title));
  return books;
};

export const addApiBooks = async ({
  id, title, author, category,
}) => {
  await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SNrfPmddfbkjkjFTEEyB/books',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: id,
        title,
        author,
        category,
      }),
    },
  );
};

export const removeApiBook = async (id) => {
  await fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/SNrfPmddfbkjkjFTEEyB/books/${id}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
