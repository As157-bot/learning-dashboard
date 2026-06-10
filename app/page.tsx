import { createSupabaseServerClient } from "@/utils/supabase/server";
import HeroTile from "@/components/HeroTile";
import CourseCard from "@/components/CourseCard";
import ActivityTile from "@/components/ActivityTile";
import AnimatedContainer from "@/components/AnimatedContainer";
import FadeInTile from "@/components/FadeInTile";
import Sidebar from "@/components/Sidebar";
type Course = {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
};

export default async function Home() {
  const supabase = createSupabaseServerClient();


  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    if (error) {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1>Failed to load courses</h1>
    </main>
  );
}
  }

 return (
  <main className="min-h-screen bg-black text-white p-6">

    <nav className="mb-4 flex items-center justify-between rounded-3xl border border-zinc-800 bg-zinc-900 p-4 md:hidden">
      <h2 className="font-bold">Dashboard</h2>
    </nav>

    <div className="grid grid-cols-12 gap-4">
      <div className="hidden md:block lg:col-span-2">
  <Sidebar />
</div>
       <section className="col-span-12 lg:col-span-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <AnimatedContainer>

    <FadeInTile>
      <HeroTile />
    </FadeInTile>

    {courses?.map((course: Course) => (
      <FadeInTile key={course.id}>
        <CourseCard course={course} />
      </FadeInTile>
    ))}

    <FadeInTile>
      <ActivityTile />
    </FadeInTile>

  </AnimatedContainer>
</section>
      </div>
    </main>
  );
}