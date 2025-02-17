import { Button } from "../components/buttons/Button";
import { CardCrystals } from "../components/ui/CardCrystals";
import { useNavigate } from "react-router";


export const MainMenu = () => {
    const navigate = useNavigate();

    const handleExit = () => {
        navigate("/")
    }

  return (
    <section>
      <div className="py-12 flex-center">
        <CardCrystals />
      </div>
      <div className="bg-slate-blue uppercase text-4xl px-6 py-8 text-center tracking-wider border-y-8 border-grape">
        Flip Memory Game
      </div>
      <div className="flex items-center justify-center flex-col mt-6 gap-3 px-32">
        <Button>Play</Button>
        <Button>history</Button>
        <Button>settings</Button>
        <Button onClick={handleExit}>exit</Button>
      </div>
    </section>
  );
};
