import Card from "@/components/Card/Card";
import FeaturedBlogs from "@/components/FeaturedBlog/FeaturedBlog";
import SubscribeToBlog from "@/components/SubscribeToBlog/SubscribeToBlog";

export default function Home() {
  const data = [
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1675008166610-deb4c5c62ddc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div>
      <div className="hero-section flex flex-col items-center font-medium my-12 gap-2">
        <span>The blog</span>
        <h1 className="text-5xl font-medium">Writings from our team</h1>
        <p>
          The latest industry news , interviews , technologies and resources.
        </p>
      </div>

      <FeaturedBlogs />
      <Card data={data} />
      <SubscribeToBlog />
    </div>
  );
}
