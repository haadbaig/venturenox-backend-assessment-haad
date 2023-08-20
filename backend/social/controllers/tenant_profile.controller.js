const express = require('express');
const { CreateTenantProfile, GetTenantProfile, DeleteTenantProfileByID, UpdateTenantProfileID } = require('../services/tenant_profile.service');
const router = express.Router();

router.post('/create-tenant', async (req, res) => {
	await CreateTenantProfile(req.body).then(result => {
		res.json(result);
	}).catch(e => {
		console.log(e);
		res.status(400).json(e);
	});
});

router.get('/all', async (req, res) => {
	await GetTenantProfile(null).then(result => {
		res.json(result);
	}).catch(e => {
		console.log(e);
		res.status(400).json(e);
	});
});

router.get('/:id', async (req, res) => {
	const { id } = req.params;
	await GetTenantProfile({id: id}).then(result => {
		res.json(result);
	}).catch(e => {
		console.log(e);
		res.status(400).json(e);
	});
});

router.delete('/:id', async (req, res) => {
	const {id} = req.params;
  
	await DeleteTenantProfileByID(id).then(result => {
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
  
	await UpdateTenantProfileID(id, updatedProperty).then(result => {
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
 
module.exports = router;