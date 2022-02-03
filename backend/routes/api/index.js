const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');
const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session')
const usersRouter = require('./user')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);


router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
}));


router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});




module.exports = router;