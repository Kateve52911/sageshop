import { z } from 'zod';

/**
 * Validation rules for the contact form.
 *
 * - `fullName`: at least 3 characters
 * - `subject`: at least 3 characters
 * - `email`: must be a valid email address
 * - `message`: at least 10 characters
 *
 * Used with React Hook Form through `zodResolver`.
 */
export const contactSchema = z.object({
    email: z.email('Email must be a valid email address'),
    fullName: z.string().trim().min(3, 'Name must be at least 3 characters'),
    subject: z.string().trim().min(3, 'Subject must be at least 3 characters'),
    message: z.string().trim().min(10, 'Message must be at least 10 characters'),
})

/** The shape of the contact form data, created from `contactSchema`. */
export type ContactFormData = z.infer<typeof contactSchema>