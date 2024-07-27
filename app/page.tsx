import Candidate from "@/components/Candidate";
import { candidatesData } from "./candidatesData";
import Navbar from "@/components/Navbar";

export default function Home() {

  let total = 0;
  candidatesData.forEach(candidate => total += candidate.votes);
  candidatesData.sort((a, b) => b.votes - a.votes);

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-12 max-w-4xl mx-auto my-10">
        {candidatesData.map(candidate => (
          <Candidate key={candidate.id} name={candidate.name} image={candidate.image} color={candidate.color} votes={candidate.votes} total={total} />
        ))}
      </div>
    </>
  );
}
