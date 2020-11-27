module.exports = {
    create: (req, res, next) => {
        let errorEmail = false;
        if(!req.body.name) return res.send('Name is required');
        if(req.body.name.length < 2 || req.body.name.length > 18) return res.send('Name must be between 2 and 18 caracters');
        if(!Array.isArray(req.body.users) || req.body.users.length < 2) return res.send('A discussion need 2 users');
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        req.body.users.forEach(el => el.match(regex) === null ? errorEmail = true : null);
        if(errorEmail) return res.send('Invalid email to create a discussion');
        next();
    },
    update: (req, res, next) => {
        if(!req.body.users) return res.send('users needed to update the discussion');
        if(req.body.users.length < 2) return res.send('A discussion need 2 users');
        next();
    }
}