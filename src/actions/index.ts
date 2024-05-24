'use server'
import bcyrpt from "bcrypt";
import { FormState, NewUserSchema, UserFormData, UserSchema } from "@utils/types";
import { createSession } from "@auth/lib";
import {prisma} from "../../prisma/client";


//Form actions

export async function onCreateAccountAction(previousState: FormState, data: FormData) {
    //Data validation
    const newUser = NewUserSchema.parse(
        {
            names: data.get("names"),
            email: data.get("email"),
            password: data.get("password"),
            phone: data.get("phone")
        }
    );

    //Checking if the email has already been used.
    let user = await prisma.user.findFirst({
        where: {email: newUser.email}
    })

    if(user) {
        throw new Error("User with the provided ermail already exists");
    }

    //Password hashing
    const SALT_ROUNDS = 10;
    const hashedPassword = await bcyrpt.hash(newUser.password, SALT_ROUNDS);

    // Inserting the new user into the database
    try {
        user = await prisma.user.create({
            data: {
                first_name: newUser.names.split(" ")[0],
                last_name: newUser.names.split(" ")[1],
                email: newUser.email,
                password: hashedPassword,
                phone: newUser.phone
            }
        });
    } catch(error) {
        console.log(error);
    }

    createSession(newUser).catch(error => console.log(error));

    return {
        message: "User created!"
    }
}

export async function onUserLogin(previousState: FormState, data: FormData) {
    //Validating Data
    const userData = UserSchema.parse({email: data.get("email"), password: data.get("password")});

    //Fetching the user from the database
    try {
        const user = await prisma.user.findUniqueOrThrow({
            where: {
                email: userData.email
            }
        })

        const passwordMatch = await bcyrpt.compare(userData.password, user.password);
        if (passwordMatch) {
            createSession(
                {
                    names: `${user.first_name} ${user.last_name}`,
                    email: user.email,
                    phone: user.phone,
                    password: user.password
                }
            ).catch(error => console.log(error));
        }
    } catch(error) {
        console.log(error);
    }  

    return {
        message: "User logged in!"
    };

}