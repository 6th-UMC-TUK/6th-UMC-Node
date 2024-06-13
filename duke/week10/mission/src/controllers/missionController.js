import { addMission, addMissionChallenge,getStoreMissions, getUserMissions, completeMissionChallenge } from '../services/missionService.js';

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

export const listStoreMissions = async (req, res) => {
    const { storeId } = req.params;
    const { page = 1, size = 10 } = req.query;
    const limit = parseInt(size);
    const offset = (parseInt(page) - 1) * limit;

    try {
        const missions = await getStoreMissions(storeId, limit, offset);
        res.status(200).json(missions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
};

export const listUserMissions = async (req, res) => {
    const { userId } = req.params;
    const { page = 1, size = 10 } = req.query;
    const limit = parseInt(size);
    const offset = (parseInt(page) - 1) * limit;

    try {
        const missions = await getUserMissions(userId, limit, offset);
        res.status(200).json(missions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
};

export const updateMissionChallenge = async (req, res) => {
    const { missionId, userId } = req.params;

    try {
        const result = await completeMissionChallenge(missionId, userId);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: '미션을 찾을 수 없거나 이미 완료되었습니다.' });
        }
        res.status(200).json({ message: '미션이 완료되었습니다.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '서버 오류' });
    }
};
