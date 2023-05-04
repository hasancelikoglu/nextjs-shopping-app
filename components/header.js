import Link from "next/link";
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";

export default function Header() {
	return (
		<header className="py-5 px-14 flex justify-between items-center w-full border-b">
			<Link href="/" className="text-2xl font-bold">
				APP
			</Link>
			<div className="flex gap-x-16 flex-grow justify-center mx-auto">
				<Link href="/">Erkek</Link>
				<Link href="/">Kadın</Link>
				<Link href="/">Çocuk</Link>
			</div>
			<div className="flex items-center gap-x-8">
				<Link href="/cart">
					<IoBagOutline size={22} />
				</Link>
			</div>
		</header>
	);
}
