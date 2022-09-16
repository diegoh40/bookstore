const AddBook = () => (
  <form className="form-container">
    <h1>ADD NEW BOOK</h1>
    <input
      type="text"
      className="input-text"
      placeholder="Add title..."
      name="title"
    />
    <input
      type="text"
      className="input-text"
      placeholder="Add author..."
      name="author"
    />
    <button type="submit" className="input-submit">Submit</button>
  </form>
);

export default AddBook;
