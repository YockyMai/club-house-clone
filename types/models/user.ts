import { modelInstance } from "./model.instance";

export interface userModel extends modelInstance {
  fullname: string;
  avatarUrl: string;
  isActive: number;
  phone: string;
  username: string;
}
