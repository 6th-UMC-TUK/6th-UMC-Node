const shopService = require('../services/shopService');

exports.addReview = async (req, res) => {
  try {
    const { shopId } = req.params;
    const { content } = req.body;
    const result = await shopService.addReview(shopId, content);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.addMission = async (req, res) => {
  try {
    const { shopId } = req.params;
    const { title } = req.body;
    const result = await shopService.addMission(shopId, title);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

exports.challengeMission = async (req, res) => {
  try {
    const { shopId, missionId } = req.params;
    const result = await shopService.challengeMission(shopId, missionId);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
