import { HomeBox } from "@/components/homeBox";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <HomeBox>
      <h1 className="text-2xl font-bold text-center">Should I Switch?</h1>
      <hr className="text-white/20 w-1/3 mx-auto my-1"></hr>
      <p className="text-center">Take the quiz below to find out if switching to Linux is the right move for you</p>

      <Button href='/quiz' className="mx-auto mt-3">Start Quiz</Button>
    </HomeBox>
  );
}
