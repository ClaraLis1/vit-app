import { Layout } from "@/components/layout/Layout";
import ContactForm from "@/components/ui/contactForm/ContactForm";
import { NextPage } from "next";

const contacto : NextPage = ()=>{
    return(
        <Layout title='contacto'>
            <ContactForm/>
        </Layout>
    )
}

export default contacto;