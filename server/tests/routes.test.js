const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);
const token = 'xyz0987654321';

describe('route /encode', () => {
	test('unauthorized returns 401', async () => {
		const res = await request
			.post('/encode')
			.send({ input: 'XXXYYYYZZQXX' });
	
		expect(res.statusCode).toEqual(401);
		expect(res.body).not.toHaveProperty('result');
	});
	
	test('authorized works with example input', async () => {
		const res = await request
			.post('/encode')
			.set('authorization', token)
			.send({ input: 'XXXYYYYZZQXX' });
	
		expect(res.statusCode).toBe(200)
		expect(res.body.result).toBe('X3Y4Z2Q1X2');
	});
	
	test('invalid body does not work', async () => {
		const res = await request
			.post('/encode')
			.set('authorization', token)
			.send('{input:"XXXYYYYZZQXX"}');
	
		expect(res.statusCode).toBe(500);
		expect(res.body).not.toHaveProperty('result');
	});
	
	test('empty body does not work', async () => {
		const res = await request
			.post('/encode')
			.set('authorization', token);
	
		expect(res.statusCode).toBe(500);
		expect(res.body).not.toHaveProperty('result');
	});
});