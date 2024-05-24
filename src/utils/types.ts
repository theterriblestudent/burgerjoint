import  { z, ZodType } from "zod"

export type FormState =  {
    message: string
}

export type NewUserFormData = {
    names: string,
    email: string,
    password: string,
    phone: string
}

export type UserFormData = {
    email: string,
    password: string
}


export const NewUserSchema : ZodType<NewUserFormData> = z.object({
    email: z.string().email("Invalid email"),
    names: z.string().min(2, "Name is too short").max(40, "Name is too long"),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Weak Password"),
    phone: z.string().regex(/^0\d{9}$/)
})

export const UserSchema: ZodType<UserFormData> = z.object({
    email: z.string().email(),
    password: z.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "Invalid Password")
});
