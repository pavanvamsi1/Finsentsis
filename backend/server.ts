import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import { connectDB } from './config/db';
import leadRoutes from './routes/lead.routes';

const app = express();
const port = Number(process.env.PORT || 5000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_req: Request, res: Response) => {
	res.status(200).json({ success: true, message: 'Server is running' });
});

app.use('/api/leads', leadRoutes);

app.use((_req: Request, res: Response) => {
	res.status(404).json({ success: false, message: 'Route not found' });
});

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
	console.error(err);
	res.status(500).json({ success: false, message: 'Internal server error' });
});

const startServer = async (): Promise<void> => {
	try {
		await connectDB();
		app.listen(port, () => {
			console.log(`Backend server running on port ${port}`);
		});
	} catch (error) {
		console.error('Failed to start server:', error);
		process.exit(1);
	}
};

void startServer();
