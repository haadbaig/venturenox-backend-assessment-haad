const { CreateTenantProfile } = require("../services/tenant_profile.service");
const { CreateUserProfile } = require("../services/user_profile.service");

const processMessage = async (kafkaMessage) => {
	// console.log("kafkaMessage", kafkaMessage);
	if(kafkaMessage.event_name == 'tenant_created') {
		await CreateTenantProfile(kafkaMessage.properties).then(result => {
			console.log(result.id)
			return result;
		}).catch(e => {
			console.log(e);
			return e;
		});
	}

	if(kafkaMessage.event_name == 'user_created') {
		await CreateUserProfile(kafkaMessage.properties).then(result => {
			console.log(result.id)
			return result;
		}).catch(e => {
			console.log(e);
			return e;
		});
	}

};

module.exports = { processMessage };

