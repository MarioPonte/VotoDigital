"use client";

import { UsersRound } from "lucide-react";
import Image from "next/image";

interface CandidateProps{
    name: string;
    image: string;
    color: string;
    votes: number;
    total: number;
}

const Candidate: React.FC<CandidateProps> = ({ name, image, color, votes, total }) =>{
  let votesPercentage = ((votes*100)/total).toFixed(2);

  return (
      <div className="flex flex-col gap-7">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <div className="w-24 h-24 rounded-md bg-neutral-200">
              <Image src={image} width={100} height={100} className="object-cover rounded-md" alt="Imagem candidato um"/>
            </div>
            <span className="text-xl font-bold">{name}</span>
          </div>
          <div className="flex flex-col items-end gap-3 text-neutral-600">
            <span className="text-2xl">{votesPercentage} %</span>
            <span className="text-sm flex items-center">{votes}<UsersRound className="h-4 w-4 ml-1" /></span>
          </div>
        </div>

        <div className="h-10 bg-neutral-200">
          <div className={`h-10 ${color}`} style={{ width: `${votesPercentage}%` }} >
          </div>
        </div>
      </div>
  );
}

export default Candidate;