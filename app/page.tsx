import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="min-h-[60vh] border rounded mx-4 lg:max-w-5xl xl:max-w-7xl w-auto my-4 md:mx-auto p-4 grid place-content-center bg-gray-50">
        Main Section
      </main>
      <Footer />
    </div>
  );
}
