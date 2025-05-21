const User = require('../models/User');
const bcrypt = require('bcrypt');
const fs = require('fs').promises;
const path = require('path');
const uploadDir = path.join(__dirname, '../../uploads');

async function resgiterUser(name, mail, pass, role, photoName, weight, height, activity) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(pass, salt);

        const user = new User({
            name,
            mail,
            pass: hashedPassword,
            role: role || 'ususario',
            photoName,
            weight,
            height,
            activity
        });

        const res = await user.save();
        return res;
    } catch (e) {
        return e;
    }
}
async function loginUser(mail, pass) {
    try {
        const user = await User.findOne({ mail: mail });
        if (!user) {
            console.log('Usuario no encontrado');
            return null;
        }

        // Aquí deberías comparar la contraseña
        const isMatch = await bcrypt.compare(pass, user.pass);
        if (!isMatch) {
            console.log('Contraseña incorrecta');
            return null;
        }

        return user;
    } catch (e) {
        console.log('Error:', e);
    }
}

async function getUsers() {
    try {
        const users = await User.find();
        return users;
    } catch (e) {
        console.log('Error:', e);
    }
}

async function updateUser(id, userData) {
    try {
        const product = await User.findByIdAndUpdate(
            id,
            userData,
            { 
                new: true,
                runValidators: true 
            }
        );
        if (!product) {
            throw new Error('ususario no encontrado');
        };
        return product;
    } catch (e) {
        console.error('Error al actualizar usuario:', e);
        throw e;
    }
}

async function deleteUser(id) {
    try {      
      const product = await User.findByIdAndDelete(id);
      if (!product) {
        throw new Error('Producto no encontrado');
      };
  
      return product;
    } catch (err) {
      console.error('Error al eliminar producto:', err);
      throw err;
    }
  }

  async function isAdmin(name) {
    try {
        const user = await User.findOne({ name: name });
        console.log(user);
        if (!user) {
            console.log('Usuario no encontrado');
            return null;
        };

        if (user.role !== 'admin') {
            console.log('User no admin');
            return null;
        };

        return user;
    } catch (e) {
        console.log('Error:', e);
    }
  }

module.exports = { resgiterUser, loginUser, getUsers, updateUser, deleteUser, isAdmin };