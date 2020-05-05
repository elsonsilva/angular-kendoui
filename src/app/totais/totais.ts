export interface ITotais {
  DATA: Date;
  HORA: number;
  NU_TRANSACAO: number;
  Descricao_transacao: string;
  QTD_META_DIA: number;
  QTD_HIST_ACUM_DIA: number;
  QTD_AFER_ACUM_DIA: number;
  QTD_GAP_HIST_DIA: number;
  QTD_GAP_META_DIA: number;
  QTD_ERRO_AFER_ACUM_DIA: number;
}
