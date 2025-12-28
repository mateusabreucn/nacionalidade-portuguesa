import { NomeEquipa } from "../../enums/NomeEquipa";
import CardFoto from "./CardFoto";

export default function EquipaMembersMobile() {
  return (
    <div className="w-full flex flex-row sm:mt-6 md:mt-8 sm:mb-4 gap-x-6 sm:gap-x-10 md:gap-x-12 items-center justify-evenly order-2 lg:hidden">
      <div className="w-1/4">
        <CardFoto
          src={`/Equipa - ${NomeEquipa.ThaysaBBarbosa}.jpg`}
          nome={NomeEquipa.ThaysaBBarbosa}
        />
      </div>
      <div className="w-1/4">
        <CardFoto
          src={`/Equipa - ${NomeEquipa.LucianaFAlvarino}.jpg`}
          nome={NomeEquipa.LucianaFAlvarino}
        />
      </div>
      <div className="w-1/4">
        <CardFoto
          src={`/Equipa - ${NomeEquipa.MargarethLeith}.jpg`}
          nome={NomeEquipa.MargarethLeith}
        />
      </div>
    </div>
  );
}
