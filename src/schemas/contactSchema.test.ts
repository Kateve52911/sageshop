import { expect, describe, test } from 'vitest';
import {contactSchema} from "@/schemas/contactSchema.ts";

const validForm = {fullName: 'Maja', email: 'Maja@mail.com', subject: 'A message for you', message: 'Hello, I am writing to you...'};

describe('Contact schema', () => {
    describe('#validate name', () => {
        test("rejects name shorter than 3 characters", () => {
            expect(contactSchema.safeParse({...validForm, fullName: "ka"}).success).toBe(false)
        })
        test("accepts a name with 3 or more characters", () => {
            expect(contactSchema.safeParse({...validForm, fullName: "Kathrine"}).success).toBe(true)
        })
    })

    describe('#validate email', () => {
        test("rejects invalid email address", () => {
            expect(contactSchema.safeParse({...validForm, email: "ka.no"}).success).toBe(false)
        })
        test("accepts a valid email address", () => {
            expect(contactSchema.safeParse({...validForm, email: "Kathrine@mail.com"}).success).toBe(true)
        })
    })

    describe('#validate subject', () => {
        test("rejects subject shorter than 3 characters", () => {
            expect(contactSchema.safeParse({...validForm, subject: "He"}).success).toBe(false)
        })
        test("accepts subject with 3 or more characters", () => {
            expect(contactSchema.safeParse({...validForm, subject: "Hello!"}).success).toBe(true)
        })
    })

    describe('#validate message', () => {
        test("rejects message shorter than 10 characters", () => {
            expect(contactSchema.safeParse({...validForm, message: "Hello, ar"}).success).toBe(false)
        })
        test("accepts message with 10 or more characters", () => {
            expect(contactSchema.safeParse({...validForm, message: "Hello! How are you?"}).success).toBe(true)
        })
    })
})


