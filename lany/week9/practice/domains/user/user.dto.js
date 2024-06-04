export const signupResponseDTO = (user, prefer) => {
  const preferFood = prefer[0].map((category) => category.f_category_name);
  return { email: user[0].email, name: user[0].user_name, preferCategory: preferFood };
};
