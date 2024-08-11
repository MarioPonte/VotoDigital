import Candidate from "@/components/Candidate";
import { candidatesData } from "./candidatesData";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Home() {

  let nullVotes = 6230;
  let total = nullVotes;
  candidatesData.forEach(candidate => total += candidate.votes);
  candidatesData.sort((a, b) => b.votes - a.votes);
  let nullVotesPercentage = ((nullVotes * 100) / total).toFixed(2);

  return (
    <>
      <div className="flex flex-col gap-12 max-w-4xl mx-auto my-10">
        {candidatesData.map(candidate => (
          <Candidate key={candidate.id} name={candidate.name} image={candidate.image} color={candidate.color} votes={candidate.votes} total={total} />
        ))}
        <div className="flex gap-10">
          <Card className="w-full font-semibold">
            <CardHeader className="text-xl text-center">
              Votos Válidos
            </CardHeader>
            <CardContent className="text-3xl text-center">
              {100 - Number(nullVotesPercentage)} %
            </CardContent>
          </Card>
          <Card className="w-full font-semibold">
            <CardHeader className="text-xl text-center">
              Votos Nulos
            </CardHeader>
            <CardContent className="text-3xl text-center">
              {nullVotesPercentage} %
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
