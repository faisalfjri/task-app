import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/Components/ui/card';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="flex flex-col gap-6">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Register</CardTitle>
                        <CardDescription>Register your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit}>
                            <div className="grid gap-6">
                                <div className="grid gap-4">
                                    <div>
                                        <InputLabel
                                            htmlFor="name"
                                            value="Name"
                                        />

                                        <TextInput
                                            id="name"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            autoComplete="name"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData('name', e.target.value)
                                            }
                                        />

                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="email"
                                            value="Email"
                                        />

                                        <TextInput
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="mt-1 block w-full"
                                            autoComplete="username"
                                            onChange={(e) =>
                                                setData('email', e.target.value)
                                            }
                                        />

                                        <InputError
                                            message={errors.email}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="password"
                                            value="Password"
                                        />

                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    'password',
                                                    e.target.value,
                                                )
                                            }
                                        />

                                        <InputError
                                            message={errors.password}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="password_confirmation"
                                            value="Confirm Password"
                                        />

                                        <TextInput
                                            id="password_confirmation"
                                            type="password"
                                            name="password_confirmation"
                                            value={data.password_confirmation}
                                            className="mt-1 block w-full"
                                            autoComplete="new-password"
                                            onChange={(e) =>
                                                setData(
                                                    'password_confirmation',
                                                    e.target.value,
                                                )
                                            }
                                        />

                                        <InputError
                                            message={
                                                errors.password_confirmation
                                            }
                                            className="mt-2"
                                        />
                                    </div>
                                    <PrimaryButton
                                        disabled={processing}
                                        type="submit"
                                        className="w-full"
                                    >
                                        Register
                                    </PrimaryButton>
                                </div>
                                <div className="text-center text-sm">
                                    Already registered?{' '}
                                    <Link
                                        href="/login"
                                        className="underline underline-offset-4"
                                    >
                                        Log in
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
                {/* <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary">
                    By clicking continue, you agree to our{' '}
                    <a href="#">Terms of Service</a> and{' '}
                    <a href="#">Privacy Policy</a>.
                </div> */}
            </div>
        </GuestLayout>
    );
}
