const express = require('express');
const router = express.Router();
const { GetTenantProfile } = require('../services/tenant_profile.service');
const { CreateUserProfile, UpdateUserProfile, DeleteUserProfile, GetUserProfile } = require('../services/user_profile.service');


router.post('/create-user', async (req, res) => {
	const user_object = req.body;
	await GetTenantProfile(user_object.tenant_profile_id).then(async r => {
		if(r[0]) {
			await CreateUserProfile(user_object).then(result => {
				res.json(result);
			}).catch(e => {
				console.log(e);
				res.status(400).json(e);
			});
		} else {
			res.status(404).json({message:'No tenant found for given ID'});
		}
	}).catch(e => {
		console.log(e);
		res.status(400).json(e);
	});
});

router.get('/all', async (req, res) => {
	await GetUserProfile(null).then(result => {
		res.json(result);
	}).catch(e => {
		console.log(e);
		res.status(400).json(e);
	});
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	await GetUserProfile({
		id: id
	}).then(result => {
		res.json(result);
	}).catch(e => {
		console.log(e);
		res.status(400).json(e);
	});
});

router.delete('/:id', async (req, res) => {
	const {id} = req.params;
  
	await DeleteUserProfile(id).then(result => {
		if(result == 1){
			res.json(result);
		} else {
			res.status(404).json('Not found');
		}
	}).catch(e => {
		console.log(e);
		res.status(400).json(e);
	});
});


// Update request body format:
// {
//    "tenant_name": "jon doe 1"
// }
router.patch('/:id', async (req, res) => {
	const updatedProperty = req.body;
	const { id } = req.params;
  
	await UpdateUserProfile(id, updatedProperty).then(result => {
		if(result == 1){
			res.json(result);
		} else {
			res.status(404).json('Not found');
		}
	}).catch(e => {
		res.status(400).json(e);
	});
});
 
module.exports = router;