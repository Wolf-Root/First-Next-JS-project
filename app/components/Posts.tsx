export default async function Posts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  interface PostType {
    id: number;
    title: string;
    body: string;
  }

  return (
    <section className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map(({ id, title, body }: PostType) => (
        <article
          key={id}
          className="flex max-w-xl flex-col items-start justify-between"
        >
          <div className="group">
            <h3 className="mt-3 text-lg/8 font-semibold text-gray-900 group-hover:text-gray-600">
              {title}
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{body}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
