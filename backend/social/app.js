const express = require('express');
// const { initConsumer } = require('./utilities/consumer');
const { initProducer } = require('./utilities/producer');
// const { connectConsumer } = require('./utilities/consumer');
// const { connectProducer, connectAdmin } = require('./utilities/producer');
// const KeyMaster = require('./utilities/KeyMaster');
const routes = require('./routes/routes');
const app = express();
const envVars = require('./config/common_env_vars');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.get('/', (req, res) => {
	res.status(200).json({ message: 'App is running on Local' });
});

app.listen(envVars.PORT || 4000, async () => {
	console.log('App started at port', envVars.PORT || 4000);
	await initProducer();
});