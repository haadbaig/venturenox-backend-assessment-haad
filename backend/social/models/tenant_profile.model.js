const { DataTypes } = require('sequelize');
const sequelize = require('../database/DatabaseConfig');

const TenantProfile = sequelize.define('Tenant_Profile', {
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  city: {
    type: DataTypes.STRING(255)
  },
  state: {
    type: DataTypes.STRING(255)
  },
  country: {
    type: DataTypes.STRING(255)
  },
  zip_code: {
    type: DataTypes.STRING(255)
  },
  phone: {
    type: DataTypes.STRING(255)
  },
  web_url: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
},{
  timestamps: true
});

module.exports = TenantProfile;