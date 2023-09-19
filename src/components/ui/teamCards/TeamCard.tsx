import {FC} from "react";
import Image from "next/image";
import {useRouter} from "next/router";
import { TeamI } from "@/interface/team";
import styles from '@/components/ui/teamCards/teamCard.module.css'


interface Props {
	team: TeamI;
	
}

export const TeamCard: FC<Props> = ({team}) => {
	
	const router = useRouter();    

	return (
		// <div className={styles.card} onClick={handleClick}>
		<div className={styles.container}>	
			<div>
				<Image
					src={team.image}
					alt={team.title}
					width={300}
					height={300}
					/> 
					<h3>{team.title}</h3>
					<p>{team.position}</p>			
			</div>		
		</div>
		
	);
};