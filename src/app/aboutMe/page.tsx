import {Section} from "@/app/components/section";

export default function Page() {
    return (
        <>
            <Section.Header title={"Sobre mim"}/>
            <Section.Body>
                <div className={"flex justify-between gap-3"}>
                    <div className={"p-6"}>
                        <p className={"text-gray-400 font-normal text-pretty"}>Hey, there 👋🏻 hi Im Benjamin, a Software
                            developer and Data scientist with over 8+ years of
                            experience, specialising in Java and React. Also I proficient at using tools and programming
                            languages such as Python or SQL to manipulate and analyze data.</p>
                    </div>
                    <div className={"border border-gray-700 border-t-0 p-6"}>
                        <p>Hey, there hi Im Benjamin, a Software developer and Data scientist with over 8+ years of
                            experience, specialising in Java and React. Also I proficient at using tools and programming
                            languages such as Python or SQL to manipulate and analyze data.</p>
                    </div>
                </div>
            </Section.Body>
            <Section.Header title={"Meus serviços"}/>
        </>
    )
}
