const Discussion = require('../models/discussion.model');

module.exports = {
    createDiscussion: ({name, users}) => {
        const discussion = new Discussion({
            name: name,
            users: users,
            createdAt: new Date()
        });
        discussion.save()
        .catch(error => `error ${error.message}`);
        return discussion;
    },
    findDiscussion: () => {
        let reponse = Discussion.find().then(discussions => { return discussions; });
        return reponse;
    },
    findDiscussionById: (id) => {
        let reponse = Discussion.findById(id)
        .then(discussions => { return discussions; })
        .catch(error => 'Id not found');
        return reponse;
    },
    updateDiscussion: ({id, users}) => {
        return Discussion.findById(id)
        .then((discussion) => {
            discussion.users = users;
            discussion.save();
            return 'Discussion correctly updated'
        })
        .catch(err =>  { return 'id not found' })
        // console.log('update disscusion');
    },
    deleteDiscussion: (id) => {
        let reponse = Discussion.findByIdAndRemove(id)
        .then(() => { return 'discussion deleted' })
        .catch(error => 'Id not found');
        return reponse;
    }
}