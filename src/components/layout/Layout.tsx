import Head from "next/head";
import { FC } from "react";
import { Navbar } from '../ui/navbar';
import { Footer } from "../ui/footer/Footer";

interface Props {
  children: React.ReactNode;
  title: string
  description?: string
  keywords?: string
}

export const Layout: FC<Props> = ({children, title, description, keywords}) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="author" content="Clara Lisle" />
				<meta
					name="description"
					content={description || "Vita Negocios agropecuarios."}
				/>
				<meta
					name="keywords"
					content={keywords || "Vita Negocios agropecuarios"}
				/>
				{/*Información compartida en redes sociales. Estos metadatos ayudan a las redes sociales y plataformas a mostrar vistas previas enriquecidas cuando los enlaces de la página se comparten. */}
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description || "Vita Negocios agropecuarios."} />
				<meta property="og:type" content="website" />
				<meta property='og:image' content='/logo.jpg' />

				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Redes sociales */}
				<meta property='og:title' content={title || "Vita Negocios agropecuarios"} />
				<meta property='og:description' content={description || "Vita Negocios agropecuarios."} />
				<meta property='og:image' content='/img/logo.jpg' />
				<meta property='og:type' content='website' />
				<link rel="icon" href="/favicon.ico" />
				<meta charSet='utf-8' />
      </Head>
      	<Navbar />
      <main>
		{children}
		</main>
      <Footer/>
		</>
	);
};