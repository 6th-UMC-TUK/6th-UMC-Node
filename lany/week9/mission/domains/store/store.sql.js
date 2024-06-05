export const insertNewStore = `INSERT INTO stores (region, address, name) values (?, ?, ?);`;

export const insertNewReview = `INSERT INTO reviews (store_id, content, rating, user_id) values (?, ?, ?, 1);`;

export const isExistAddress = `SELECT EXISTS(SELECT 1 FROM stores WHERE address = ?) as isExistAddress;`;

export const isExistStore = `SELECT EXISTS(SELECT 1 FROM stores WHERE id = ?) as isExistStore;`;
