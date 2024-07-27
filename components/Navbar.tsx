import Image from "next/image";

export default function Navbar() {
    return (
        <div className="flex justify-center bg-neutral-50 border-b border-neutral-300 py-1">
            <Image alt="VotoDigital Logo" src="/images/VotoDigitalLogo.png" width={100} height={100} />
        </div>
    );
}
