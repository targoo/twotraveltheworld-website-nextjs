const Blog = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  return (
    <div>
      <h1>Blog {id}</h1>
    </div>
  );
};

export default Blog;
