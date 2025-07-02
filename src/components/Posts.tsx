import Link from "next/link";

export default async function Posts() {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  interface PostType {
    id: number;
    title: string;
    body: string;
  }

  return (
    <section className="mt-10 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:grid-cols-3">
      {posts.map(({ id, title, body }: PostType) => (
        <article
          key={id}
          className="flex max-w-xl flex-col items-start justify-between border border-gray-500 p-4 md:p-5 rounded-md"
        >
          <Link className="group" href={`/blog/${id}`}>
            <h3 className="mt-3 text-lg/8 capitalize font-semibold text-gray-900 group-hover:text-gray-600">
              {title.length > 30 ? title.slice(0, 30) + "..." : title}
            </h3>
            <p className="mt-5 line-clamp-3 text-sm/6 capitalize text-gray-600">
              {body.length > 100 ? body.slice(0, 100) + "..." : body}
            </p>
          </Link>
        </article>
      ))}
    </section>
  );
}
