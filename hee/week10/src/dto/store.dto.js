export const reviewResponseDTO = (data) => {
    const reviews = data.map(review => ({
      id: review.id,
      nickname: review.nickname,
      rating: review.rating,
      reviewDate: review.reviewDate,
      reviewDetail: review.reviewDetail
    }));
  
    return {
      reviewData: reviews,
      nextCursor: reviews.length > 0 ? reviews[reviews.length - 1].id : null
    };
  };
  
  export const missionResponseDTO = (data) => {
    const missions = data.map(mission => ({
      id: mission.id,
      storename: mission.storename,
      point: mission.point,
      storeTypes: mission.storeTypes
    }));
  
    return {
      missionData: missions,
      nextCursor: missions.length > 0 ? missions[missions.length - 1].id : null
    };
  };