import Navbar from "@/components/home-page/navbar/navbar"
import { ReactNode } from "react"
import { Inter } from "next/font/google";

type Props = {
    children: ReactNode
}

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: Props) {
    return (
        <main className={`container mx-auto  ${inter.className} `}>
            <section className="pt-8">
                <Navbar />
            </section>
            <section>
                {children}
            </section>
        </main>
    )
}