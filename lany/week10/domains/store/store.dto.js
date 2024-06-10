export const registerStoreResponseDTO = (storeId) => ({ storeId });

export const addReviewResponseDTO = (storeId) => ({ storeId });

export const addMissionResponseDTO = (storeId) => ({ storeId });

export const addChallengeMissionResponseDTO = (storeId) => ({ storeId });

export const getStoreReviewDTO = (items) => {
  const response = items.map((item) => {
    const date = new Date(item.created_at);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return {
      nickname: item.nickname,
      content: item.content,
      rating: item.rating,
      date: `${year}-${month}-${day}`,
    };
  });

  return { reviews: response, cursor: { id: items[items.length - 1].id, rating: items[items.length - 1].rating } };
};
