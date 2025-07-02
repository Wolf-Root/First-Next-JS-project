import { Metadata } from "next";
import notFound from "../../not-found";

export const metadata: Metadata = {
  title: "Post",
  description: "Ths Is My First Next JS project",
};

interface PostType {
  title: string;
  body: string;
  userId: number;
}

interface UserType {
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!data.ok) {
    return notFound();
  }
  const post: PostType = await data.json();
  const { title, body, userId } = post;

  const userFetch = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const user: UserType = await userFetch.json();
  const { name, username, email, address, phone, website, company } = user;

  return (
    <section className="min-h-screen container mx-auto pt-20 flex flex-col gap-10 capitalize">
      <h1>{title}</h1>
      <div className="border-t border-gray-200 pt-5 ">
        <p className="!text-xl text-gray-700">{body}</p>
      </div>

      <div className="border-t border-gray-200 pt-5 ">
        <h2 className="!text-2xl text-gray-700">
          {name} ({username})
        </h2>
        <ul className="!text-2xl text-gray-700">
          <li>{email}</li>
          <li>
            {address.street} {address.suite} {address.city} {address.zipcode}
          </li>
          <li>{phone}</li>
          <li>https://{website}</li>
          <li>
            {company.name} {company.catchPhrase} {company.bs}
          </li>
        </ul>
      </div>
    </section>
  );
}
