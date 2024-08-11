import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="flex justify-center bg-neutral-50 border-b border-neutral-300 py-1">
                <Image alt="VotoDigital Logo" src="/images/VotoDigitalLogo.png" width={100} height={100} />
            </div>
            <div className="flex justify-center gap-4 text-neutral-600 border-b border-neutral-200 py-1">
                <Link href="/votar">Votar</Link>
                <Link href="/">Resultados</Link>
            </div>
        </>
    );
}
