const Blog = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div>
      <h1>Blog {id}</h1>
    </div>
  );
};

export default Blog;
