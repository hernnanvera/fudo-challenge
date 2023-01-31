import { Outlet } from "@remix-run/react";
import Footer from "~/components/footer";
import Header from "~/components/header";

export default function Index() {

    return (
        <>
            <Header logo="/icons/logo-fudo.png" logoAlt="fudo logo" logoTitle="Fudo Challenge" />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )


}