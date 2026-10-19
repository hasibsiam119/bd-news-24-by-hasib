
'use client';

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const handleSignout = async () => {
        await authClient.signOut();
    };

    if (isPending) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center bg-[#0b0c0f] text-white">
                <p className="animate-pulse text-gray-400">
                    Loading profile...
                </p>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 bg-[#0b0c0f] px-4 text-center text-white">
                <h2 className="text-xl font-semibold">
                    You are not signed in
                </h2>
                <p className="text-sm text-gray-400">
                    Please sign in to view your profile.
                </p>
            </div>
        );
    }

    const initials =
        user.name
            ?.split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)
            .toUpperCase() || "U";

    return (
        <main className="min-h-screen bg-[#0b0c0f] px-4 py-10 text-white sm:px-6 sm:py-14">
            <div className="mx-auto max-w-4xl">

                {/* Page Heading */}
                <div className="mb-8">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
                        Account
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                        My Profile
                    </h1>

                    <p className="mt-2 text-sm text-gray-400">
                        Manage your personal information and account.
                    </p>
                </div>

                {/* Profile Card */}
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#13161D] shadow-2xl shadow-black/30">

                    {/* Cover */}
                    <div className="relative h-36 overflow-hidden bg-gradient-to-r from-indigo-950 via-purple-900 to-slate-900 sm:h-48">
                        <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

                        <div className="absolute -bottom-20 left-1/3 h-52 w-52 rounded-full bg-purple-500/20 blur-3xl" />

                        <div className="absolute bottom-5 left-6 sm:left-8">
                            <span className="rounded-full border border-white/20 bg-black/20 px-3 py-1.5 text-xs font-medium tracking-wider text-white/80 backdrop-blur-md">
                                PERSONAL ACCOUNT
                            </span>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="px-5 pb-6 sm:px-8 sm:pb-8">

                        {/* Avatar, Name & Sign Out */}
                        {/* Fixed: no negative margin, so content won't get clipped */}
                        <div className="flex flex-col gap-5 pt-6 sm:flex-row sm:items-center sm:justify-between">

                            <div className="flex min-w-0 items-center gap-4 sm:gap-5">

                                {/* Profile Image */}
                                <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500 to-purple-600 text-2xl font-bold text-white shadow-lg sm:h-24 sm:w-24">
                                    {user.image ? (
                                        <Image
                                            src={user.image}
                                            alt={user.name || "Profile picture"}
                                            width={96}
                                            height={96}
                                            unoptimized
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        initials
                                    )}
                                </div>

                                {/* User Name & Email */}
                                <div className="min-w-0">
                                    <h2 className="break-words text-xl font-bold sm:text-2xl">
                                        {user.name || "User"}
                                    </h2>

                                    <p className="mt-2 break-all text-sm text-gray-400">
                                        {user.email}
                                    </p>

                                    {user.emailVerified && (
                                        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="13"
                                                height="13"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m5 12 4 4L19 6" />
                                            </svg>
                                            Verified Email
                                        </span>
                                    )}
                                </div>
                            </div>
                          <Link href={'/update-profile'}>  <button className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-3 text-sm font-semibold text-green-400 transition hover:border-green-500/50 hover:bg-green-500/20 sm:self-center">Update profile</button>
                          </Link>
                            {/* Sign Out */}
                            <button
                                onClick={handleSignout}
                                className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-400 transition hover:border-red-500/50 hover:bg-red-500/20 sm:self-center"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" y1="12" x2="9" y2="12" />
                                </svg>
                                Sign Out
                            </button>
                        </div>

                        {/* Divider */}
                        <div className="my-7 border-t border-white/10" />

                        {/* Account Information */}
                        <section>
                            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
                                Account Information
                            </h3>

                            <div className="grid gap-4 sm:grid-cols-2">

                                {/* Full Name */}
                                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:border-white/10">
                                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Full Name
                                    </p>

                                    <p className="mt-2 break-words font-semibold text-gray-100">
                                        {user.name || "Not provided"}
                                    </p>
                                </div>

                                {/* Email Address */}
                                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:border-white/10">
                                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Email Address
                                    </p>

                                    <div className="mt-2 flex flex-wrap items-center gap-2">
                                        <span className="break-all text-sm font-semibold text-gray-100">
                                            {user.email}
                                        </span>

                                        {user.emailVerified && (
                                            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">
                                                Verified
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* User ID */}
                                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:border-white/10">
                                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                        User ID
                                    </p>

                                    <p className="mt-2 break-all font-mono text-sm text-gray-300">
                                        {user.id}
                                    </p>
                                </div>

                                {/* Member Since */}
                                <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:border-white/10">
                                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                                        Member Since
                                    </p>

                                    <p className="mt-2 font-semibold text-gray-100">
                                        {user.createdAt
                                            ? new Date(
                                                  user.createdAt
                                              ).toLocaleDateString("en-US", {
                                                  year: "numeric",
                                                  month: "long",
                                                  day: "numeric",
                                              })
                                            : "Not available"}
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Security Footer */}
                        <div className="mt-6 flex items-center gap-3 rounded-2xl border border-indigo-500/10 bg-indigo-500/5 p-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
                                    <path d="m9 12 2 2 4-4" />
                                </svg>
                            </div>

                            <div>
                                <p className="text-sm font-semibold text-gray-200">
                                    Your account is protected
                                </p>

                                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                                    Keep your login credentials private and secure.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
};

export default Profile;
