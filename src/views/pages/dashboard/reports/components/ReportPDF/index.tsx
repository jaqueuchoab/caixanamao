import { RegisterType } from '@/@types/register/register';
import { ReportType } from '@/@types/report';
import { User } from '@/models/user.model';
import {
	Page,
	Text,
	View,
	Document,
	StyleSheet,
	Image,
} from '@react-pdf/renderer';

import logoImg from '@assets/logos/light-theme-assets/cnm-logohorz-light.png';

const styles = StyleSheet.create({
	page: {
		padding: 30,
		paddingBottom: 50,
		fontSize: 10,
		fontFamily: 'Helvetica',
	},
	header: {
		flexDirection: 'column',
		gap: 12,
		marginBottom: 15,
		paddingBottom: 10,
	},
	logo: { width: 120, height: 'auto' },
	title: { fontSize: 16, fontWeight: 'bold' },
	infoContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		border: '1px solid #ccc',
		padding: 5,
		marginBottom: 10,
	},
	infoBox: {
		border: '1px solid #ccc',
		padding: 4,
		margin: 2,
		borderRadius: 2,
	},
	infoLabel: { fontWeight: 'bold' },

	table: { display: 'flex', width: 'auto' },
	tableRow: {
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
		borderBottomStyle: 'solid',
		alignItems: 'center',
		height: 22,
	},
	tableHeader: { backgroundColor: '#000', color: '#fff', fontWeight: 'bold' },

	colId: { width: '15%' },
	colDate: { width: '12%', textAlign: 'center' },
	colMoney: { width: '12.2%', textAlign: 'right', paddingRight: 5 },
	cell: { fontSize: 8, padding: 3 },

	tableFooter: {
		backgroundColor: '#333',
		color: '#fff',
		fontWeight: 'bold',
		height: 25,
	},
	netRevenueRow: {
		backgroundColor: '#f9f9f9',
		borderBottomWidth: 2,
		borderBottomColor: '#000',
		height: 30,
	},

	footerContainer: {
		position: 'absolute',
		bottom: 20,
		left: 30,
		right: 30,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderTopWidth: 0.5,
		borderTopColor: '#eee',
		paddingTop: 10,
		color: '#00000072',
		fontSize: 8,
	},
});

type ReportPDFProps = {
	report: ReportType;
	user: User;
	registers: RegisterType[];
};

export function ReportPDF({ report, user, registers }: ReportPDFProps) {
	const LIMIT_FIRST_PAGE = 12;
	const LIMIT_OTHER_PAGES = 22;

	const pages: RegisterType[][] = [];
	let currentIdx = 0;

	while (currentIdx < registers.length) {
		const isFirstPage = pages.length === 0;
		const limit = isFirstPage ? LIMIT_FIRST_PAGE : LIMIT_OTHER_PAGES;
		pages.push(registers.slice(currentIdx, currentIdx + limit));
		currentIdx += limit;
	}

	const totalT = registers.length;

	const calcTotal = (key: keyof RegisterType) =>
		registers.reduce((acc, reg) => acc + (Number(reg[key]) || 0), 0);

	const tEspecie = report.values?.valor_especie ?? calcTotal('valor_especie');
	const tCartao = report.values?.valor_cartao ?? calcTotal('valor_cartao');
	const tPix = report.values?.valor_pix ?? calcTotal('valor_pix');
	const tDespesas =
		report.values?.valor_despesas ?? calcTotal('valor_despesas');
	const tInicial = report.values?.valor_inicial ?? calcTotal('valor_inicial');
	const receitaLiquida =
		Number(tEspecie) + Number(tCartao) + Number(tPix) - Number(tDespesas);

	return (
		<Document>
			{pages.map((pageRegisters, pageIdx) => (
				<Page
					key={pageIdx}
					size='A4'
					orientation='landscape'
					style={styles.page}
				>
					{pageIdx === 0 && (
						<View style={styles.header}>
							<Image src={logoImg} style={styles.logo} />

							<Text style={styles.title}>
								Relatório #{report.id}
							</Text>

							<View style={styles.infoContainer}>
								<View style={styles.infoBox}>
									<Text>
										<Text style={styles.infoLabel}>
											Identificador:{' '}
										</Text>

										{report.id}
									</Text>
								</View>

								<View style={styles.infoBox}>
									<Text>
										<Text style={styles.infoLabel}>
											Nome:{' '}
										</Text>

										{report.nome ?? 'N/A'}
									</Text>
								</View>

								<View style={styles.infoBox}>
									<Text>
										<Text style={styles.infoLabel}>
											Descrição:{' '}
										</Text>

										{report.descricao ?? 'N/A'}
									</Text>
								</View>

								<View style={styles.infoBox}>
									<Text>
										<Text style={styles.infoLabel}>
											Criado em:{' '}
										</Text>

										{report.criado_em &&
											new Date(
												report.criado_em,
											).toLocaleDateString('pt-br', {
												hour: '2-digit',

												minute: '2-digit',
											})}
									</Text>
								</View>

								<View style={styles.infoBox}>
									<Text>
										<Text style={styles.infoLabel}>
											Última edição:{' '}
										</Text>

										{report.atualizado_em &&
											new Date(
												report.atualizado_em,
											).toLocaleDateString('pt-br', {
												hour: '2-digit',

												minute: '2-digit',
											})}
									</Text>
								</View>

								<View style={styles.infoBox}>
									<Text>
										<Text style={styles.infoLabel}>
											Gerado por usuário:{' '}
										</Text>

										{user.nome}
									</Text>
								</View>

								<View style={styles.infoBox}>
									<Text>
										<Text style={styles.infoLabel}>
											Documento gerado em:{' '}
										</Text>

										{new Date().toLocaleDateString(
											'pt-br',
											{
												hour: '2-digit',

												minute: '2-digit',
											},
										)}
									</Text>
								</View>
							</View>

							<Text
								style={{
									fontSize: 14,
									fontWeight: 'bold',
									marginBottom: 5,
								}}
							>
								Registros
							</Text>
						</View>
					)}

					<View style={styles.table}>
						{/* Header da Tabela em todas as páginas */}
						<View style={[styles.tableRow, styles.tableHeader]}>
							<Text style={[styles.cell, styles.colId]}>
								ID (Sufixo)
							</Text>
							<Text style={[styles.cell, styles.colDate]}>
								Início
							</Text>
							<Text style={[styles.cell, styles.colDate]}>
								Fim
							</Text>
							<Text style={[styles.cell, styles.colMoney]}>
								Inicial (R$)
							</Text>
							<Text style={[styles.cell, styles.colMoney]}>
								Espécie (R$)
							</Text>
							<Text style={[styles.cell, styles.colMoney]}>
								Cartão (R$)
							</Text>
							<Text style={[styles.cell, styles.colMoney]}>
								PIX (R$)
							</Text>
							<Text style={[styles.cell, styles.colMoney]}>
								Despesas (R$)
							</Text>
						</View>

						{/* Registros da página atual */}
						{pageRegisters.map((reg, index) => (
							<View key={index} style={styles.tableRow}>
								<Text style={[styles.cell, styles.colId]}>
									{reg.id.split('-')[0]}
								</Text>
								<Text style={[styles.cell, styles.colDate]}>
									{new Date(reg.data).toLocaleDateString(
										'pt-br',
									)}
								</Text>
								<Text style={[styles.cell, styles.colDate]}>
									{new Date(
										reg.data_final,
									).toLocaleDateString('pt-br')}
								</Text>
								<Text style={[styles.cell, styles.colMoney]}>
									{Number(reg.valor_inicial).toFixed(2)}
								</Text>
								<Text style={[styles.cell, styles.colMoney]}>
									{Number(reg.valor_especie).toFixed(2)}
								</Text>
								<Text style={[styles.cell, styles.colMoney]}>
									{Number(reg.valor_cartao).toFixed(2)}
								</Text>
								<Text style={[styles.cell, styles.colMoney]}>
									{Number(reg.valor_pix).toFixed(2)}
								</Text>
								<Text style={[styles.cell, styles.colMoney]}>
									{Number(reg.valor_despesas).toFixed(2)}
								</Text>
							</View>
						))}

						{/* Totais apenas na última página */}
						{pageIdx === pages.length - 1 && (
							<>
								<View
									style={[
										styles.tableRow,
										styles.tableFooter,
									]}
								>
									<Text
										style={[
											styles.cell,
											{
												width: '39%',
												fontWeight: 'bold',
											},
										]}
									>
										TOTAIS ACUMULADOS
									</Text>
									<Text
										style={[styles.cell, styles.colMoney]}
									>
										{Number(tInicial).toFixed(2)}
									</Text>
									<Text
										style={[styles.cell, styles.colMoney]}
									>
										{Number(tEspecie).toFixed(2)}
									</Text>
									<Text
										style={[styles.cell, styles.colMoney]}
									>
										{Number(tCartao).toFixed(2)}
									</Text>
									<Text
										style={[styles.cell, styles.colMoney]}
									>
										{Number(tPix).toFixed(2)}
									</Text>
									<Text
										style={[styles.cell, styles.colMoney]}
									>
										{Number(tDespesas).toFixed(2)}
									</Text>
								</View>
								<View
									style={[
										styles.tableRow,
										styles.netRevenueRow,
									]}
								>
									<Text
										style={[
											styles.cell,
											{
												width: '39%',
												textAlign: 'right',
												paddingRight: 10,
												fontWeight: 'bold',
											},
										]}
									>
										RECEITA LÍQUIDA:
									</Text>
									<Text
										style={[
											styles.cell,
											{
												width: '61%',
												fontSize: 11,
												fontWeight: 'bold',
												color:
													receitaLiquida >= 0
														? '#006400'
														: '#8b0000',
											},
										]}
									>
										R$ {receitaLiquida.toFixed(2)}
									</Text>
								</View>
							</>
						)}
					</View>

					{/* Rodapé Geral Dinâmico */}
					<View style={styles.footerContainer} fixed>
						<Text
							render={({ pageNumber, totalPages }) => {
								const previousPagesRegistersNumber = pages
									.slice(0, pageIdx)
									.reduce((acc, p) => acc + p.length, 0);

								const actualPageRegistersNumber =
									previousPagesRegistersNumber +
									pageRegisters.length;

								return `Página ${pageNumber}/${totalPages} - ${actualPageRegistersNumber}/${totalT} registros`;
							}}
						/>
						<Text>
							Gerado automaticamente pelo sistema CaixaNaMão
						</Text>
					</View>
				</Page>
			))}
		</Document>
	);
}
