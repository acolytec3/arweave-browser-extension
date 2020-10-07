import Arweave from 'arweave';
import moment from 'moment'
import { wallet, page, pdf, transfer } from '../background'

export default {
    async csv (wallet: wallet) {

        let records = [];
        let arweave = Arweave.init({})
        records.push('timestamp,type,from_address,id,status,to_address,amount_winston,amount_ar,fee_winston,fee_ar,url,title');

        let formatRow = (fields: any[]) => {
            let escaped = fields.map((field) => {
                if (field == null || !field) {
                    return `""`;
                }
                return `"${field.toString().replace(/"/g, '""')}"`;
            });

            return escaped.join(',');
        }

        if (wallet.pages) {
            wallet.pages.forEach((page: page) => {
                records.push(formatRow([
                    page.timestamp ? moment(parseInt(page.timestamp) * 1000).format() : null,
                    'archive',
                    wallet.address,
                    page.txnId,
                    page.status,
                    null,
                    null,
                    null,
                    page.fee,
                    arweave.ar.winstonToAr(page.fee, {decimals: 12, formatted: false}),
                    page.url ? page.url : null,
                    page.title ? page.title : null,
                ]));
            })}
            if (wallet.transfers) {
                wallet.transfers.forEach((transfer: transfer) => {
                records.push(formatRow([
                    transfer.timestamp ? moment(parseInt(transfer.timestamp) * 1000).format() : null,
                    "transfer",
                    wallet.address,
                    transfer.txnId,
                    transfer.status,
                    transfer.to,
                    transfer.amount,
                    arweave.ar.winstonToAr(transfer.amount, {decimals: 12, formatted: false}),
                    transfer.fee,
                    arweave.ar.winstonToAr(transfer.fee, {decimals: 12, formatted: false}),
                    null,
                    null,
                ]));
            })}
            if (wallet.pdfs) {
                wallet.pdfs.forEach((pdf: pdf) => {
                    records.push(formatRow([
                        pdf.timestamp ? moment(parseInt(pdf.timestamp) * 1000).format() : null,
                        'file',
                        wallet.address,
                        pdf.txnId,
                        pdf.status,
                        null,
                        null,
                        null,
                        pdf.fee,
                        arweave.ar.winstonToAr(pdf.fee, {decimals: 12, formatted: false}),
                        pdf.url ? pdf.url : null,
                        null,
                    ]));
                })}

       return records.join('\n')
    }
}