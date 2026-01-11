import { useFormStore } from '@/views/store/user.store';
import { ProfileContainer, ProfileInfos } from './Profile.styles';
import { getRoleById } from '@/utils/get-role-by-id.util';

interface ProfileProps {
	showInfos?: boolean;
	showPhoto?: boolean;
}

export function Profile({ showInfos = true }: ProfileProps) {
	const user = useFormStore((state) => state.user);

	return (
		<ProfileContainer>
			{showInfos && (
				<ProfileInfos>
					<span className='user'>{user.nome}</span>
					<span className='role'>{getRoleById(user.id_cargo)}</span>
				</ProfileInfos>
			)}
		</ProfileContainer>
	);
}
