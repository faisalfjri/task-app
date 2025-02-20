import { z } from 'zod';

// Step 1 Schema
export const taskSchema = z.object({
    title: z
        .string()
        .min(1, { message: 'Title is required' })
        .max(255, { message: 'Title must be at most 255 characters' }),
    description: z
        .string()
        .min(10, { message: 'Description must be at least 10 characters' }),
    status: z.enum(['pending', 'in-progress', 'completed'], {
        required_error: 'Status is required',
    }),
});

export type TaskPureType = z.infer<typeof taskSchema>;

export interface TaskType extends TaskPureType {
    id: string;
    created_at: string;
    updated_at: string;
}
