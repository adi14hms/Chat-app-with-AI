import userModel from '../models/user.model.js';

export const createUser = async ({email, password}) => { 
   if (!email || !password) {
       throw new Error('Missing required fields');
   } 
   const hashedPassword = await userModel.hashPassword(password);
   
   const User = new userModel({
    email,
    password: hashedPassword
}); 
    
return await User.save();

};
export const getAllUsers = async ({userId}) => {
    return await userModel.find({
        _id: {$ne: userId}
    });
    return users;
};