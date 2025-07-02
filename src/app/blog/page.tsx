import { Metadata } from "next";
import Posts from "../../components/Posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Ths Is My First Next JS project",
};

export default function Blog() {
  return (
    <section className="bg-white py-24 sm:py-32 min-h-screen">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            From the blog
          </h1>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <Posts />
      </div>
    </section>
  );
}
