import Candidate from "@/components/Candidate";

export default function Home() {
  return (
    <div className="mx-96 my-10">
      <div className="flex flex-col gap-16">
        <Candidate name="Nuno Ribeiro" />
        <Candidate name="Maximiliano Silva" />
        <Candidate name="Francisca Martins" />
      </div>
    </div>
  );
}
