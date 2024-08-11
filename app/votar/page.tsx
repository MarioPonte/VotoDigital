import Image from "next/image";

export default function Votar() {
    return (
        <div className="flex flex-col gap-12 max-w-4xl mx-auto my-10">
            <h1 className="text-2xl font-semibold">Candidato a Presidente da República</h1>
            <div className="flex justify-between">
                <div>
                    Nome: Nuno Ribeiro
                </div>
                <div className="w-80 h-80 rounded-md bg-neutral-200 border">
                    <Image src="/images/candidateOne.png" width={400} height={400} className="object-cover rounded-md" alt="Imagem candidato" />
                </div>
            </div>
        </div>
    );
}
