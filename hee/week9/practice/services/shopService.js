// services/shopService.js

const { Shop, Review } = require('../models');

exports.addReview = async (shopId, userId, content) => {
  // 상점 ID로 상점을 찾습니다.
  const shop = await Shop.findByPk(shopId);
  
  // 상점이 존재하지 않는 경우, 오류를 발생시킵니다.
  if (!shop) throw new Error('Shop not found');

  // 리뷰를 생성합니다.
  const review = await Review.create({
    ShopId: shopId,
    UserId: userId,
    content: content,
  });

  // 생성된 리뷰를 반환합니다.
  return review;
};

