const TenantProfileModel = require('../models/tenant_profile.model');

const CreateTenantProfile = async (tenant_data) => {
	return await TenantProfileModel.create(tenant_data);
};

const GetTenantProfile = async (condition) => {
	return await TenantProfileModel.findAll({
		where: condition
	});
};

const DeleteTenantProfileByID = async (id) => {
	return await TenantProfileModel.destroy({
		where: {
			id: id
		}
	});
};

const UpdateTenantProfileID = async (id, updatedProperty) => {
	return await TenantProfileModel.update(updatedProperty, {
		where: {
			id: id
		}
	});
};

module.exports = {
	CreateTenantProfile,
	GetTenantProfile,
	DeleteTenantProfileByID,
	UpdateTenantProfileID
};