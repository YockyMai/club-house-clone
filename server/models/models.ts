import { sequelize } from "../core/db";
import { DataTypes } from "sequelize";

const User = sequelize.define("user", {
  name: DataTypes.TEXT,
});
