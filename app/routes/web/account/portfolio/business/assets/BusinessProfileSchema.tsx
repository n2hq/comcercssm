import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const urlvalidator = /^(?!https?)(?!www\.?).*\..+$/g


const BusinessProfileSchema = z.object({
    username: z.any(),
    email_address: z.string({ message: "Please enter an email." })
        .min(1, { message: "Email must not be empty" })
        .email({ message: "Please enter a valid email" }),
    title: z.string()
        .min(1, { message: "Enter a business name" })
        .min(3, { message: "Busines Name must not be less than 3 characters" })
        .max(100, { message: "Business name must not be more than 100 characters." }),
    country_code: z.string({ message: "Please select a country" })
        .min(1, { message: "Please enter a country code." }),
    address_one: z.string({ message: "Please enter an address" })
        .min(3, { message: "Address must not be less than 3 characters" })
        .max(100, { message: "Address must not be more than 100 characters" }),
    short_description: z
        .string()
        .refine(
            (val) => {
                const words = val.trim().split(/\s+/).filter(Boolean)
                return words.length >= 30
            },
            { message: 'You must write at least 30 words.' }
        )
        .refine(
            (val) => {
                const words = val.trim().split(/\s+/).filter(Boolean)
                return words.length <= 50
            },
            { message: 'You can only write up to 50 words.' }
        ),
    long_description: z
        .string()
        .nullish() // ✅ allows both undefined and null
        .refine(
            (val) => {
                if (!val || val.trim() === "") {
                    return true; // skip validation if empty or null
                }
                const words = val.trim().split(/\s+/).filter(Boolean);
                return words.length <= 500;
            },
            { message: "You can only write up to 500 words." }
        ),
    address_two: z.any(),
    state_code: z.any(),
    state_text: z.any(),
    country_text: z.any(),
    city_id: z.any(),
    established: z
        .string()
        .optional()
        .refine(
            (val) => !val || (/^\d{1,4}$/.test(val)),
            { message: "Must be only numbers and not more than 4 digits" }
        ),
    call_code: z.any(),
    phone: z.any(),
    zipcode: z.any(),
    intro: z.any(),
    category: z.string()
        .min(2, { message: "Please select a business category" }),
    business_phrases: z.union([
        z.literal(""),
        z.string({ message: "Please enter business phrase" })
            .min(3, { message: "Business Phrases must not be less than 3 characters" })
            .max(1000, { message: "Business Phrases must not be more than 100 characters" })
            .nullish()
    ]),
    products: z.any(),
    services: z.any(),
    xsocial: z.any(),
    fbsocial: z.any(),
    linksocial: z.any(),
    website: z
        .string()
        .nullable()
        .optional()
        .refine(
            (val) => {
                if (!val || val === "") return true; // ✅ allow empty, null, undefined
                try {
                    new URL(val); // will throw if invalid
                    return true;
                } catch {
                    return false;
                }
            },
            { message: "Please enter a valid website. Example: http://example.com" }
        ),
}).superRefine((data, ctx) => {

    if (data?.address_two?.length !== 0) {
        if (data?.address_two?.length < 3) {

            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                path: ['address_two'],
                message: 'Enter a minimum of 3 characters',
            });
        }
    }

})
export default BusinessProfileSchema
