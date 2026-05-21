import Banner from "@/components/home/Banner";
import FAQ from "@/components/home/FAQ";
import TopRatedDoctors from "@/components/home/TopRatedDoctors";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <div className="mt-10 max-w-7xl mx-auto px-2 xl:px-0">
        <TopRatedDoctors />
        <WhyChooseUs />
        <FAQ />
      </div>
    </div>
  );
}
