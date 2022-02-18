import { nextTick } from 'process';
import User from '../models/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest, NotFound } from '../Errors/index.js';

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    if (!name || !email || !password) {
      throw new BadRequest('please provide all the values');
    }

    const userEmailAlreadyUsed = await User.findOne({ email });
    if (userEmailAlreadyUsed) {
      throw new BadRequest('User email already in use');
    }

    const user = await User.create({ name, email, paswword });

    const token = user.createJWT();

    res.status(StatusCodes.OK).json({
      user: {
        email: user.email,
        lastName: user.lastName,
        location: user.location,
        name: user.name,
      },
      token,
      location: user.location,
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {
  res.send('login');
};

const updateUser = async (req, res) => {
  res.send('updateUser');
};

export { register, login, updateUser };
