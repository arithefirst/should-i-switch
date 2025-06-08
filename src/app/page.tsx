import { HomeBox } from "@/components/homeBox";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <HomeBox>
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <div className="text-6xl mb-4">🐧</div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            Should I Switch to Linux?
          </h1>
          <hr className="border-white/20 w-1/3 mx-auto" />
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Is Linux the right move for you? Take this short quiz to find out.
          </p>
        </div>

        <div className="mt-8 space-y-3">
          <Button href='/quiz' className="mx-auto text-lg px-8 py-3">
            Start Quiz
          </Button>
          <p className="text-sm text-gray-500">
            Takes about 2-3 minutes to complete
          </p>
        </div>
      </div>
    </HomeBox>
  );
}