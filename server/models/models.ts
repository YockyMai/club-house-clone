import { sequelize } from "../core/db";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  "User",
  {
    // Model attributes are defined here
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    avatarUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

const Codes = sequelize.define(
  "Codes",
  {
    code: {
      type: DataTypes.INTEGER,
    },
    type: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

User.hasOne(Codes);
Codes.belongsTo(User);

export { User, Codes };
