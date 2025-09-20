import { Logo } from "@/components/icons/Icons";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-[500px] h-[500px] flex flex-col justify-center items-center mb-10 bg-white rounded-lg shadow-lg">
        <div className="icon_div flex flex-row gap-2 items-center">
          <Logo />
          <h1 className="icon_text">Tally</h1>
        </div>
        <button>Log In with Google</button>
      </div>

      <footer>
        <h1>F25 Lava Dev Challenge</h1>
        <p>By Karen Mkrtchyan</p>
      </footer>
    </div>
  );
}
