const router = require('express').Router();
const verifyAccessToken = require('../../middleware/verifyAccessToken');
const generateTokens = require('../../utils/authUtils');

router.get('/refresh', verifyAccessToken, (req, res) => {
  const { user } = res.locals;
  const { accessToken, refreshToken } = generateTokens({ user });
  res
    .cookie('refresh', refreshToken, { httpOnly: true })
    .status(200)
    .json({ message: 'success', accessToken, user });
});

module.exports = router;