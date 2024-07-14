import Candidate from "@/components/Candidate";

export default function Home() {
  const total = 835367;

  return (
      <div className="flex flex-col gap-16 max-w-4xl mx-auto my-10">
        <Candidate name="Nuno Ribeiro" image="/images/candidateOne.png" color="bg-red-500" votes={445873} total={total} />
        <Candidate name="Maximiliano Silva" image="/images/candidateTwo.png" color="bg-blue-950" votes={245121} total={total} />
        <Candidate name="Francisca Martins" image="/images/candidateOne.png" color="bg-green-500" votes={144373} total={total} />
      </div>
  );
}
