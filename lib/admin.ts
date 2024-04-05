import { auth } from '@clerk/nextjs';

const adminIds = ['user_2domcL7TDMoJaJD0hq1dc5phNXi'];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  return adminIds.indexOf(userId) !== -1;
};
