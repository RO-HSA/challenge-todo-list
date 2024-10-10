import { PrismaClient } from '@prisma/client';
import { encodePassword } from '../src/utils/bcrypt';

const prisma = new PrismaClient();

async function main() {
  const defaultUser = {
    email: 'john.doe@gmail.com',
    password: 'randompassword',
  };

  try {
    const userExists = await prisma.user.findUnique({
      where: { email: defaultUser.email },
    });

    if (!userExists) {
      const pass = await encodePassword(defaultUser.password);

      const user = await prisma.user.create({
        data: { ...defaultUser, password: pass },
      });
      console.log('Default user has been created:', user);
    } else {
      console.log('Default user already exists');
    }
  } catch (error) {
    console.error('Error on creating default user:', error);
  }
}

main();
