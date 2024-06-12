import { addStore } from '../services/storeService.js';

export const createStore = async (req, res) => {
    const { region, address, name } = req.body;
    console.log(region,address,name);
    if (!region || !address || !name) {
        return res.status(400).json({ 
            message: '모든 필드를 입력해 주세요.' 
        });
    }

    try {
        const result = await addStore(region, address, name);
        res.status(201).json({
            id: result.insertId,
            region,
            address,
            name
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
};
