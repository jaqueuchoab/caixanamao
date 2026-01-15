import { ReportType } from '@/@types/report';
import { api } from '@/lib/api';
import { toast } from 'sonner';

export async function fetchReports(): Promise<ReportType[] | []> {
	try {
		const response = await api.get('/reports?includeValues=true');
		const data = response.data;

		return data;
	} catch (error) {
		if (error instanceof Error) toast.error(error.message);
		return [];
	}
}
