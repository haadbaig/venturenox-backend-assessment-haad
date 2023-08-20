const UserProfileModel = require('../models/user_profile.model');
const TenantProfileModel = require('../models/tenant_profile.model');

const CreateUserProfile = async (user_data) => {
	return await UserProfileModel.create(user_data);
};

const GetUserProfile = async (condition) => {
	return await UserProfileModel.findAll({
		where: condition,
		include: [
			{
				model:TenantProfileModel
			}
		]
	});
};

const UpdateUserProfile = async (id, updatedProperty) => {
	return await UserProfileModel.update(updatedProperty, {
		where: {
			id: id
		}
	});
};

const DeleteUserProfile = async (id) => {
	return await UserProfileModel.destroy({
		where: {
			id: id
		}
	});
};

module.exports = {
	CreateUserProfile,
	GetUserProfile,
	UpdateUserProfile,
	DeleteUserProfile
};