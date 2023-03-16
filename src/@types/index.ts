export interface IConvertParams {
    user_id: string,
    source_currency: string,
    source_amount: string,
    destination_currency: string;
}

export interface ITransactrionsParams {
    user_id: string,
}

export interface IResponseSuccess extends IConvertParams {
    transaction_id: string
    destination_amount: string
    conversion_used: string;
    date: string
}

export interface IResponseError {
    error: { 
        status: number,
        message: string 
    }
}


