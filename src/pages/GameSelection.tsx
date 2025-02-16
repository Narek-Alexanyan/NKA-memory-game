import { Link } from "react-router";
import { IconButton } from "../components/buttons/IconButton";
import { CardCrystals } from "../components/ui/CardCrystals";

export const GameSelection = () => {
  return (
    <section className="">
      <header className="bg-space-cadet px-4 pb-3 pt-6">
        <nav className="flex items-center justify-center relative">
          <IconButton
            name="chevron-left"
            size={28}
            className="absolute left-0 top-1/2 transform -translate-y-1/2"
          />
          <h1 className="text-2xl">Games</h1>
        </nav>
      </header>

      <div className="pt-12">
        <div className="flex flex-column gap-6 items-center justify-center px-8">
          <Link to="/" className="w-full">
            <div className="w-full h-24 rounded-lg px-8 py-3 bg-patrick-blue hover:bg-patrick-blue/50 transition-colors flex justify-between items-center">
              <CardCrystals />
              <p className="text-xl">Flip Memory Game</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
