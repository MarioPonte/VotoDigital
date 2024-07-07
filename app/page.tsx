export default function Home() {
  return (
    <div className="mx-96 my-10">

      <div className="flex flex-col gap-7">
        <div className="flex justify-between items-center">
          <div className="flex gap-5 items-center">
            <div className="w-24 h-24 rounded-md bg-neutral-200" />
            <span className="text-xl font-bold">Nuno Ribeiro</span>
          </div>
          <div className="flex flex-col gap-3 text-neutral-600">
            <span className="text-2xl">49,17 %</span>
            <span className="text-sm">2.433.982</span>
          </div>
        </div>

        <div className="h-10 bg-neutral-200">
          <div className="h-10 w-[49.17%] bg-red-500">
          </div>
        </div>
      </div>
      
    </div>
  );
}
