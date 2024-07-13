import { UsersRound } from "lucide-react";
import Image from "next/image";

interface CandidateProps{
    name: string;
}

const Candidate: React.FC<CandidateProps> = ({ name }) =>{
  return (
      <div className="flex flex-col gap-7">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <div className="w-24 h-24 rounded-md bg-neutral-200">
              <Image src="/images/candidateOne.png" width={100} height={100} className="object-cover rounded-md" alt="Imagem candidato um"/>
            </div>
            <span className="text-xl font-bold">{name}</span>
          </div>
          <div className="flex flex-col gap-3 text-neutral-600">
            <span className="text-2xl">49,17 %</span>
            <span className="text-sm flex items-center">2.433.982 <UsersRound className="h-4 w-4 ml-1" /></span>
          </div>
        </div>

        <div className="h-10 bg-neutral-200">
          <div className="h-10 w-[49.17%] bg-red-500">
          </div>
        </div>
      </div>
  );
}

export default Candidate;