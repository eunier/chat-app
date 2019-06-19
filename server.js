import express from 'express';
import { createServer } from 'http';
import { listen } from 'socket.io';

const app = express();
const server = createServer();
const io = listen(server);
