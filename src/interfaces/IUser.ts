export interface IUser {
  id: number;
  type: string;
  email: string;
  first_name: string;
  last_name: string;
  bearer?: string;
}
