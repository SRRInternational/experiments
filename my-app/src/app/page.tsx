import TestDialog from "@/components/dialog";
import LogInBtn from "@/components/logInBtn";



export default function Home() {
  return (
    <main className="flex min-h-screen space-x-1  items-center justify-center p-24 ">
      <TestDialog  />
      <LogInBtn />
    </main>
  );
}
