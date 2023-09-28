import {FC} from "react";
import Image from "next/image";
import styles from "./Card.module.css";
import {useRouter} from "next/router";
import { Product } from "@/interface/product";


interface Props {
	product: Product;

}

export const Card: FC<Props> = ({product}) => {
	
	const router = useRouter();  

	  
	const handleClick = ()=>{
		router.push(`/unidades-negocio/${product?.path}`)
	}


	return (
	
		<div className={styles.card} onClick={handleClick}>			
			<h3>{product.title}</h3>
			<p className={styles.text}>{product.position}</p>			
			<Image
                src={product.image}
				alt={product.title}

				width={260}
				height={158}				
				loading="lazy"
				decoding="async"
				style={{borderRadius: '10px', margin: '0 auto'}}
			/> 
			<span className={styles.button}>Mas info</span>
		</div>
		
	);
};