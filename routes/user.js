const express = require('express');

const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Get a list of users from the system
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   username:
 *                     type: string
 *                     example: johndoe
 */
router.get('/users', (req, res) => {
  const users = [
    { id: 1, username: 'johndoe' },
    { id: 2, username: 'janedoe' },
  ];
  res.json(users);
});

module.exports = router;