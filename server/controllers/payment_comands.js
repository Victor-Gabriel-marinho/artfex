import{MercadoPagoConfig, Payment} from 'mercadopago';

export const pagamento = async (req, res) => {
    const client = new MercadoPagoConfig({
        accessToken: process.env.ACCESS_TOKEN,
        options: {
            timeout: 5000,
            idempotencyKey: 'abcd1234',
        },
    });
    const payment = new Payment(client);
    // Verifica se os campos obrigatórios estão preenchidos
    const { transaction_amount, description, payer_email } = req.body;
    if (!transaction_amount || !description || !payer_email) {
        return res.status(400).json({error: 'Campos obrigatórios não preenchidos'});
    }

    const body = {
        transaction_amount: Number(transaction_amount),
        description: description,
        payment_method_id: 'pix',
        payer: {
            email: payer_email,
        },
    };

    try {
        const response = await payment.create({body});
        console.log('Pagamento criado:', response);
        res.status(201).json({
            id: response.id,
            status: response.status,
            transaction_amount: body.transaction_amount,
            description: body.description,
            payer_email: body.payer.email,
            qr_code: response.point_of_interaction?.transaction_data?.qr_code,
            qr_code_base64: `data:image/png;base64,${response.point_of_interaction?.transaction_data?.qr_code_base64}`,
            ticket_url: response.point_of_interaction?.transaction_data?.ticket_url,
        });
    } catch (error) {
        console.error('Erro ao criar pagamento:', error);
        res.status(500).json({ error: 'Erro ao criar pagamento' });
    }
}