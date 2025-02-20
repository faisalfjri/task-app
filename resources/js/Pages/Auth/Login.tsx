import Checkbox from '@/Components/Checkbox';
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

export default function Login({
    status,
    canResetPassword,
}: {
    status?: string;
    canResetPassword: boolean;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false as boolean,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <div className="flex flex-col gap-6">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-xl">Login</CardTitle>
                        <CardDescription>Login your account</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={submit}>
                            <div className="grid gap-6">
                                <div className="grid gap-4">
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
                                            isFocused={true}
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
                                        <div className="flex items-center">
                                            <InputLabel
                                                htmlFor="password"
                                                value="Password"
                                            />
                                            {canResetPassword && (
                                                <Link
                                                    href={route(
                                                        'password.request',
                                                    )}
                                                    className="ml-auto text-sm underline-offset-4 hover:underline"
                                                >
                                                    Forgot your password?
                                                </Link>
                                            )}
                                        </div>

                                        <TextInput
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            className="mt-1 block w-full"
                                            autoComplete="current-password"
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
                                    <div className="block">
                                        <label className="flex items-center">
                                            <Checkbox
                                                name="remember"
                                                checked={data.remember}
                                                onChange={(e) =>
                                                    setData(
                                                        'remember',
                                                        (e.target.checked ||
                                                            false) as false,
                                                    )
                                                }
                                            />
                                            <span className="ms-2 text-sm text-gray-600">
                                                Remember me
                                            </span>
                                        </label>
                                    </div>
                                    <PrimaryButton
                                        type="submit"
                                        className="w-full"
                                        disabled={processing}
                                    >
                                        Login
                                    </PrimaryButton>
                                </div>
                                <div className="text-center text-sm">
                                    Don&apos;t have an account?{' '}
                                    <Link
                                        href="/register"
                                        className="underline underline-offset-4"
                                    >
                                        Register
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
