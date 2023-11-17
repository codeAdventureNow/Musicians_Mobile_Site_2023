import { z, ZodType } from 'zod';

export type FormData = {
  fullName: string;
  zipCode: number;
  email: string;
  phone: number;
  availability: string;
  instruments: Array<String>;
  message: string;
  leadSource: string;
  date: string;
};

const schema: ZodType<FormData> = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 letters.'),
  zipCode: z.coerce
    .number({
      invalid_type_error: 'Please enter a five digit zip code.',
    })
    .int()
    .gte(10000, 'Too few digits, please enter a 5 digit zip code.')
    .lte(99999, 'Too many digits, please enter a 5 digit zip code.'),
  email: z.string().email(),
  phone: z.coerce
    .number({
      invalid_type_error: 'Please enter a ten digit phone number',
    })
    .int()
    .gte(1000000000, 'Your phone number should be at least ten digits.'),
  instruments: z
    .string()
    .array()
    .nonempty({ message: 'Please select an instrument' }),

  availability: z.string(),
  message: z.string(),
  leadSource: z.string().min(2, 'Please select how you discovered us.'),
  date: z.string(),
});

export default schema;
