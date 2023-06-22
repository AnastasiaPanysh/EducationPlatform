const { getUserDB, getUserByIdDB, createUserDB,updateUserDB, deleteUserDB } = require('../repository/user.repository')

async function getUser() {
    return getUserDB()
}

async function getUserById(id) {
    return getUserByIdDB(id)
}

async function createUser(name, surname, email, pwd, role) {
    const user = await createUserDB(name, surname, email, pwd, role)
    return user
}
async function updateUser(id, name, surname, email, pwd, role) {
    const user = await updateUserDB(id, name, surname, email, pwd, role)
    return user
}
async function deleteUser(id) {
    const user = await deleteUserDB(id)
    return user
}


module.exports = { getUser, getUserById, createUser, updateUser, deleteUser }