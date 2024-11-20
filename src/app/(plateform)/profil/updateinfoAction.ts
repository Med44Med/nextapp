





export async function update(prevState: unknown, formData: FormData) {
  const { name, email, password, confirmPassword } = formData;
  const existingUser = await findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email already in use");
  } else {
    const hashedPassword = await hashPassword(password);
    const user = await createUser(name, email, hashedPassword);
    return { user, error: null };
  }
}
        