import { ProfileContainer, ProfileInfos, ProfilePhoto } from './Profile.styles';
import sampleImg from '../../../assets/FallbackArtwork.png';

interface ProfileProps {
	showInfos: boolean;
}

export function Profile({ showInfos }: ProfileProps) {
	return (
		<ProfileContainer>
			<ProfilePhoto src={sampleImg} />
			{showInfos && (
				<ProfileInfos>
					<span className='user'>Usuário da Silva</span>
					<span className='role'>Administrador</span>
				</ProfileInfos>
			)}
		</ProfileContainer>
	);
}
