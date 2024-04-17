function CommentList({ comments }) {
  function getFirstLetter(str) {
    // Remove any leading/trailing whitespace from the string
    str = str.trim();

    // Check if the trimmed string is not empty
    if (str.length > 0) {
      // Return the first character of the string
      return str.charAt(0);
    } else {
      // Return an empty string if the input is an empty string
      return "";
    }
  }
  console.log(comments);
  return (
    <div className="container bg-brown py-16 ">
      {comments.count > 0 ? (
        <ul className="flex flex-col gap-4">
          {comments.data.map((comment) => (
            <li
              className="py-8 flex flex-col gap-4 bg-tertiary px-4 rounded-lg "
              key={comment._id}
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center justify-center">
                  <div className="bg-brown text-white text-2xl rounded-full px-4 py-2 uppercase ">
                    {getFirstLetter(comment.name)}
                  </div>
                  <h3 className="font-meddons text-brown font-light capitalize">
                    {comment.name}
                  </h3>
                </div>
                {comment.createdAt && (
                  <p className="font-popins font-thin text-sm">
                    {new Date(comment.createdAt).toLocaleDateString()}
                  </p>
                )}
              </div>
              <p>{comment.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No comments found.</p>
      )}
    </div>
  );
}

export default CommentList;
