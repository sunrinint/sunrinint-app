interface User {
  id: string;
  email: string;
  username: string;
  department: string;
  grade: number;
  class: number;
  number: number;
  birthday: string | null;
  profileImage: string;
  backgroundImage: string;
  type: number;
  role: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}

export default User;

export interface UpdateUser {
  profileImage?: string;
  birthday?: string;
}
