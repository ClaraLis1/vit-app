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

	return (
		// <div className={styles.card} onClick={handleClick}>
		<div className={styles.card}>			
			<h3>{product.title}</h3>
			<p>{product.position}</p>			
			<Image
                src={product.image}
				alt={product.title}
				width={260}
				height={158}				
				loading="lazy"
				decoding="async"
				// sizes="(min-width: 66em) 33vw,
				// (min-width: 44em) 50vw,
				// 100vw"
				
				
				// priority={true}
			/> 
		</div>
		
	);
};