export const insertNewStore = `INSERT INTO store (region, address, name) values (?, ?, ?)`;

export const isExistAddress = `SELECT EXISTS(SELECT 1 FROM store WHERE address = ?) as isExistAddress`;
