import { Introduction } from "@/components/Introduction/Intoduction";
import { CourseContent } from "@/components/CourseContent/CourseContent";
import { CourseBuyArea } from "@/components/CourseBuyArea/CourseBuyArea";
import { DevelopingGamesCarousel } from "@/components/DevelopingGamesCarousel/DevelopingGamesCarousel";
import { AboutAndreYoung } from "@/components/AboutAndreYoung/AboutAndreYoung";
import { CourseGameJam } from "@/components/CourseGameJam/CourseGameJam";
import { GamesByStudents } from "@/components/StudentsGamesCarousel/StudentsGamesCarousel";
import { CurriculumList } from "@/components/CourseCurriculum/CourseCurriculum";

import { Border } from "@/components/Border/Border";
import { Footer } from "@/components/Footer/Footer";
import { Background } from "@/components/Background/Background";

export default function Home() {
  return (
    <>
      <Background />
      <Introduction />
      <Border />
      <CourseContent />
      <CourseBuyArea />
      <DevelopingGamesCarousel />
      <AboutAndreYoung />
      <CourseGameJam />
      <Border />
      <GamesByStudents />
      <CurriculumList />
      <Footer />
    </>
  )
}
