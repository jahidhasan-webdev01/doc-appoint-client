import Banner from "@/components/home/Banner";
import FAQ from "@/components/home/FAQ";
import TopRatedDoctors from "@/components/home/TopRatedDoctors";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopRatedDoctors />
      <WhyChooseUs />
      <FAQ />
    </div>
  );
}
