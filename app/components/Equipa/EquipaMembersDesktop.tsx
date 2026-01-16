import { NomeEquipa } from "../../enums/NomeEquipa";
import CardFoto from "./CardFoto";

export default function EquipaMembersDesktop() {
  return (
    <div className="hidden lg:flex relative w-full lg:mt-32 xl:mt-40 gap-14 xl:gap-20 flex-row items-center justify-center">
      <div className="w-1/2 md:w-1/4 lg:w-1/5">
        <CardFoto
          src={`/Equipa/${NomeEquipa.ThaysaBBarbosa}.jpg`}
          nome={NomeEquipa.ThaysaBBarbosa}
        />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/5">
        <CardFoto
          src={`/Equipa/${NomeEquipa.LucianaFAlvarino}.jpg`}
          nome={NomeEquipa.LucianaFAlvarino}
        />
      </div>
      <div className="w-1/2 md:w-1/4 lg:w-1/5">
        <CardFoto
          src={`/Equipa/${NomeEquipa.MargarethLeith}.jpg`}
          nome={NomeEquipa.MargarethLeith}
        />
      </div>
    </div>
  );
}
