"use client";

import { UsersRound } from "lucide-react";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface CandidateProps {
  name: string;
  image: string;
  color: string;
  votes: number;
  total: number;
}

const Candidate: React.FC<CandidateProps> = ({ name, image, color, votes, total }) => {
  let votesPercentage = ((votes * 100) / total).toFixed(2);
  if(isNaN(Number(votesPercentage))) votesPercentage = "0";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="w-20 h-20 rounded-md bg-neutral-200">
            <Image src={image} width={100} height={100} className="object-cover rounded-md" alt={`Imagem candidato ${name}`} />
          </div>
          <span className="text-xl font-bold">{name}</span>
        </div>
        <div className="flex flex-col items-end gap-3 text-neutral-600">
          <span className="text-2xl">{votesPercentage} %</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <span className="text-sm flex items-center cursor-pointer hover:text-neutral-800">{votes.toLocaleString('pt-BR')}<UsersRound className="h-4 w-4 ml-1" /></span>
              </TooltipTrigger>
              <TooltipContent side="left" className="py-1">
                <span className="text-xs">Número de votantes</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div className="h-8 bg-neutral-200">
        <div className={`h-8 ${color}`} style={{ width: `${votesPercentage}%` }} >
        </div>
      </div>
    </div>
  );
}

export default Candidate;