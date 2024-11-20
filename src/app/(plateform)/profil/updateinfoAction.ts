





export async function update(prevState: unknown, formData: FormData) {
  const { username } = formData;
  console.log(username);

  // const existingUser = await findUserByEmail(email);
  // if (existingUser) {
  //   throw new Error("Email already in use");
  // } else {
  //   const hashedPassword = await hashPassword(password);
  //   const user = await createUser(name, email, hashedPassword);
  //   return { user, error: null };
  // }

  return  ;
}

export async function updatePass(prevState: unknown, formData: FormData) {
  const { oldpass,newpass,renewpass } = formData;
  console.log(oldpass,newpass,renewpass);

  // const existingUser = await findUserByEmail(email);
  // if (existingUser) {
  //   throw new Error("Email already in use");
  // } else {
  //   const hashedPassword = await hashPassword(password);
  //   const user = await createUser(name, email, hashedPassword);
  //   return { user, error: null };
  // }

  return;
}
        