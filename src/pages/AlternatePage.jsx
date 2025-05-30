import Header2 from "../components/Header2";
import KnowMe from "../components/KnowMe";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";
import BookCarousel from "../components/BookCarousel";
import PageContainer from "../components/PageContainer";

export default function AlternatePage() {
  return (
    <PageContainer>
      <Header2 />
      <KnowMe />
      <Timeline />
      <BookCarousel />
      <Footer />
    </PageContainer>
  );
}