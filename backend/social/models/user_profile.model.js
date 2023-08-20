const { DataTypes } = require('sequelize');
const sequelize = require('../database/DatabaseConfig');

const TenantProfile = require("./tenant_profile.model");

const UserProfile = sequelize.define('User_Profile', {
  first_name: {
    type: DataTypes.STRING(255)
  },
  last_name: {
    type: DataTypes.STRING(255)
  },
  phone: {
    type: DataTypes.STRING(255)
  },
  tenant_profile_id: {
    type: TenantProfile
  },
  image_url: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING(255)
  },
  country: {
    type: DataTypes.STRING(255)
  },
  bio: {
    type: DataTypes.STRING(255)
  },
  social_links: {
    type: DataTypes.JSON()
  },
  employee_id: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: true
});

UserProfile.belongsTo(TenantProfile, {
  foreignKey: "tenant_profile_id"
});

module.exports = UserProfile;