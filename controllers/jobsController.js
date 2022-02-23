import Job from '../models/Job.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequest, UnauthenticatedError } from '../Errors/index.js';

const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    throw new BadRequest('Please provide all the values');
  }

  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

const deleteJob = async (req, res) => {
  res.send('delete job');
};

const getAllJobs = async (req, res) => {
  res.send('getAllJobs');
};

const updateJob = async (req, res) => {
  res.send('update job');
};

const showStats = async (req, res) => {
  res.send('showStats');
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
