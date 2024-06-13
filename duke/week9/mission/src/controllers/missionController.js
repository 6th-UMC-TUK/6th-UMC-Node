import { addMission, addMissionChallenge } from '../services/missionService.js';

export const createMission = async (req, res) => {
    const { storeId } = req.params;
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: '모든 필드를 입력해 주세요.' });
    }

    try {
        const result = await addMission(storeId, title, description);
        res.status(201).json({
            id: result.insertId,
            store_id: storeId,
            title,
            description,
            status: '진행중'
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
};

export const createMissionChallenge = async (req, res) => {
    const { missionId } = req.params;
    const { userId } = req.body;
    
    if (!userId) {
        return res.status(400).json({ message: '모든 필드를 입력해 주세요.' });
    }

    try {
        const result = await addMissionChallenge(missionId, userId);
        res.status(201).json({
            id: result.insertId,
            mission_id: missionId,
            user_id: userId,
            status: '진행중',
            created_at: new Date()
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
};
